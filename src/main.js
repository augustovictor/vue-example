import Vue from 'vue'
import App from './App.vue'
// import Rss from './Rss.vue' // TO REGISTER A COMPONENT GLOBALLY

// Vue.component('rssComponent', Rss); // REGISTERED GLOBALLY

new Vue({
  el: '#app',
  render: h => h(App)
})
