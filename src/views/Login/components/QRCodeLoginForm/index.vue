<!--https://vueuse.nodejs.cn/integrations/useQRCode-->
<script setup lang="ts" name="QRCodeLogin">
import { useQRCode } from '@vueuse/integrations/useQRCode'
import { onMounted, onUnmounted, ref } from 'vue'

import { LoginFormMode } from '@/constants/loginFormMode'
import { useUserStore } from '@/stores/user'

const { setLoginFormMode } = useUserStore()

const text = ref('https://zsjie.blog.csdn.net/?type=blog') // 初始二维码内容
const qrCodeUrl = useQRCode(text, {
  errorCorrectionLevel: 'M',
  typeNumber: 40,
  margin: 1,
  width: 200,
  height: 200,
})

const intervalId = ref()

onMounted(() => {
  intervalId.value = setInterval(() => {
    text.value = `https://zsjie.blog.csdn.net/?type=blog?timestamp=${new Date().getTime()}`
  }, 60000)
})

onUnmounted(() => {
  if (intervalId.value) {
    clearInterval(intervalId.value) // 清除定时器以防止内存泄漏
  }
})
</script>

<template>
  <div class="w-full h-full">
    <el-form ref="ruleFormRef" size="large">
      <el-form-item>
        <div class="w-full flex justify-center items-center">
          <img v-if="text" :src="qrCodeUrl" alt="QR Code" />
        </div>
        <el-divider
          ><span class="text-md text-gray-500 select-none">请使用微信扫码登录</span></el-divider
        >
      </el-form-item>
      <el-form-item>
        <el-button class="w-full" plain @click="setLoginFormMode(LoginFormMode.USERNAME)">
          返回
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<style scoped lang="postcss"></style>
