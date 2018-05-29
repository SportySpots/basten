<template>
  <nav
    :class="classes"
    class="navbar navbar-expand-lg">
    <div class="container-fluid">
      <slot/>

      <CollapseTransition>
        <div
          v-show="showNavbar"
          id="navigation"
          class="collapse navbar-collapse justify-content-end show">
          <ul class="navbar-nav">
            <slot name="navbar-menu"/>
          </ul>
        </div>
      </CollapseTransition>
    </div>
  </nav>
</template>
<script>
import { CollapseTransition } from 'vue2-transitions'

export default {
  name: 'Navbar',
  components: {
    CollapseTransition,
  },
  props: {
    showNavbar: Boolean,
    transparent: {
      type: Boolean,
      default: true,
    },
    position: {
      type: String,
      default: 'absolute',
    },
    type: {
      type: String,
      default: 'white',
      validator(value) {
        return [
          'white',
          'default',
          'primary',
          'danger',
          'success',
          'warning',
          'info',
        ].includes(value)
      },
    },
  },
  computed: {
    classes() {
      let color = `bg-${this.type}`
      let navPosition = `navbar-${this.position}`
      return [
        { 'navbar-transparent': !this.showNavbar && this.transparent },
        { [color]: this.showNavbar || !this.transparent },
        navPosition,
      ]
    },
  },
}
</script>
