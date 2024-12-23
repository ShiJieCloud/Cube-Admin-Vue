<script setup lang="ts" name="Logo">
import { AppConfig } from '@/config/appConfig'
</script>

<template>
  <div class="logo-container">
    <!--  logo 图标 -->
    <SvgIcon iconName="logo" :iconSize="36" />
    <!-- 标题 -->
    <span class="logo-title">{{ AppConfig.getAppName() }}</span>
  </div>
</template>

<style scoped lang="postcss">
.logo-container {
  @apply flex items-center justify-center space-x-2;
  height: var(--os-layout-logo-height);
  width: var(--os-layout-aside-width);

  .logo-title {
    @apply text-lg font-bold subpixel-antialiased;
    @apply bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500;
  }
}
</style>
