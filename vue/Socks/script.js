Vue.component('product', {
    props: {
        premium: {
            type: Boolean,
            required: true
        }
    },
    template: `
    <div class="product">

        <div class="product-image">
            <img :src="image" />
        </div>

        <div class="product-info">
            <h1>{{ title }}</h1>
            <p v-if="inStock">In Stock</p>
            <p v-else>outOfStock</p>
            <ul>
                <li v-for="detail in details">{{detail}}</li>
            </ul>

            <div v-for="(variant, index) in variants" :key="variant.vId" class="color-box"
                :style="{backgroundColor: variant.variantColor}" @mouseover="updateProduct(index)">
            </div>

            <button @click="addToCart" :disabled="!inStock" :class="{disabledButton: !inStock}">Add to Cart</button>
            <button @click="removeFromCart" :disabled="!inStock" :class="{disabledButton: !inStock}">Remove From Cart</button>
    
            </div>
        </div>
    </div>`,
    data() {
        return {
            brand: 'Vue Mastery',
            product: 'Socks',
            selectedVariant: 0,
            details: ["80% cotton", "20% polyester", "Gender-neutral"],
            onSale: true,
            variants: [
                {
                    vId: 2234,
                    variantColor: "green",
                    variantImage: "./image/vmSocks-green.jpg",
                    variantQuantity: 10
                },
                {
                    vId: 2235,
                    variantColor: "blue",
                    variantImage: "./image/vmSocks-blue.jpg",
                    variantQuantity: 0
                },
            ]
        }
    },
    methods: {
        addToCart: function () {
            this.$emit('add-to-cart',this.variants[this.selectedVariant].vId)
        },
        updateProduct: function (index) {
            this.selectedVariant = index
        },
        removeFromCart: function() {
            this.$emit('remove-from-cart', this.variants[this.selectedVariant].vId)
        }
    },
    computed: {
        title() {
            return this.brand + ' ' + this.product
        },
        image() {
            return this.variants[this.selectedVariant].variantImage
        },
        inStock() {
            return this.variants[this.selectedVariant].variantQuantity
        },
        shipping() {
            if (this.premium) {
              return "Free"
            } else {
              return 2.99
            }
          }
    }
})

Vue.component('product-review', {
    template:`
    <form class="review-form" @submit.prevent="onSubmit">
        <p>
            <label for="name">Name:</label>
            <input id="name" v-model="name" placeholder="name">
        </p>
        
        <p>
            <label for="review">Review:</label>      
            <textarea id="review" v-model="review"></textarea>
        </p>
        
        <p>
            <label for="recommend">Would you recommend it?</label>
            <input id="reccomend v-model="recommend" placeholder="recommend"> 
        </p>

        <p>
            <label for="rating">Rating:</label>
            <select id="rating" v-model.number="rating">
                <option>5</option>
                <option>4</option>
                <option>3</option>
                <option>2</option>
                <option>1</option>
            </select>
        </p>
            
        <p>
            <input type="submit" value="Submit">  
        </p>    
        
    </form>`,
    data() {
        return {
            name: null,
            review: null,
            rating: null,
            recommend: null
        }
    },
    methods: {
        onSubmit() {
        let productReview = {
            name: this.name,
            review: this.review,
            rating: this.rating,
            recommend: this.recommend
        }
        this.$emit('review-submitted', productReview)
        this.name = null
        this.review = null
        this.rating = null
        this.recommend = null
        }
    }
})

var app = new Vue({
    el: '#app',
    data: {
      premium: true,
      cart: []
    },
    methods: {
        updateCart(id) {
            this.cart.push(id)
        },
        removeSocks(id) {
            this.cart.splice(this.cart.indexOf(id), 1)
        }
    }
})