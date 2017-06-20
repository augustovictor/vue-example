<template>
    <form-helper>
        <div slot="form-header">
            <h3 slot="form-header">Sign up form</h3>
        </div>

        <div slot="form-fields">
            <div>
                <label for="username">Username</label>
                <input type="text" name="username" />
            </div>

            <div>
                <label for="email">E-mail</label>
                <input type="mail" name="email" />
            </div>
        </div>

        <div slot="form-controls">
            <button @click="handleSubmit">Submit</button>
        </div>
    </form-helper>
</template>

<script>

import FormHelper from './FormHelper.vue'

export default {
    components: {
        'form-helper': FormHelper
    }
}
</script>

<style>

</style>
