<script setup lang="ts" name="usernameLoginRequest">
import { ElMessage, ElNotification, FormInstance, FormRules } from 'element-plus'
import { onMounted, reactive, ref } from 'vue'

import { getCaptchaApi, getUserInfoApi, postUsernameLogin } from '@/api/user'
import { LoginFormMode } from '@/constants/loginFormMode'
import router from '@/router'
import { useUserStore } from '@/stores/user'
import { UsernameLoginRequest } from '@/types/models/user'
import { getGreeting } from '@/utils/getGreeting'
import { handleError } from '@/utils/handleError'
import { closeLoading, startLoading } from '@/utils/loading'

const { setUserToken, setLoginFormMode, userInfo, setUserInfo } = useUserStore()

const usernameLoginRequestRef = ref<FormInstance>()

const usernameLoginRequest = ref<UsernameLoginRequest>({
  username: 'admin123',
  password: 'admin123',
  captcha: '111111',
  captchaId: '',
  rememberMe: false,
})

// 登录表单验证规则
const usernameLoginRequestRules = reactive<FormRules<UsernameLoginRequest>>({
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

  // 执行表单验证，验证失败时直接返回
  const isValid = await formEl.validate()
  if (!isValid) return

  try {
    // 解构出表单数据
    const { username, password, captcha } = usernameLoginRequest.value

    // 进行基本的用户名、密码、验证码验证
    if (username !== 'admin123' || password !== 'admin123' || captcha !== '111111') {
      ElMessage.error('用户名、密码或验证码错误')
      return
    }

    // 显示加载状态
    startLoading()

    // 调用登录 API
    const usernameLoginResponse = await postUsernameLogin(usernameLoginRequest.value)

    // 设置用户 Token
    setUserToken(usernameLoginResponse.token)

    ElMessage.success('登录成功')

    // 获取用户信息并设置
    const userData = await getUserInfoApi()
    if (userData) setUserInfo(userData)

    // 跳转到首页
    await router.push({ name: 'Home' })

    // 显示欢迎通知
    ElNotification({
      title: getGreeting(),
      message: `欢迎回来，${userInfo?.nickname}`,
      type: 'success',
      duration: 2000,
    })

    // 关闭加载状态
    closeLoading()
  } catch (error) {
    // 错误处理
    handleError(error)
  }
}

const captchaImageBase64 = ref<string>() // 确保 captcha 是一个响应式对象

const getCaptcha = async () => {
  try {
    const data = await getCaptchaApi()
    captchaImageBase64.value = data.captchaImageBase64
    usernameLoginRequest.value.captchaId = data.captchaId
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
      ref="usernameLoginRequestRef"
      :rules="usernameLoginRequestRules"
      :model="usernameLoginRequest"
      size="large"
    >
      <el-form-item prop="username">
        <el-input placeholder="请输入用户名" v-model="usernameLoginRequest.username" clearable>
          <template #prefix>
            <SvgIcon iconName="user" iconClass="size-5" />
          </template>
        </el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input
          placeholder="请输入密码"
          type="password"
          v-model="usernameLoginRequest.password"
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
          <el-input placeholder="请输入验证码" class="w-2/3" v-model="usernameLoginRequest.captcha">
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
          <el-checkbox v-model="usernameLoginRequest.rememberMe">
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
        <el-button class="w-full" type="primary" @click="handleLogin(usernameLoginRequestRef)">
          登录
        </el-button>
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
