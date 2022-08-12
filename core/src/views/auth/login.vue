<template>
  <div class="login-container">
    <el-form class="login-form">
      <div class="title-container">
        <img src="/vite.svg" class="logo" alt="Vite logo" />
      </div>
      <el-form-item prop="email" label="邮箱">
        <el-input v-model="form.email" placeholder="请输入邮箱">
        </el-input>
      </el-form-item>
      <el-form-item prop="captcha" label="验证码" class="captcha-container">
        <div class="captcha">
          <img :src="code.captcha" @click="resetCaptcha">
        </div>
        <el-input v-model="form.captcha" placeholder="请输入验证码"></el-input>
      </el-form-item>
      <el-form-item prop="emailcode" label="验证码" class="captcha-container">
        <div class="captcha">
          <el-button @click="sendEmailCode" :disabled="send.timer > 0" type='primary'>{{ sendText }}</el-button>
        </div>
        <el-input v-model="form.emailcode" placeholder="请输入邮件验证码"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { computed, reactive, toRefs } from 'vue'

import { sendcode } from "apis/utils"

// 数据mock测试
// fetch("/api/users")
//   .then(response => response.json())
//   .then(json => console.log('proxy:', json))
//   .catch(err => console.log('err', err));

export default {
  setup() {
    const state = reactive({
      form: {
        email: '',
        captcha: '',
        emailcode: ''
      },
      code: {
        captcha: '/api/captcha',
      },
      send: {
        timer: 0
      }
    })

    const resetCaptcha = (params) => {
      state.code.captcha = '/api/captcha?_t'+new Date().getTime()
    }

    const sendEmailCode = async () => {
      // 邮箱验证码
      await sendcode();
      state.send.timer = 10;
       state.timer = setInterval(()=>{
        state.send.timer -= 1
        if(state.send.timer===0){
          clearInterval(state.timer)
        }
      },1000)
    }

    const sendText = computed(()=>{
      if(state.send.time <= 0){
        return "发送"
      }
      return `${state.send.timer}s后发送`
    })

    return {
      ...toRefs(state),
      resetCaptcha,
      sendEmailCode,
      sendText
    }
  }
}
</script>

<style lang="scss" scoped>

</style>