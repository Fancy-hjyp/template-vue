import apiClient from './apiClient'

/**
 * API请求方法
 */
const exampleApi = {
    getContent: async (randomNumber) => {
    try {
    // 示例GET请求
    //   const response = await apiClient.get('/list')
      console.log('获取内容成功:')
      return {
        data: `This is example content from API. Random number: ${randomNumber}`
      }
    } catch (error) {
      console.error('获取内容失败:', error)
      throw error
    }
  },
}

export default exampleApi