<template>
    <div id="main-content">
        Content
        <p>{{changeableContent}}</p>
        <subscribers :subscribers="subscribers"></subscribers>
        <!-- <rss :changeableContent="changeableContent" @changeContent="changeContent($event)"></rss> -->
        <rss></rss>

        <div>
            <hr>
            <button @click="component = 'signup-form'">Show signup form</button>
            <button @click="component = 'login-form'">Show login form</button>
        </div>
        
        <!-- Do not loose data in form-->
        <keep-alive>
            <component :is="component"></component>
        </keep-alive>
    </div>
</template>

<script>

import Subscribers from './Subscribers.vue'
import {bus} from './main'
import Rss from './Rss.vue'
import SignUpForm from './components/form1.vue'
import LoginForm from './components/formLogin.vue'

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
        'signup-form': SignUpForm,
        'login-form' : LoginForm
    },
    data() {
        return {
            changeableContent: 'This is not changed yet.',
            formTitle: 'This is the dynamic form title',
            component: 'signup-form'
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
