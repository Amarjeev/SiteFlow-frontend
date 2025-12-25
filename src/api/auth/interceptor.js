import { api } from '../../config/api.config'

/* ===============================
   RESPONSE INTERCEPTOR
================================ */

api.interceptors.response.use(
  response => response,
  async error => {
    const originalRequest = error.config

    // Access token expired
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true

      try {
        // Call refresh API
        await api.post('/token/refresh')

        // Retry original request
        return api(originalRequest)
      } catch {
        // Refresh token expired → login again
        window.location.href = '/login'
      }
    }

    return Promise.reject(error)
  }
)

export default api
