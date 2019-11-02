Vue.component('togglebutton', {
    props: ['label', 'name'],
    template: `<div class="togglebutton-wrapper" v-bind:class="isActive ? 'togglebutton-checked' : ''">
        <label v-bind:for="name">
          <span class="togglebutton-label">{{ label }}</span>
          <span class="tooglebutton-box"></span>
        </label>
        <input v-bind:id="name" type="checkbox" v-bind:name="name" v-model="isActive" v-on:change="onToogle">
    </div>`,
    model: {
        prop: 'checked',
        event: 'change'
    },
    data: function () {
        return {
            isActive: false
        }
    },
    methods: {
        onToogle: function () {
            this.$emit('clicked', this.isActive)
        }
    }
});

const todolist = new Vue({
    el: '#todolist',
    data: {
        newitem: '',
        sortByStatus: false,
        todo: [
            { id: 1, label: "Repeat Vue", done: true },
            { id: 2, label: "Code a todo list", done: false },
            { id: 3, label: "Repeat React", done: false }
        ]
    },
    methods: {
        addItem: function () {
            this.todo.push({ id: Math.floor(Math.random() * 9999) + 10, label: this.newitem, done: false });
            this.newitem = '';
        },
        markAsDoneOrUndone: function (item) {
            item.done = !item.done;
        },
        deleteItemFromList: function (item) {
            let index = this.todo.indexOf(item)
            this.todo.splice(index, 1);
        },
        clickontoggle: function (active) {
            this.sortByStatus = active;
        }
    },
    computed: {
        todoByStatus: function () {

            if (!this.sortByStatus) {
                return this.todo;
            }
            var doneArray = this.todo.filter(e => e.done);
            var notDoneArray = this.todo.filter(e => !e.done);

            return [...notDoneArray, ...doneArray];
        }
    }
});