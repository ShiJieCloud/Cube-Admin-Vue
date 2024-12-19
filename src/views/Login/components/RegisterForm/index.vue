<script setup lang="ts" name="RegisterForm">
import { FormInstance, FormRules } from 'element-plus'
import { reactive, ref } from 'vue'

import { LoginFormMode } from '@/constants/loginFormMode'
import { useUserStore } from '@/stores/user'
import { RegisterFormData } from '@/types/models/user'

const { setLoginFormMode } = useUserStore()

const registerFormRef = ref<FormInstance>()

const registerForm = ref<RegisterFormData>({
  username: '',
  phone: '',
  captcha: '',
  password: '',
  confirmPassword: '',
})

// 自定义校验规则，检验确认密码是否一致
const validateConfirmPassword = (rule: any, value: any, callback: any) => {
  if (value === '') {
    callback(new Error('请确认密码'))
  } else if (value !== registerForm.value.password) {
    callback(new Error('两次密码输入不一致，请重新输入'))
  } else {
    callback()
  }
}

// 校验规则
const registerFormRules = reactive<FormRules<RegisterFormData>>({
  username: [
    { required: true, message: '请输入用户名', trigger: 'blur' },
    { min: 3, max: 15, message: '用户名长度在 3 到 15 个字符之间', trigger: 'blur' },
  ],
  phone: [
    { required: true, message: '请输入手机号', trigger: 'blur' },
    { pattern: /^1[3-9]\d{9}$/, message: '请输入有效的手机号', trigger: 'blur' },
  ],
  captcha: [
    { required: true, message: '请输入验证码', trigger: 'blur' },
    { min: 4, max: 6, message: '验证码长度应为 4 到 6 位', trigger: 'blur' },
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    { min: 6, max: 20, message: '密码长度应在 6 到 20 位之间', trigger: 'blur' },
  ],
  confirmPassword: [
    { required: true, message: '请确认密码', trigger: 'blur' },
    {
      validator: validateConfirmPassword,
      trigger: 'blur',
    },
  ],
})

const handleRegister = async (formEl: FormInstance | undefined) => {
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
    <el-form ref="registerFormRef" :model="registerForm" :rules="registerFormRules" size="large">
      <el-form-item prop="username">
        <el-input placeholder="用户名" v-model="registerForm.username" clearable>
          <template #prefix>
            <SvgIcon iconName="user" />
          </template>
        </el-input>
      </el-form-item>
      <el-form-item prop="phone">
        <el-input placeholder="手机号码" v-model="registerForm.phone">
          <template #prefix>
            <SvgIcon iconName="phone" />
          </template>
        </el-input>
      </el-form-item>
      <el-form-item prop="captcha">
        <div class="flex items-center w-full gap-4">
          <el-input placeholder="请输入验证码" v-model="registerForm.captcha" class="w-2/3">
            <template #prefix>
              <SvgIcon iconName="captcha" iconClass="size-5" />
            </template>
          </el-input>
          <div class="w-1/3 h-10 bg-gray-300 cursor-pointer">
            <el-image fit="contain" class="w-full" src="" alt="Captcha" />
          </div>
        </div>
      </el-form-item>
      <el-form-item prop="password">
        <el-input
          placeholder="密码"
          type="password"
          v-model="registerForm.password"
          show-password
          clearable
        >
          <template #prefix>
            <SvgIcon iconName="password" />
          </template>
        </el-input>
      </el-form-item>
      <el-form-item prop="confirmPassword">
        <el-input
          placeholder="确认密码"
          type="password"
          v-model="registerForm.confirmPassword"
          show-password
          clearable
        >
          <template #prefix>
            <SvgIcon iconName="password" />
          </template>
        </el-input>
      </el-form-item>
      <el-form-item>
        <el-button class="w-full" type="primary" @click="handleRegister(registerFormRef)">
          点击注册
        </el-button>
        <div class="leading-6 flex w-full justify-center">
          <el-link class="text-md" type="primary" @click="setLoginFormMode(LoginFormMode.USERNAME)">
            已有账号？去登录
          </el-link>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<style scoped></style>
