import Vue from 'vue'
import Vuex from 'vuex'
import { stores } from '@/applications'
import modules from './modules'

Vue.use(Vuex)

export function createStore () {
  const store = new Vuex.Store({ modules })

  stores.forEach(s => s(store))

  return store
}
