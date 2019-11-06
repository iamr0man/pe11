<template>
  <div class="component">
    <h3>You may view the User Details here</h3>
    <p>Company: {{ switchName() }}</p>
    <p>Age: {{ userAge }}</p>
    <button @click="resetName">Reset Name</button>
    <button @click="resetFn()">Reset Name</button>
  </div>
</template>

<script>
import { eventBus } from "../main";

export default {
  props: {
    myProduct: {
      type: String
    },
    resetFn: Function,
    userAge: Number
  },
  methods: {
    switchName() {
      return this.myProduct
        .split("")
        .reverse()
        .join("");
    },
    resetName() {
      this.myProduct = "AlfA-bank";
      this.$emit("productWasReset", this.myProduct);
    }
  },
  created() {
    eventBus.$on("ageWasEdited", age => {
      this.userAge = age;
    });
  }
};
</script>

<style scoped>
div {
  background-color: lightcoral;
}
</style>
