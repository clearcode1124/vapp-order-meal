// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import vuexI18n from 'vuex-i18n'
import {
  XButton,
  Tabbar,
  TabbarItem,
  Icon,
  Calendar,
  Group,
  XSwitch,
  Cell
} from 'vux'

Vue.use(vuexI18n)

Vue.component('x-button', XButton)
Vue.component('tabbar', Tabbar)
Vue.component('tabbar-item', TabbarItem)
Vue.component('icon', Icon)
Vue.component('calendar', Calendar)
Vue.component('group', Group)
Vue.component('x-switch', XSwitch)
Vue.component('cell', Cell)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
