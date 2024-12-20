import { ElMessage } from 'element-plus'

export const handleError = (error: unknown): void => {
  if (error instanceof Error) {
    ElMessage.error(error.message) // 如果是 Error 对象，显示 error.message
  } else {
    ElMessage.error('发生未知错误') // 如果不是 Error 对象，显示通用错误
  }
}
