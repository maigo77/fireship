<template>
  <div id="blocker" v-if="blocker" v-on:click="fecharBlocker()"></div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  methods: {
    ...mapMutations(['setBlocker', 'setEstadoMenuLateral']),
    fecharBlocker(){
      this.setBlocker(false)
      if(this.estadoMenuLateral){
        this.setEstadoMenuLateral('fechado')
      }
    }
  },
  computed: {
    ...mapGetters({
      blocker: 'getBlocker',
      estadoMenuLateral: 'getEstadoMenuLateral'
    })
  }
}
</script>