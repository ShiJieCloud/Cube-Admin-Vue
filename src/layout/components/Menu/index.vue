<script setup lang="ts" name="Menu"></script>

<template>
  <div class="menu-container">
    <el-menu
      class="border-0"
      router
      :default-active="$route.path"
      :show-timeout="50"
      :hide-timeout="50"
    >
      <el-menu-item index="/home">
        <el-icon size="22px">
          <SvgIcon name="home" />
        </el-icon>
        <template #title>
          <span>首页</span>
        </template>
      </el-menu-item>
      <el-sub-menu index="/permission">
        <template #title>
          <el-icon size="22px">
            <svg-icon name="permission" />
          </el-icon>
          <span>权限管理</span>
        </template>
        <el-menu-item index="/permission/user">
          <el-icon size="22px">
            <svg-icon name="user" />
          </el-icon>
          <template #title>
            <span>用户管理</span>
          </template>
        </el-menu-item>
        <el-menu-item index="/permission/department">
          <el-icon size="22px">
            <svg-icon name="department" />
          </el-icon>
          <template #title>
            <span>部门管理</span>
          </template>
        </el-menu-item>
        <el-menu-item index="/permission/position">
          <el-icon size="22px">
            <svg-icon name="post-card" />
          </el-icon>
          <template #title>
            <span>岗位管理</span>
          </template>
        </el-menu-item>
        <el-menu-item index="/permission/menu">
          <el-icon size="22px">
            <svg-icon name="hamburger" />
          </el-icon>
          <template #title>
            <span>菜单管理</span>
          </template>
        </el-menu-item>
        <el-menu-item index="/permission/role">
          <el-icon size="22px">
            <svg-icon name="role" />
          </el-icon>
          <template #title>
            <span>角色管理</span>
          </template>
        </el-menu-item>
      </el-sub-menu>
      <el-menu-item index="/about">
        <el-icon size="22px">
          <svg-icon name="about" />
        </el-icon>
        <template #title>
          <span>关于项目</span>
        </template>
      </el-menu-item>
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
