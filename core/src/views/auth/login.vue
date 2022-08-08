<template>
  <div class="login-container">
    <el-form class="login-form">
      <div class="title-container">logo</div>

      <el-form-item prop="email" label="邮箱">
        <el-input v-model="form.email" placeholder="请输入邮箱">
        </el-input>
      </el-form-item>
      <!-- <el-form-item></el-form-item>
      <el-form-item></el-form-item>
      <el-form-item></el-form-item> -->

    </el-form>
  </div>
</template>

<script>
import { reactive, toRefs } from 'vue'

// 数据mock测试
fetch("/api/users")
  .then(response => response.json())
  .then(json => console.log('proxy:',json)).catch(err=>console.log('err',err));

export default {
  setup () {
    const state = reactive({
      form:{
        email:''
      }
    })
  
    return {
      ...toRefs(state),
    }
  }
}
</script>

<style lang="scss" scoped>

</style>