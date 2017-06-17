<template>
    <div id="rss-container">
        <h1>Rss register</h1>
        <ul>
            <li v-for="freq in frequencies">{{freq}}</li>
        </ul>
    </div>
</template>

<script>
export default {
  data() {
      return {
          frequencies: ['Daily', 'Weekly', 'Yearly']
      }
  }
}
</script>

<style scoped>
h1 {
    color: red;
}
</style>
