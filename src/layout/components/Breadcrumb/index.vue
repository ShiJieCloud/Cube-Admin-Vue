<script setup lang="ts" name="Breadcrumb">
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

// 计算有效的面包屑项
const breadcrumbItems = computed(() => {
  return route.matched
    .map((item) => ({
      to: item.components ? { name: item.name } : undefined,
      title: item.meta.title,
      icon: item.meta.icon,
    }))
    .filter((item) => item.title)
})
</script>

<template>
  <!-- 面包屑 -->
  <el-breadcrumb class="breadcrumb-container" separator="/">
    <el-breadcrumb-item
      v-for="(item, index) in breadcrumbItems"
      :key="index"
      :to="item.to"
      class="flex items-center w-auto text-nowrap"
    >
      <template #default>
        <span class="flex items-center gap-1">
          <SvgIcon v-if="item.icon" :name="item.icon" />
          <span>{{ item.title }}</span>
        </span>
      </template>
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<style scoped>
.breadcrumb-container {
  display: flex;
  flex-wrap: nowrap; /* 防止换行 */
  overflow: hidden; /* 横向滚动溢出处理 */
  padding-right: 12px;
  line-height: normal;
}
</style>
