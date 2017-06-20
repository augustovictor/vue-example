<template>
    <div>
        <h1>Fill out the form below</h1>
        <slot name="form-helper-header"></slot>
        <form>
            <div id="form-header">
                <slot name="form-header"></slot>
            </div>

            <div id="form-fields">
                <slot name="form-fields"></slot>
            </div>

            <div id="form-controls">
                <slot name="form-controls"></slot>
            </div>
            <div id="useful-links">
                <ul>
                    <li><a href="#">Link 1</a></li>
                    <li><a href="#">Link 2</a></li>
                    <li><a href="#">Link 3</a></li>
                    <li><a href="#">Link 4</a></li>
                    <li><a href="#">Link 5</a></li>
                </ul>
            </div>
        </form>
    </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
form {
    padding: 10px;
}

#form-header {
    background: lightgray;
}

#form-fields {
    background: gray;
    color: white;
    padding: 10px;
}

button {
    background: blue;
    color: white;
    border: none;
    padding: 3px 5px;
    font-weight: bold;
    text-transform: uppercase;
}
</style>
