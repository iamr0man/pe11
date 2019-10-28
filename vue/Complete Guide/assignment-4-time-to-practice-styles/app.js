new Vue({
  el: '#exercise',
  data: {
    color: '',
    effectClasses: {
      highlight: true,
      shrink: false
    },
    arrayClasses: {
      boxed: true,
      red: true
    },
    width: 0,
  },
  methods: {
    startEffect: function () {
      setInterval(() => {
        this.effectClasses.highlight = !this.effectClasses.highlight

        this.effectClasses.shrink = !this.effectClasses.shrink
      }, 1000)
    },
    startProgress: function () {
      const id = setInterval(() => {
        if (this.width > 100)
          clearInterval(id)
        return this.width += 30
      }, 1200)
    },
  }
});
