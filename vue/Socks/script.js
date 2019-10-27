const testing = new Vue({
    el: '#app',
    data: {
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
        ],
        cart: 0
    },
    methods: {
        addToCart: function () {
            this.cart += 1
        },
        updateProduct: function (index) {
            this.selectedVariant = index
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
        }
    }
})