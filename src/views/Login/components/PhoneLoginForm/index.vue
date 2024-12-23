<script setup lang="ts" name="PhoneLoginForm">
import { FormInstance, FormRules } from 'element-plus'
import { reactive, ref } from 'vue'

import { LoginFormMode } from '@/constants/loginFormMode'
import { useUserStore } from '@/stores/user'
import { PhoneLoginData } from '@/types/models/user'

const { setLoginFormMode } = useUserStore()
const phoneLoginFormRef = ref<FormInstance>()

// 登录表单
const phoneLoginForm = ref<PhoneLoginData>({
  phone: '',
  captcha: '',
})

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

// 校验规则
const phoneLoginFormRules = reactive<FormRules<PhoneLoginData>>({
  phone: [
    { required: true, message: '请输入手机号', trigger: 'blur' },
    {
      pattern: /^1[3-9]\d{9}$/,
      message: '手机号格式不正确',
      trigger: 'blur',
    },
  ],
  captcha: [
    { required: true, message: '请输入验证码', trigger: 'blur' },
    {
      len: 6,
      message: '验证码必须是6位',
      trigger: 'blur',
    },
  ],
})

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
    <el-form
      ref="phoneLoginFormRef"
      :rules="phoneLoginFormRules"
      size="large"
      :model="phoneLoginForm"
    >
      <el-form-item prop="phone">
        <el-input placeholder="手机号码" v-model="phoneLoginForm.phone">
          <template #prefix>
            <SvgIcon iconName="phone" iconClass="size-5" />
          </template>
        </el-input>
      </el-form-item>
      <el-form-item prop="captcha">
        <div class="flex w-full justify-between gap-3">
          <el-input
            placeholder="短信验证码"
            maxlength="6"
            v-model="phoneLoginForm.captcha"
            class="2/3"
          >
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
        <el-button class="w-full" type="primary" @click="handleLogin(phoneLoginFormRef)">
          登录
        </el-button>
      </el-form-item>
      <el-form-item>
        <el-button class="w-full" plain @click="setLoginFormMode(LoginFormMode.USERNAME)">
          返回
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<style scoped></style>
