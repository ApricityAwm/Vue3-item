<script setup lang="ts">
import useLogin from '@/hooks/useLogin';

const { loginInfo, loginRule, loginRef, handleLogin } = useLogin();
</script>

<template>
  <div class="login">
    <el-card class="box-card slide">
      <div class="title">Admin-登录</div>
      <el-form class="form mt-6" ref="loginRef" :rules="loginRule" :model="loginInfo">
        <el-form-item prop="account">
          <el-input prefix-icon="User" placeholder="请输入账号" v-model="loginInfo.account" />
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            placeholder="请输入密码"
            type="password"
            show-password
            prefix-icon="Lock"
            v-model="loginInfo.password"
          />
        </el-form-item>
        <el-form-item>
          <div class="flex justify-between items-center w-full">
            <el-checkbox>记住密码</el-checkbox>
            <el-link href="#" target="_blank">忘记密码</el-link>
          </div>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" class="w-full" @click="handleLogin">登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<style scoped>
@keyframes slide {
  0% {
    -webkit-transform: translateY(-600px) rotateX(-30deg) scale(0);
    transform: translateY(-600px) rotateX(-30deg) scale(0);
    -webkit-transform-origin: 50% 100%;
    transform-origin: 50% 100%;
    opacity: 0;
  }
  100% {
    -webkit-transform: translateY(0) rotateX(0) scale(1);
    transform: translateY(0) rotateX(0) scale(1);
    -webkit-transform-origin: 50% 1400px;
    transform-origin: 50% 1400px;
    opacity: 1;
  }
}
.slide {
  animation: slide 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}
.login {
  background: url(@/assets/image/background.svg) no-repeat;
  @apply w-screen h-screen bg-cover flex justify-center items-center;
}
.box-card {
  @apply w-[450px] h-80 p-6;
}
.title {
  @apply text-center text-lg font-bold text-gray-600;
}
</style>
