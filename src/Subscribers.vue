<template>
    <div id="subscribers-container">
        <h1>Subscribers</h1>
        <ul>
            <li v-for="subs in subscribers" @click="subs.show = !subs.show">
                {{ subs.name }}
                <div v-show="subs.show">
                    <p>Age: {{subs.age}}</p>
                    <strong>JSON:</strong>
                    <ul>
                        <li v-for="(val, key) in subs">
                            key: {{key}}, val: {{val}}
                        </li>
                    </ul>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props: [
        'subscribers'
    ],
    data() {
        return {
            
        }
    }
}
</script>

<style scoped>
li {
    background: lightgrey;
    cursor: pointer;
    padding: 10px 0;
    margin: 2px 0;
}
</style>
