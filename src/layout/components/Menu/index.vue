<script setup lang="ts" name="Menu">
import MenuTree from '@/layout/components/Menu/components/MenuTree/index.vue'
import { useUserStore } from '@/stores/user'

const { menus } = useUserStore()
</script>

<template>
  <div class="menu-container">
    <el-menu class="border-0" router :collapse="false" :default-active="$route.path">
      <MenuTree :menu-list="menus" />
    </el-menu>
  </div>
</template>

<style scoped lang="postcss">
.menu-container {
  background-color: var(--el-menu-bg-color);

  :deep(.el-menu-item) {
    height: 48px;
    line-height: 48px; /* 确保文字垂直居中 */
  }

  :deep(.el-sub-menu__title) {
    height: 48px;
    line-height: 48px; /* 确保文字垂直居中 */
  }
}
</style>
