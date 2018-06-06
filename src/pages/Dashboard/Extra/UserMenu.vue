<template>
  <div class="user">
    <div class="photo">
      <img
        src="@/assets/img/default-avatar.png"
        alt="avatar">
    </div>
    <div class="info">
      <a
        :aria-expanded="!isClosed"
        data-toggle="collapse"
        href="#"
        @click.stop="toggleMenu">
        <span>
          {{ user.first_name }} {{ user.last_name }}
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
                <a
                  href="#vue"
                  @click.prevent="logOut"
                >
                  <span class="sidebar-mini-icon">L</span>
                  <span
                    class="sidebar-normal"
                  >Logout</span>
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
import router from '../../../router'

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
  computed: {
    user() { return this.$store.state.auth.currentUser.user },
  },
  methods: {
    async logOut() {
      console.log('logout')
      await this.$store.dispatch('auth/logOut')
      router.replace('/login')
    },
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
