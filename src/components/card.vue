<template>
    <div>
        <slot name="username" id="username"></slot>
        <slot name="age"></slot>
        <template>
            <slot name="gender"></slot>
        </template>
    </div>
</template>

<script>
export default {
    name:"Card"
}
</script>

<style scoped>
#username {
    margin-left: 0.5rem;
    font-size:20px;
    color: gray;
    text-decoration-color: aqua;
}
</style>
