<template>
  <button
    v-on="$listeners"
  >
    <slot/>
  </button>
</template>

<style lang="scss" module>
@import '@design';
</style>
