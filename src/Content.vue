<template>
    <div id="main-content">
        Content
        <subscribers></subscribers>
        <rss></rss>
    </div>
</template>

<script>

import Subscribers from './Subscribers.vue'
import Rss from './Rss.vue'

export default {
    components: {
        rss: Rss,
        subscribers:Subscribers
    }
}
</script>

<style scoped>
* {
    text-align: left;
}
</style>
