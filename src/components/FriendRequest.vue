<template>
    <a href="#" :class="'list-group-item list-group-item-action' + (request.read ? '' : ' active') ">
        <div class="notification-info">
            <div class="notification-list-user-img"><img
                    :src="request.data.user.avatar" alt=""
                    class="user-avatar-md rounded-circle"></div>
            <div class="notification-list-user-block"><span class="notification-list-user-name">{{request.data.user.name}}</span>
                <button class="btn btn-danger btn-sm mx-1">Decline</button>
                <button class="btn btn-primary btn-sm mx-1">Accept</button>
                <div class="notification-date">{{ request.created_at }}</div>
            </div>
        </div>
    </a>
</template>

<script>
    export default {
        props: ['request'],
        data() {
            return {
                actions: {
                    accept: '', // API to accept friend request,
                    decline: '', // ...
                }
            }
            
        }

    }
</script>

<style scoped>
button {
    float:right;
}
</style>