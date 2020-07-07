<template>
  <div id="app" :class="tema">
    <MenuSuperior />
    <MenuLateral />
    <Blocker />
  </div>
</template>

<script>
import axios from 'axios'
import { mapGetters, mapMutations } from 'vuex'

import MenuSuperior from './components/MenuSuperior'
import MenuLateral from './components/MenuLateral'
import Blocker from './components/Blocker'

export default {
  components: {
    MenuSuperior,
    MenuLateral,
    Blocker
  },
  computed:{
    ...mapGetters({
      tema: 'getTema'
    })
  }
}
</script>