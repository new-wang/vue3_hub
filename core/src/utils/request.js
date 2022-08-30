import axios from "axios";
import { ElMessage, ElMessageBox } from "element-plus";
import pinia from "@/pinia/pinia";

import config from "config/http";
const { url } = config

// 创建axios实例
const service = axios.create({
    // 在请求地址前面加上baseURL
    // baseURL: import.meta.env.VITE_BASE_API,
    // baseURL: import.meta.env.VITE_BASE_API || url,
    // baseURL: url,
    baseURL:'/api',
    // 当发送跨域请求时携带cookie
    // withCredentials: true,
    timeout: 5000,
});

// 请求拦截
service.interceptors.request.use(
    (config) => {
        // console.log('config',config)
        // 指定请求令牌
        // if (store.getters.token) {
        // // 自定义令牌的字段名为X-Token，根据咱们后台再做修改
        // config.headers["X-Token"] = pinia.getters.token;
        // }
        // config.headers["X-Token"] = "my token";
        return config;
    },
    (error) => {
        // 请求错误的统一处理
        console.log(error); // for debug
        return Promise.reject(error);
    }
);

// 响应拦截器
service.interceptors.response.use(
    /**
     * If you want to get http information such as headers or status
     * Please return  response => response
     */

    /**
     * 通过判断状态码统一处理响应，根据情况修改
     * 同时也可以通过HTTP状态码判断请求结果
     */
    (response) => {
        const res = response.data;
        // 如果状态码不是0则认为有错误
        if (res.code !== 0) {
            ElMessage.error({
                message: res.msg || res.error || "Error",
                duration: 5 * 1000,
            });

            // 50008: 非法令牌; 50012: 其他客户端已登入; 50014: 令牌过期;
            if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
                // 重新登录
                ElMessageBox.confirm("您已登出, 请重新登录", "确认", {
                    confirmButtonText: "重新登录",
                    cancelButtonText: "取消",
                    type: "warning",
                }).then(() => {
                    pinia.dispatch("user/resetToken").then(() => {
                        location.reload();
                    });
                });
            }
            return Promise.reject(new Error(res.msg || res.error || "Error"))
            .catch(err=>{
                console.log(err)
            });
        } else {
            return res;
        }
    },
    (error) => {
        console.log("err" + error); // for debug
        ElMessage({
            message: error.message,
            type: "error",
            duration: 5 * 1000,
        });
        return Promise.reject(error);
    }
);

export const http = service

export default service;

