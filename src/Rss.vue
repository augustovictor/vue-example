<template>
    <div id="rss-container">
        <h1>Rss register</h1>
        <p @click="changeContent">{{changeableContent}}</p>
        <ul>
            <li v-for="freq in frequencies">{{freq}}</li>
        </ul>
    </div>
</template>

<script>
import {bus} from './main'
export default {
    //props: {
    //    changeableContent: {
    //       type: String
    //    }
    //},
    data() {
        return {
            frequencies: ['Daily', 'Weekly', 'Yearly'],
            changeableContent: 'This will change.'
        }
    },
    methods: {
        changeContent: function() {
           // this.$emit('changeContent', 'Content changed by event. From child to parent. If it was from parent to child we\'d use props.');
           var res = 'Content changed by event. From child to parent. If it was from parent to child we\'d use props.';
           this.changeableContent = res;
           bus.$emit('changeContent', res);
        }
    }
}
</script>

<style scoped>
h1 {
    color: red;
}
</style>
