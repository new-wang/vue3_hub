<template>
    <div class="login-container">
        <el-form class='login-form' label-width="100px" :model="form" :rules="rules" ref="registerFormRef">
            <div class="title-container">
                <img src="/vite.svg" alt="logo">
            </div>
            <el-form-item prop="email" label="邮箱">
                <el-input v-model="form.email" placeholder="请输入邮箱"></el-input>
            </el-form-item>
            <el-form-item prop="captcha" label="验证码" class="captcha-container">
                <div class="captcha">
                    <img :src="code.captcha" @click="resetCaptcha">
                </div>
                <el-input v-model="form.captcha" placeholder="请输入验证码"></el-input>
            </el-form-item>
            <el-form-item prop="nickname" label="昵称">
                <el-input v-model="form.nickname" placeholder="请输入昵称"></el-input>
            </el-form-item>
            <el-form-item prop="passwd" label="密码">
                <el-input type="password" v-model="form.passwd" placeholder="请输入密码"></el-input>
            </el-form-item>
            <el-form-item prop="repasswd" label="确认密码">
                <el-input type="password" v-model="form.repasswd" placeholder="请再次输入密码"></el-input>
            </el-form-item>
            <el-form-item label=" ">
                <!-- <button @clikc.prevent></button> -->
                <el-button type="primary" @click.native.prevent="handleRegister">注册</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script setup>
import { reactive, ref, toRefs } from 'vue';
import { ElMessageBox } from 'element-plus'
import config from "config/http";
import { useRouter } from 'vue-router';
const { url } = config;
import { register } from "apis/user";
const router = useRouter()

const state = reactive({
    form: {
        email: '',
        captcha: '',
        passwd: '',
        repasswd: '',
        nickname: ''
    },
    code: {
        captcha: url + '/util/captcha',
    },
    send: {
        timer: 0
    },
    rules: {
        email: [
            { required: true, message: "请输入邮箱" },
            { type: 'email', message: "请输入正确的邮箱格式" },
        ],
        captcha: [
            { required: true, message: "请输入验证码" },
        ],
        nickname: [
            { required: true, message: "请输入昵称" },
        ],
        passwd: [
            { required: true, pattern: /^[\w_-]{6,12}$/g, message: "请输入6~12位密码" },
        ],
        repasswd: [
            { required: true, message: "请再次输入密码" },
            {
                validator: (rule, value, callback) => {
                    if (value !== state.form.passwd) {
                        callback(new Error('两次密码不一致'))
                    }
                    callback()
                }
            }
        ],
    }
})
const { form, code, rules } = { ...toRefs(state) }

const resetCaptcha = () => {
    state.code.captcha = url + '/util/captcha?_t' + new Date().getTime()
}

const registerFormRef = ref()

const handleRegister = async () => {
    registerFormRef.value.validate(async valid => {
        if (valid) {
            let ret = await register(state.form)
            if (ret.code == 0) {
                ElMessageBox.alert('注册成功', '成功', {
                    confirmButtonText: '去登录',
                    callback: () => {
                        router.push('/login')
                    }
                })
            }
        }
    })
}





// import { storeToRefs } from 'pinia'
// import { useStore, useCounterStore } from '@/pinia/pinia'
// const store = useStore()
// const main = useCounterStore()
// const { count } = storeToRefs(store)
</script>

<style lang="scss" scoped>
</style>