<template>
  <div class="col-xs-12 col-sm-6">
    <p>Server #{{ server.id }} selected, status:{{ server.status}}</p>
    <button @click="changeStatus">Change Status</button>
  </div>
</template>

<script>
export default {
  props: ["server"],
  methods: {
    changeStatus: function() {
      this.server.status = "Normal";
    }
  }
};
</script>

<style scoped>
div {
  padding: 10px;
  border: 1px solid grey;
  background-color: #ccc;
}
</style>
