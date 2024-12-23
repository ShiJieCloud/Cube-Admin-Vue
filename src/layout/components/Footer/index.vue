<script setup lang="ts" name="Footer">
import { AppConfig } from '@/config/appConfig'
</script>

<template>
  <div class="footer-container">
    <!-- 左侧：公司名称或标志 -->
    <div class="flex-content">
      <SvgIcon iconName="logo" :iconSize="20" />
      <span class="logo-title">{{ AppConfig.getAppName() }}</span>
    </div>
    <!-- 中间：导航链接 -->
    <div class="flex-content">
      <a href="about">关于我们</a>
      <a href="#contact">联系我们</a>
      <a href="#privacy-policy">隐私政策</a>
      <a href="#terms-of-service">服务条款</a>
    </div>
    <!-- 右侧：版权信息 -->
    <div class="text-right">&copy; 2024 {{ AppConfig.getAppName() }}. 保留所有权利.</div>
  </div>
</template>

<style scoped lang="postcss">
.footer-container {
  @apply flex items-center w-full;
  @apply select-none text-xs;
  height: var(--os-layout-footer-height);
  @apply justify-center lg:justify-between;

  .flex-content {
    @apply items-center gap-2;
    @apply flex justify-center gap-1 text-gray-400;
    @apply hidden lg:flex;

    .logo-title {
      @apply font-bold subpixel-antialiased text-sm;
      @apply bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500;
    }
  }
}
</style>
