import Vue from 'vue'
import Vuex from 'vuex'

import contacts from './contacts'

Vue.use(Vuex)

export default function () {
  const Store = new Vuex.Store({
    modules: {
      contacts
    },
    strict: process.env.DEV
  })

  return Store
}
