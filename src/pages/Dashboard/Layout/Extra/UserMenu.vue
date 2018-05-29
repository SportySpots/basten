<template>
  <div class="user">
    <div class="photo">
      <img 
        src="@/assets/img/james.jpg" 
        alt="avatar">
    </div>
    <div class="info">
      <a 
        :aria-expanded="!isClosed" 
        data-toggle="collapse" 
        href="#" 
        @click.stop="toggleMenu">
        <span>
          {{ title }}
          <b class="caret"/>
        </span>
      </a>
      <div class="clearfix"/>
      <div>
        <collapse-transition>
          <ul 
            v-show="!isClosed" 
            class="nav">
            <slot>
              <li>
                <a href="#vue">
                  <span class="sidebar-mini-icon">MP</span>
                  <span class="sidebar-normal">My Profile</span>
                </a>
              </li>
              <li>
                <a href="#vue">
                  <span class="sidebar-mini-icon">EP</span>
                  <span class="sidebar-normal">Edit Profile</span>
                </a>
              </li>
              <li>
                <a href="#vue">
                  <span class="sidebar-mini-icon">S</span>
                  <span class="sidebar-normal">Settings</span>
                </a>
              </li>
            </slot>
          </ul>
        </collapse-transition>
      </div>
    </div>
  </div>
</template>
<script>
import { CollapseTransition } from 'vue2-transitions'

export default {
  components: {
    CollapseTransition,
  },
  props: {
    title: {
      type: String,
      default: 'James Amos',
    },
  },
  data() {
    return {
      isClosed: true,
    }
  },
  methods: {
    toggleMenu() {
      this.isClosed = !this.isClosed
    },
  },
}
</script>
<style>
.collapsed {
  transition: opacity 1s;
}
</style>
