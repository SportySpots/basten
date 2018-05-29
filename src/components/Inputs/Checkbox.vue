<template>
  <div 
    :class="[{disabled: disabled}, inlineClass]"
    class="form-check">
    <label 
      :for="cbId" 
      class="form-check-label">
      <input 
        :id="cbId"
        :disabled="disabled"
        v-model="model"
        class="form-check-input"
        type="checkbox">
      <span class="form-check-sign"/>
      <slot>
        <span v-if="inline">&nbsp;</span>
      </slot>
    </label>
  </div>
</template>
<script>
export default {
  name: 'NCheckbox',
  model: {
    prop: 'checked',
  },
  props: {
    checked: [Array, Boolean],
    disabled: Boolean,
    inline: Boolean,
    hasError: Boolean,
  },
  data() {
    return {
      cbId: '',
      touched: false,
    }
  },
  computed: {
    model: {
      get() {
        return this.checked
      },
      set(check) {
        if (!this.touched) {
          this.touched = true
        }
        this.$emit('input', check)
      },
    },
    inlineClass() {
      if (this.inline) {
        return `form-check-inline`
      }
    },
  },
  created() {
    this.cbId = Math.random()
      .toString(16)
      .slice(2)
  },
}
</script>
