<template>
  <nav class="menu-lateral" :class="estadoMenuLateral">
    <div class="logo">
      <a href="" class="nav-link">
        <i class="fas fa-fire"></i>
        <span class="link-text">Intergr<em>ALL</em></span>
      </a>
    </div>
    <ul class="navbar-nav">
      <NavItem 
        v-for="(item, indice) in arrNavItens" :key="indice"
        :icone="item.icone"
        :desc="item.desc"
      />
      <li class="nav-item">
        <a href="#" class="nav-link" v-on:click="mudarTema()">
          <i class="fas fa-adjust"></i>
          <span class="link-text">Mudar Tema</span>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

import NavItem from './templates/NavItem'

export default {
  data(){
    return{
      arrNavItens: []
    }
  },
  components: {
    NavItem
  },
  methods: {
    ...mapMutations(['setTema']),
    mudarTema(){
      if(this.tema == 'light'){
        this.setTema('dark')
      }else if(this.tema == 'dark'){
        this.setTema('light')
      }
    },
    preencheArrNavItens(){
      for(let i = 0; i < 50; i++){
        let icone = ''
        if(i % 2 == 0){
          icone = 'fa-chart-bar'
        }else{
          icone = 'fa-chart-pie'
        }
        this.arrNavItens.push({
          icone: icone,
          desc: 'Item '+ (i + 1)
        })
      }
    }
  },
  computed:{
    ...mapGetters({
      tema: 'getTema',
      estadoMenuLateral: 'getEstadoMenuLateral'
    })
  },
  mounted(){
    this.preencheArrNavItens()
  }
}
</script>