// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import VueFire from 'vuefire'
import firebase from 'firebase'
import push from './push'

Vue.use(VueFire)

let config = {
  apiKey: "AIzaSyBeTyxSr1d--dZvVYS_O1XzdXzhKvAOhpg",
  authDomain: "vue-pwa-daee2.firebaseapp.com",
  databaseURL: "https://vue-pwa-daee2.firebaseio.com",
  projectId: "vue-pwa-daee2",
  storageBucket: "",
  messagingSenderId: "593761485732"
};
firebase.initializeApp(config);

push()

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
