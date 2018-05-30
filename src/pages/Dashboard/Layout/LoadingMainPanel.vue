<template>
  <div
    v-loading="true"
    id="loading"
    class="row"/>
</template>

<script>
import Vue from 'vue'
import { Loading } from 'element-ui'

Vue.use(Loading.directive)
export default {}
</script>

<style>
#loading {
  display: flex;
  align-items: center;
  min-height: 200px;
}

.el-loading-spinner .path {
  stroke: #66615b !important;
}

.el-loading-mask {
  background: transparent !important;
}
</style>
