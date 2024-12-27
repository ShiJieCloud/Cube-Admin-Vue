<script setup lang="ts" name="MenuTree">
defineProps<{
  menuList: any[]
}>()
</script>

<template>
  <!-- 遍历菜单 -->
  <template v-for="item in menuList">
    <!-- 判断是否有子菜单，如果有子菜单，则使用el-sub-menu组件，否则使用el-menu-item组件 -->
    <template v-if="item.children && item.children.length > 0">
      <el-sub-menu :index="item.path" :key="item.name">
        <template #title>
          <el-icon>
            <SvgIcon :iconName="item.icon" :iconSize="24" />
          </el-icon>
          <span>{{ item.title }}</span>
        </template>
        <MenuTree :menuList="item.children" />
      </el-sub-menu>
    </template>
    <template v-else>
      <el-menu-item :index="item.path" :key="item.name">
        <el-icon>
          <SvgIcon :iconName="item.icon" :iconSize="24" />
        </el-icon>
        <template #title>
          <span>{{ item.title }}</span>
        </template>
      </el-menu-item>
    </template>
  </template>
</template>

<style scoped lang="postcss"></style>
