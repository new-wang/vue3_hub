<template>
    <div>
        useStore{{count}}
        mainStore{{main.count}}
    </div>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useStore, useCounterStore } from '@/pinia/pinia'

const store = useStore()
const main = useCounterStore()
const { count } = storeToRefs(store)

</script>

<style lang="scss" scoped>

</style>