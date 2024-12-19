<script setup lang="ts" name="Login">
import { computed } from 'vue'

import EmailLoginForm from './components/EmailLoginForm/index.vue'
import ForgotPasswordForm from './components/ForgotPasswordForm/index.vue'
import PhoneLoginForm from './components/PhoneLoginForm/index.vue'
import QRCodeLoginForm from './components/QRCodeLoginForm/index.vue'
import RegisterForm from './components/RegisterForm/index.vue'
import UsernameLoginForm from './components/UsernameLoginForm/index.vue'

import { AppConfig } from '@/config/appConfig'
import { useUserStore } from '@/stores/user'

const userStore = useUserStore()

const loginFormModeMap = {
  PHONE: PhoneLoginForm,
  EMAIL: EmailLoginForm,
  USERNAME: UsernameLoginForm,
  QRCODE: QRCodeLoginForm,
  REGISTER: RegisterForm,
  FORGOT_PASSWORD: ForgotPasswordForm,
}

const loginForm = computed(() => loginFormModeMap[userStore.loginFormMode])

// 不需要缓存的登录组件
const excludedKeepAliveComponents = ['QRCODE']
</script>

<template>
  <div class="w-full h-full flex">
    <div class="w-3/5 bg-contain bg-center bg-[url('@/assets/images/login.svg')] bg-no-repeat" />
    <div class="w-2/5 h-full flex flex-col items-center justify-center">
      <!--   LOGO   -->
      <div class="flex flex-col items-center justify-center mb-5 space-y-4">
        <SvgIcon iconName="logo" :iconSize="72" />
        <span
          class="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500"
        >
          {{ AppConfig.getAppTitle() }}
        </span>
      </div>
      <!--   登录表单   -->
      <div class="w-full flex items-center justify-center max-w-xs md:max-w-sm">
        <Transition name="fade">
          <keep-alive :exclude="excludedKeepAliveComponents">
            <component :is="loginForm" :key="userStore.loginFormMode" />
          </keep-alive>
        </Transition>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* 定义弹性向上移动的动画 */
@keyframes slide-up {
  0% {
    transform: translateY(20px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

/* 过渡类 */
.fade-enter-active,
.fade-leave-active {
  transition:
    opacity 0.3s ease,
    transform 0.3s ease;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
  transform: translateY(20px);
}

.fade-leave-active {
  transition:
    opacity 0s ease,
    transform 0s ease;
}

/* 自定义动画效果 */
.fade-enter-active {
  animation: slide-up 0.5s ease forwards;
}
</style>
