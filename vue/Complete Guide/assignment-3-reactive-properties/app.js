new Vue({
    el: '#exercise',
    data: {
        value: 0,
    },
    watch: {
        value: function (value) {
            const vm = this;
            setTimeout(function () {
                vm.value = 148
            }, 5000)
        }
    },
    computed: {
        result: function () {
            return this.value === 37 ? 'Done' : 'not there yet'
        }
    }
})