<template>
    <div id="main-content">
        Content
        <p>{{changeableContent}}</p>
        <subscribers :subscribers="subscribers"></subscribers>
        <!-- <rss :changeableContent="changeableContent" @changeContent="changeContent($event)"></rss> -->
        <rss></rss>
        <signup-form></signup-form>
    </div>
</template>

<script>

import Subscribers from './Subscribers.vue'
import {bus} from './main'
import Rss from './Rss.vue'
import SignUpForm from './components/form1.vue'

export default {
    props: {
        subscribers: {
            type: Array,
            required: true
        }
    },
    components: {
        rss          : Rss,
        subscribers  : Subscribers,
        'signup-form': SignUpForm
    },
    data() {
        return {
            changeableContent: 'This is not changed yet.',
            formTitle: 'This is the dynamic form title'
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
