import { ElLoading } from 'element-plus'
import { ref } from 'vue'

// 加载实例和开始时间
const loadingInstance = ref<any>(null)
const startLoadingTime = ref<number>(0)

// 启动加载动画
export const startLoading = (): void => {
  loadingInstance.value = ElLoading.service({
    lock: true,
    text: '正在加载...',
    background: 'rgba(0, 0, 0, 0.7)',
  })

  // 记录启动时间
  startLoadingTime.value = Date.now()
}

// 关闭加载动画，确保最少显示 0.5 秒
export const closeLoading = async (): Promise<void> => {
  if (loadingInstance.value) {
    // 计算加载动画已显示的时间
    const elapsedTime = Date.now() - startLoadingTime.value
    const minLoadingTime = 500 // 最少加载时间 0.5 秒
    const delayTime = Math.max(0, minLoadingTime - elapsedTime) // 确保延迟时间不为负数

    // 等待剩余时间，确保加载动画至少显示 0.5 秒
    await new Promise((resolve) => setTimeout(resolve, delayTime))

    // 关闭加载动画
    loadingInstance.value.close()
  }
}
