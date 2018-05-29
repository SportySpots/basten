<template>
  <nav
    aria-label="breadcrumb"
    role="navigation">
    <ul class="breadcrumb">
      <slot/>
    </ul>
  </nav>
</template>
<script>
export default {
  name: 'Breadcrumb',
}
</script>
