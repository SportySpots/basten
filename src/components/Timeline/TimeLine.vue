<template>
  <card
    class="card-timeline"
    plain>
    <ul
      :class="{'timeline-simple': type === 'simple'}"
      class="timeline">
      <slot/>
    </ul>
  </card>
</template>
<script>
export default {
  name: 'TimeLine',
  props: {
    type: {
      type: String,
      default: '',
    },
  },
}
</script>
