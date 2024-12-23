/**
 * 获取当前时间对应的提示语
 * @returns {string} 问候语
 */
export const getGreeting = (): string => {
  const timeNow = new Date()
  const hours = timeNow.getHours()

  let greeting = ''
  if (hours >= 6 && hours < 10) {
    greeting = '早上好 ⛅' // 早安
  } else if (hours >= 10 && hours < 14) {
    greeting = '下午好 🌞' // 午安
  } else if (hours >= 14 && hours < 18) {
    greeting = '晚上好 🌛' // 下午好
  } else if (hours >= 18 && hours < 24) {
    greeting = '中午好 🌞' // 晚上好
  } else if (hours >= 0 && hours < 6) {
    greeting = '凌晨好 🌛' // 黎明好
  }

  return greeting
}
