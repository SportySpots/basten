<template>
  <li :class="{'timeline-inverted': inverted}">
    <slot name="badge">
      <div 
        :class="badgeType" 
        class="timeline-badge">
        <i :class="badgeIcon"/>
      </div>
    </slot>
    <div class="timeline-panel">
      <div class="timeline-heading">
        <slot name="header"/>
      </div>
      <div 
        v-if="$slots.content" 
        class="timeline-body">
        <slot name="content"/>
      </div>
      <h6 v-if="$slots.footer">
        <slot name="footer"/>
      </h6>
    </div>
  </li>
</template>
<script>
export default {
  name: 'TimeLineItem',
  props: {
    inverted: Boolean,
    badgeType: {
      type: String,
      default: 'success',
    },
    badgeIcon: {
      type: String,
      default: '',
    },
  },
}
</script>
