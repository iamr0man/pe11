import Vue from 'vue'
import App from './App.vue'

export const eventBus = new Vue({
  methods: {
    changeDetail(server) {
      this.$emit('statusWasChanged', server)
    }
  }
})

new Vue({
  el: '#app',
  render: h => h(App)
})
