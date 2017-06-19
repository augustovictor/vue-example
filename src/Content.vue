<template>
    <div id="main-content">
        Content
        <p>{{changeableContent}}</p>
        <subscribers :subscribers="subscribers"></subscribers>
        <!-- <rss :changeableContent="changeableContent" @changeContent="changeContent($event)"></rss> -->
        <rss></rss>
    </div>
</template>

<script>

import Subscribers from './Subscribers.vue'
import {bus} from './main'
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
            this.changeableContent = changedContent;
        }
    },
    created() {
        bus.$on('changeContent', (data) => {
            this.changeableContent = data;
        })
    }
}
</script>

<style scoped>
* {
    text-align: left;
}
</style>
