<template>
  <div class="col-md-12">
    <card>
      <async-world-map
        :data="mapData"
        class="map map-big"/>
    </card>
  </div>
</template>

<script>
import AsyncWorldMap from '@components/WorldMap/AsyncWorldMap.vue'

export default {
  components: {
    AsyncWorldMap,
  },
  data() {
    return {
      mapData: {
        AU: 760,
        BR: 550,
        CA: 120,
        DE: 1300,
        FR: 540,
        GB: 690,
        GE: 200,
        IN: 200,
        RO: 600,
        RU: 300,
        US: 2920,
      },
    }
  },
}
</script>

<style>
#worldMap {
  width: 100%;
}
</style>
