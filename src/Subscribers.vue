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
    data() {
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
