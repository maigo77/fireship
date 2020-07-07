<template>
  <div class="menu-superior">
    <!-- Menu Superior Esquerdo -->
    <div class="menu-superior-esquerdo">
      <div class="menu-hamburguer" v-on:click="alteraEstadoMenuLateral()">
        <div class="container-icone">
          <i class="fas fa-bars"></i>
        </div>
      </div>
      <div class="menu-pesquisa">
        <input type="text" placeholder="Pesquisa Geral">
        <div>
          <div class="container-icone">
            <i class="fas fa-search"></i>
          </div>
        </div>
      </div>
    </div>  
    <!-- Menu Superior Direito -->
    <div></div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  methods: {
    ...mapMutations(["setEstadoMenuLateral", "setBlocker"]),
    alteraEstadoMenuLateral(){
      if(this.estadoMenuLateral == 'fechado'){
        this.setBlocker(true)
        this.setEstadoMenuLateral('aberto')
      }else{
        this.setBlocker(false)
        this.setEstadoMenuLateral('fechado')
      }
    }
  },
  computed: {
    ...mapGetters({
      estadoMenuLateral: 'getEstadoMenuLateral'
    })
  }
}
</script>

<style>

</style>