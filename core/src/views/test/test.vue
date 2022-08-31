<template>
    <div>
        <el-button @click="testJwt1">
            testJwt
        </el-button>
    </div>
</template>

<script setup>
    import { testJwt } from "apis/test"
    const testJwt1 = async ()=>{
        const ret = await testJwt()
        console.log('ret :>> ', ret);
    }
</script>

<style lang="scss" scoped>

</style>