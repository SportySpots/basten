<template>
  <div
    v-show="active"
    :id="tabId"
    :aria-hidden="!active"
    :aria-labelledby="`step-${tabId}`"
    :class="{'active show': active}"
    class="tab-pane fade"
    role="tabpanel">
    <slot/>
  </div>
</template>
<script>
export default {
  name: 'WizardTab',
  props: {
    label: {
      type: String,
    },
    id: {
      type: String,
    },
    beforeChange: {
      type: Function,
    },
  },
  inject: ['addTab', 'removeTab'],
  data() {
    return {
      active: false,
      checked: false,
      hasError: false,
      tabId: '',
    }
  },
  mounted() {
    this.addTab(this)
  },
  destroyed() {
    if (this.$el && this.$el.parentNode) {
      this.$el.parentNode.removeChild(this.$el)
    }
    this.removeTab(this)
  },
}
</script>
