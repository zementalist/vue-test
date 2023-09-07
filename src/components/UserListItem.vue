<template>
    <a :href="href" >
        <div class="user-list-item">
            <img :src="friend.avatar" alt="" class="rounded-circle user-avatar">
            <span class="">{{friend.name}}</span>
        </div>
    </a>
</template>

<script>
    export default {
        props: ['friend', 'href']
    }
</script>

<style>
    ::-webkit-scrollbar {
        width: 10px;
    }

    ::-webkit-scrollbar-track {
        background: #ddd;
    }

    ::-webkit-scrollbar-thumb {
        background: #888;
        border-radius: 5px;
    }

    ::-webkit-scrollbar-thumb:hover {
        background: #555;
    }

    .user-avatar {
        height: 48px;
        border: 0px solid black;
    }
</style>