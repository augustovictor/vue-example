<template>
  <div id="app">
    <app-header></app-header>
    <h1>{{greeting()}}</h1>
    <app-content></app-content>
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
