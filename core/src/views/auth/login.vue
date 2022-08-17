<template>
  <div class="login-container">
    <el-form class="login-form" ref="loginFormRef" label-width="100px" :rules="rules" :model="form">
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
      <el-form-item prop="passwd" label="密码">
        <el-input v-model="form.passwd" placeholder="请输入密码">
        </el-input>
      </el-form-item>
      <el-form-item label=" ">
        <!-- <button @clikc.prevent></button> -->
        <el-button type="primary" @click.native.prevent="handleLogin" >登录</el-button>
        <router-link to="/auth/register">
          <el-button type="primary" >注册</el-button>
        </router-link>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { computed, reactive, toRefs, ref, nextTick  } from 'vue'
import config from "config/http";
import { sendcode } from "apis/utils"
const { url } = config

// 数据mock测试
// fetch("/api/users")
//   .then(response => response.json())
//   .then(json => console.log('proxy:', json))
//   .catch(err => console.log('err', err));

export default {
  setup() {
    const loginFormRef = ref()
    const rules = {
      email: [
        { required: true, message: "请输入邮箱" },
        { type: 'email', message: "请输入正确的邮箱格式" },
      ],
      captcha: [
        { required: true, message: "请输入验证码" },
      ],
      emailcode: [
        { required: true, message: "请输入邮箱验证码" },
      ],
      passwd: [
        { required: true, pattern: /^[\w_-]{6,12}$/g, message: "请输入6~12位密码" },
      ]
    }
    const state = reactive({
      form: {
        email: '',
        captcha: '',
        emailcode: '',
        passwd:''
      },
      code: {
        captcha: url + '/util/captcha',
      },
      send: {
        timer: 0
      }
    })

    const resetCaptcha = (params) => {
      state.code.captcha = url + '/util/captcha?_t' + new Date().getTime()
    }

    const sendEmailCode = async () => {
      // 邮箱验证码
      await sendcode({ email: state.form.email });
      state.send.timer = 10;
      state.timer = setInterval(() => {
        state.send.timer -= 1
        if (state.send.timer === 0) {
          clearInterval(state.timer)
        }
      }, 1000)
    }

    const handleLogin = async (formEl) => {
      // await nextTick()
      // nextTick(()=>{
      //   console.log('loginFormRef',loginFormRef)
      // })
      loginFormRef.value.validate(valid => {
        if(valid){
          console.log('login :>> ');
        }
      })
    }

    const sendText = computed(() => {
      if (state.send.time <= 0) {
        return "发送"
      }
      return `${state.send.timer}s后发送`
    })

    return {
      ...toRefs(state),
      resetCaptcha,
      sendEmailCode,
      sendText,
      rules,
      handleLogin,
      loginFormRef
    }
  }
}
</script>

<style lang="scss" scoped>
</style>