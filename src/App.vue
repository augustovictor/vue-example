<template>
  <div id="app">
    <app-header></app-header>
    <h1>{{greeting()}}</h1>
    <app-content :subscribers="subscribers"></app-content>
    <app-footer></app-footer>
    
  </div>
</template>

<script>
import Header from './Header.vue'
import Content from './Content.vue'
import Footer from './Footer.vue'

export default {
  name: 'app',
  components: {
    'app-header': Header,
    'app-content': Content,
    'app-footer': Footer
  },
  data () {
    return {
      subscribers: [
          {name: 'Subscriber 1', age: 25, show: false},
          {name: 'Subscriber 2', age: 26, show: false},
          {name: 'Subscriber 3', age: 23, show: false},
          {name: 'Subscriber 4', age: 30, show: false},
          {name: 'Subscriber 5', age: 33, show: false},
          {name: 'Subscriber 6', age: 29, show: false},
      ]
    }
  },
  methods: {
    greeting() {
      return 'Welcome to our vue app.'
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
