<script setup lang="ts" name="ForgotPasswordForm">
import { FormInstance, FormRules } from 'element-plus'
import { reactive, ref } from 'vue'

import { LoginFormMode } from '@/constants/loginFormMode'
import { useUserStore } from '@/stores/user'
import { ResetPasswordData } from '@/types/models/user'

const { setLoginFormMode } = useUserStore()

const resetPasswordFormRef = ref<FormInstance>()

const resetPasswordForm = ref<ResetPasswordData>({
  phone: '',
  captcha: '',
  password: '',
  confirmPassword: '',
})

const resetPasswordFormRules = reactive<FormRules<ResetPasswordData>>({})

const handleResetPassword = async (formEl: FormInstance | undefined) => {
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
      ref="resetPasswordFormRef"
      :rules="resetPasswordFormRules"
      size="large"
      :model="resetPasswordForm"
    >
      <el-form-item prop="phone">
        <el-input placeholder="手机号码" v-model="resetPasswordForm.phone">
          <template #prefix>
            <SvgIcon iconName="phone" />
          </template>
        </el-input>
      </el-form-item>
      <el-form-item prop="captcha">
        <div class="flex w-full justify-between gap-3">
          <el-input
            placeholder="短信验证码"
            maxlength="6"
            v-model="resetPasswordForm.captcha"
            class="2/3"
          >
            <template #prefix>
              <SvgIcon iconName="captcha" />
            </template>
          </el-input>
          <el-button plain> 发送验证码</el-button>
        </div>
      </el-form-item>
      <el-form-item prop="password">
        <el-input
          placeholder="密码"
          type="password"
          v-model="resetPasswordForm.password"
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
          v-model="resetPasswordForm.confirmPassword"
          show-password
          clearable
        >
          <template #prefix>
            <SvgIcon iconName="password" />
          </template>
        </el-input>
      </el-form-item>
      <el-form-item>
        <el-button class="w-full" type="primary" @click="handleResetPassword(resetPasswordFormRef)">
          登录</el-button
        >
      </el-form-item>
      <el-form-item>
        <el-button class="w-full" plain @click="setLoginFormMode(LoginFormMode.USERNAME)">
          返回</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>

<style scoped></style>
