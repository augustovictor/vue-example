<template>
    <div id="main-content">
        Content
        <p>{{changeableContent}}</p>
        <subscribers :subscribers="subscribers"></subscribers>
        <rss :changeableContent="changeableContent" @changeContent="changeContent($event)"></rss>
    </div>
</template>

<script>

import Subscribers from './Subscribers.vue'
import Rss from './Rss.vue'

export default {
    props: {
        subscribers: {
            type: Array,
            required: true
        }
    },
    components: {
        rss: Rss,
        subscribers: Subscribers
    },
    data() {
        return {
            changeableContent: 'This is not changed yet.'
        }
    },
    methods: {
        changeContent: function(changedContent) {
            console.log('test')
            this.changeableContent = changedContent;
        }
    }
}
</script>

<style scoped>
* {
    text-align: left;
}
</style>
