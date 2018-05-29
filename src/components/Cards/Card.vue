<template>
  <div
    :class="{'card-plain': plain}"
    class="card">
    <h6
      v-if="$slots.category || category"
      class="card-category">{{ category }}</h6>
    <div
      v-if="$slots.image"
      class="card-image">
      <slot name="image"/>
    </div>
    <div
      v-if="$slots.header || title"
      :class="headerClasses"
      class="card-header">
      <slot name="header">
        <h1
          v-if="title"
          class="card-title">{{ title }}</h1>
        <h3
          v-if="subTitle"
          class="card-category">{{ subTitle }}</h3>
        <p
          v-if="description"
          class="card-description">{{ description }}</p>
      </slot>
    </div>
    <slot name="raw-content"/>
    <div
      v-if="$slots.default"
      :class="cardBodyClasses"
      class="card-body">
      <slot/>
    </div>
    <hr v-if="$slots.footer && !noFooterLine">
    <div
      v-if="$slots.footer"
      class="card-footer">
      <slot name="footer"/>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Card',
  props: {
    title: String,
    subTitle: String,
    category: String,
    description: String,
    noFooterLine: Boolean,
    plain: Boolean,
    cardBodyClasses: [String, Object, Array],
    headerClasses: [String, Object, Array],
  },
}
</script>
