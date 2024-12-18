<script setup lang="ts" name="EmailLoginForm">
import { FormInstance } from 'element-plus'
import { reactive, ref } from 'vue'

const emailLoginFormRef = ref<FormInstance>()

// 验证码配置
const sendCaptchaConfig = reactive({
  isLoading: false,
  text: '获取验证码',
  isDisabled: false,
  countdown: 0,
})

// 发送验证码的方法
const sendCaptcha = () => {
  if (sendCaptchaConfig.countdown > 0) return // 如果倒计时还在进行中，则不执行

  sendCaptchaConfig.isLoading = true
  sendCaptchaConfig.isDisabled = true
  sendCaptchaConfig.text = '发送中...'

  startCountdown()

  sendCaptchaConfig.isLoading = false
}

// 倒计时更新发送验证码按钮状态
const startCountdown = () => {
  sendCaptchaConfig.countdown = 60
  sendCaptchaConfig.text = `${sendCaptchaConfig.countdown}s后重新获取`

  const interval = setInterval(() => {
    sendCaptchaConfig.countdown--

    if (sendCaptchaConfig.countdown <= 0) {
      clearInterval(interval)
      sendCaptchaConfig.text = '获取验证码'
      sendCaptchaConfig.isDisabled = false
    } else {
      sendCaptchaConfig.text = `${sendCaptchaConfig.countdown}s后重新获取`
    }
  }, 1000)
}

// 登录处理函数
const handleLogin = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  // 调用 form.validate 方法触发表单验证
  await formEl.validate((valid) => {
    if (valid) {
      /* empty */
    }
  })
}
</script>

<template>
  <div class="w-full h-full">
    <el-form ref="emailLoginFormRef" size="large">
      <el-form-item prop="email">
        <el-input placeholder="邮箱">
          <template #prefix>
            <SvgIcon iconName="email" iconClass="size-5" />
          </template>
        </el-input>
      </el-form-item>
      <el-form-item prop="captcha">
        <div class="flex w-full justify-between gap-3">
          <el-input placeholder="短信验证码" maxlength="6" class="2/3">
            <template #prefix>
              <SvgIcon iconName="captcha" iconClass="size-5" />
            </template>
          </el-input>
          <el-button
            plain
            @click="sendCaptcha"
            :loading="sendCaptchaConfig.isLoading"
            :disabled="sendCaptchaConfig.isDisabled"
          >
            {{ sendCaptchaConfig.text }}
          </el-button>
        </div>
      </el-form-item>
      <el-form-item>
        <el-button class="w-full" type="primary" @click="handleLogin(emailLoginFormRef)">
          登录
        </el-button>
      </el-form-item>
      <el-form-item>
        <el-button class="w-full" plain> 返回 </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<style scoped></style>
