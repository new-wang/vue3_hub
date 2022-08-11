<template>
    <div>
        <i v-if="icon" class="sub-el-icon" :class="icon"></i>
        <span v-if="title">{{ title }}</span>
    </div>
</template>

<script setup>
defineProps({
    icon: {
        type: String,
        default: "",
    },
    title: {
        type: String,
        default: "",
    },
})
</script>

<style lang="scss" scoped>
</style>