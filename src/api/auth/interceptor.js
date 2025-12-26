import api from '../../config/api.config'

api.interceptors.response.use(
  response => response,
  async error => {
    const originalRequest = error.config

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true

      try {
        await api.post('/token/refresh')
        return api(originalRequest)
      } catch {
        window.location.href = '/'
      }
    }

    return Promise.reject(error)
  }
)

export default api
