<template>
  <div class="field">
    <label v-if="label">{{ label }}</label>
    <input
      :value="value"
      v-on="listeners"
      @input="updateValue"
      v-bind="$attrs"
    />
  </div>
</template>

<script>
import { formFieldMixin } from '../mixins/formFieldMixin'
export default {
  mixins: [formFieldMixin],
  computed: {
    listeners() {
      return {
        ...this.$listeners,
        input: this.updateValue
      }
    }
  }
}
</script>

<style></style>
