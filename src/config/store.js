import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state:{
    tema: 'light',
    estadoMenuLateral: 'fechado',
    blocker: false
  },
  mutations: {
    setTema(state, tema){
      state.tema = tema
    },
    setEstadoMenuLateral(state, estadoMenuLateral){
      state.estadoMenuLateral = estadoMenuLateral
    },
    setBlocker(state, blocker){
      state.blocker = blocker
    }
  },
  getters: {
    getTema(state){
      return state.tema
    },
    getEstadoMenuLateral(state){
      return state.estadoMenuLateral
    },
    getBlocker(state){
      return state.blocker
    }
  },
  modules: {  }
});