<template>
    <div>
        <span
        v-for="(tab, index) in tabs"
        :key="index"
        :class="{activeTab: selectedTab === tab}"
        @click="changeTab(tab)"
        
        >{{tab}}</span>
    </div>
</template>

<script>
export default {
    name:"tab",
    props: [],
    data:function() {
        return {
            tabs: ["Reviews", "Make a review"],
            selectedTab: "Reviews"
        }
    },
    methods: {
        changeTab(tab) {
            this.selectedTab = tab;
            this.$emit("tab-change", this.tabs.indexOf(tab));
        }
    }
}
</script>

<style scoped>
span {
    margin: 20px;
    cursor: pointer;
}



.activeTab {
    text-decoration-line: underline;
    color: lightblue;
}
</style>
