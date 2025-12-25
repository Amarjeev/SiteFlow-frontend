import { useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { api } from '../../config/api.config'

export const useAuthRedirect = () => {
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    // Run only on public pages
    const publicPaths = ['/login', '/signup', '/forgot-password']

    if (!publicPaths.includes(location.pathname)) {
      return
    }

    const checkAuth = async () => {
      try {
        const res = await api.get('/auth/me')
        const role = res.data.user.role
        const userRole = sessionStorage.getItem('userRole') || ''
        if (userRole !== role) return
        if (role === 'admin') navigate('/admin/home', { replace: true })
        else if (role === 'supervisor')
          navigate('/supervisor/home', { replace: true })
        else if (role === 'engineer')
          navigate('/engineer/home', { replace: true })
      } catch {
        // Not logged in → stay on public page
      }
    }

    checkAuth()
  }, [location.pathname, navigate])
}
