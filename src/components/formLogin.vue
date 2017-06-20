<template>
    <form>
        <div id="form-header">
            <h3>Login form</h3>
        </div>

        <div id="form-fields">
            <div>
                <label for="username">Username</label>
                <input type="text" name="username" />
            </div>

            <div>
                <label for="password">Password</label>
                <input type="text" name="password" />
            </div>
        </div>

        <div id="form-controls">
            <button @click="handleSubmit">Login</button>
        </div>
    </form>
</template>

<script>

import FormHelper from './FormHelper.vue'

export default {
    components: {
        'form-helper': FormHelper
    },
    methods: {
        handleSubmit:function() {
            
        }
    }
}
</script>

<style scoped>

</style>
