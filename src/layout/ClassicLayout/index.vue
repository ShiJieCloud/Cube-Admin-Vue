<script setup lang="ts" name="ClassicLayout">
import Breadcrumb from '@/layout/components/Breadcrumb/index.vue'
import Footer from '@/layout/components/Footer/index.vue'
import Logo from '@/layout/components/Logo/index.vue'
import Menu from '@/layout/components/Menu/index.vue'
import { useUserStore } from '@/stores/user'

const { userInfo } = useUserStore()
</script>

<template>
  <div class="layout-container">
    <el-container class="h-full w-full">
      <el-aside>
        <Logo />
        <Menu />
      </el-aside>
      <el-container>
        <el-header class="w-full h-full flex items-center justify-between">
          <div class="h-full flex items-center gap-4">
            <!-- 折叠按钮 -->
            <SvgIcon iconName="fold" :iconSize="24" />

            <Breadcrumb />
          </div>

          <div class="h-full flex items-center justify-end gap-4">
            <!-- 搜索按钮 -->
            <SvgIcon iconName="Search" :iconSize="20" />

            <!-- 语言转换 -->
            <el-dropdown :hide-on-click="false">
              <SvgIcon iconName="language" :iconSize="20" />
            </el-dropdown>

            <!-- 皮肤按钮 -->
            <el-tooltip content="主题配置" placement="bottom">
              <SvgIcon iconName="theme" :iconSize="20" />
            </el-tooltip>

            <!-- 锁屏按钮 -->
            <el-tooltip content="锁屏" placement="bottom">
              <SvgIcon iconName="lock" :iconSize="20" />
            </el-tooltip>

            <!-- 全屏按钮 -->
            <el-tooltip content="全屏" placement="bottom">
              <SvgIcon iconName="full-screen" :iconSize="20" />
            </el-tooltip>

            <!-- 用户信息 -->
            <el-dropdown>
              <div class="flex items-center gap-3">
                <el-tag type="primary">{{ userInfo?.nickname }}</el-tag>
                <el-avatar :size="36" :src="userInfo?.avatarUrl" @error="false">
                  <img
                    src="https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png"
                    alt="加载失败"
                  />
                </el-avatar>
              </div>
              <template #dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item command="profile">
                    <template #default>
                      <div class="flex items-center gap-1">
                        <SvgIcon iconName="user" :iconSize="20" />
                        <span>个人中心</span>
                      </div>
                    </template>
                  </el-dropdown-item>
                  <el-dropdown-item command="logout">
                    <template #default>
                      <div class="flex items-center gap-1">
                        <SvgIcon iconName="logout" :iconSize="20" />
                        <span>退出登录</span>
                      </div>
                    </template>
                  </el-dropdown-item>
                </el-dropdown-menu>
              </template>
            </el-dropdown>
          </div>
        </el-header>
        <el-main><RouterView /></el-main>
        <el-footer>
          <Footer />
        </el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<style scoped lang="postcss">
.layout-container {
  @apply w-full h-full;

  .el-aside {
    @apply h-full;
    @apply border-r border-solid overflow-hidden;
    border-color: var(--el-border-color-light);
    width: var(--os-layout-aside-width);
    @apply transition-all duration-300;
  }

  .el-header {
    @apply flex items-center justify-between;
    @apply border-b border-solid overflow-hidden;
    border-color: var(--el-border-color-light);
    height: var(--os-layout-header-height);
    padding: 0 12px;
  }

  .el-main {
    @apply w-full h-full p-2;
    background-color: var(--el-bg-color-page);
  }

  .el-footer {
    height: var(--os-layout-footer-height);
  }
}
</style>
