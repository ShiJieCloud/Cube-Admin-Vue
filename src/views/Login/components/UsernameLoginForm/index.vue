<script setup lang="ts" name="UsernameLoginForm">
import { FormInstance, FormRules } from 'element-plus'
import { onMounted, reactive, ref } from 'vue'

import { getCaptchaApi } from '@/api/user'
import { LoginFormMode } from '@/constants/loginFormMode'
import { useUserStore } from '@/stores/user'
import { UsernameLoginData } from '@/types/models/user'
import { handleError } from '@/utils/handleError'

const { setLoginFormMode, setCaptchaId } = useUserStore()

const usernameLoginFormRef = ref<FormInstance>()

const usernameLoginForm = ref<UsernameLoginData>({
  username: '',
  password: '',
  captcha: '',
  rememberMe: false,
})

// 登录表单验证规则
const usernameLoginFormRules = reactive<FormRules<UsernameLoginData>>({
  username: [
    { required: true, message: '用户名不能为空', trigger: 'blur' },
    { min: 5, max: 15, message: '用户名长度在 5 到 15 个字符之间', trigger: 'blur' },
  ],
  password: [
    { required: true, message: '密码不能为空', trigger: 'blur' },
    { min: 6, max: 20, message: '密码长度在 6 到 20 个字符之间', trigger: 'blur' },
  ],
  captcha: [
    { required: true, message: '验证码不能为空', trigger: 'blur' },
    { len: 6, message: '验证码长度必须是 6 个字符', trigger: 'blur' },
  ],
})

const handleLogin = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  // 调用 form.validate 方法触发表单验证
  await formEl.validate((valid) => {
    if (valid) {
      /* empty */
    }
  })
}

const captchaImageBase64 = ref<string>() // 确保 captcha 是一个响应式对象

const getCaptcha = async () => {
  try {
    const data = await getCaptchaApi()
    captchaImageBase64.value = data.captchaImageBase64
    setCaptchaId(data.captchaId)
  } catch (error) {
    handleError(error)
  }
}

onMounted(() => {
  getCaptcha()
})
</script>

<template>
  <div class="w-full h-full">
    <!-- 表单 -->
    <el-form
      ref="usernameLoginFormRef"
      :rules="usernameLoginFormRules"
      :model="usernameLoginForm"
      size="large"
    >
      <el-form-item prop="username">
        <el-input placeholder="请输入用户名" v-model="usernameLoginForm.username" clearable>
          <template #prefix>
            <SvgIcon iconName="user" iconClass="size-5" />
          </template>
        </el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input
          placeholder="请输入密码"
          type="password"
          v-model="usernameLoginForm.password"
          show-password
          clearable
        >
          <template #prefix>
            <SvgIcon iconName="password" iconClass="size-5" />
          </template>
        </el-input>
      </el-form-item>
      <!-- 验证码 -->
      <el-form-item prop="captcha" class="mb-2">
        <div class="flex items-center w-full gap-4">
          <el-input placeholder="请输入验证码" class="w-2/3" v-model="usernameLoginForm.captcha">
            <template #prefix>
              <SvgIcon iconName="captcha" iconClass="size-5" />
            </template>
          </el-input>
          <div class="w-1/3 h-10 bg-gray-300 cursor-pointer" @click="getCaptcha">
            <el-image fit="cover" class="w-full h-full" :src="captchaImageBase64" alt="Captcha" />
          </div>
        </div>
      </el-form-item>
      <el-form-item class="mb-2">
        <div class="flex items-center">
          <el-checkbox v-model="usernameLoginForm.rememberMe">
            <div class="flex items-center gap-1">
              <span>7天内免登录</span>
              <el-tooltip
                content="勾选并登录后，规定天数内无需输入用户名和密码会自动登入系统"
                placement="top"
              >
                <SvgIcon iconName="tips" iconClass="size-4" />
              </el-tooltip>
            </div>
          </el-checkbox>
        </div>
      </el-form-item>
      <el-form-item>
        <el-button class="w-full" type="primary" @click="handleLogin(usernameLoginFormRef)">
          登录</el-button
        >
        <div class="leading-6 flex w-full justify-between">
          <el-link
            class="text-md"
            type="primary"
            @click="setLoginFormMode(LoginFormMode.FORGOT_PASSWORD)"
          >
            忘记密码?
          </el-link>
          <el-link class="text-md" type="primary" @click="setLoginFormMode(LoginFormMode.REGISTER)">
            还没有账号？去注册
          </el-link>
        </div>
      </el-form-item>
    </el-form>

    <div class="flex w-full items-center justify-between">
      <el-button @click="setLoginFormMode(LoginFormMode.PHONE)">手机登录</el-button>
      <el-button @click="setLoginFormMode(LoginFormMode.EMAIL)">邮箱登录</el-button>
      <el-button @click="setLoginFormMode(LoginFormMode.QRCODE)">二维码登录</el-button>
    </div>

    <el-divider>
      <span class="text-xs text-gray-400">第三方登录</span>
    </el-divider>

    <div class="flex items-center justify-between">
      <el-link :underline="false">
        <SvgIcon iconName="qq" iconClass="size-6" />
      </el-link>
      <el-link :underline="false">
        <SvgIcon iconName="weixin" iconClass="size-6" />
      </el-link>
      <el-link :underline="false">
        <SvgIcon iconName="github" iconClass="size-6" />
      </el-link>
      <el-link :underline="false">
        <SvgIcon iconName="gitee" iconClass="size-6" />
      </el-link>
      <el-link :underline="false">
        <SvgIcon iconName="gitcode" iconClass="size-6" />
      </el-link>
    </div>
  </div>
</template>

<style scoped></style>
