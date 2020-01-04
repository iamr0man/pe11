<template>
  <div>
    <h1>Oops!</h1>
    <h3>The event you're looking for is not here.</h3>
    <router-link :to="{ name: 'event-list'}">Back to your home page</router-link>
  </div>
</template>

<script>
export default {
  props: {
    resourse: {
      type: String,
      required: true
    }
  }
}
</script>