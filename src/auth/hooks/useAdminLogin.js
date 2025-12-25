import { useState } from 'react'
import { adminLoginApi } from '../../api/auth/adminLogin.api'
import { showError, showSuccess } from '../../utils/toast'
import { useNavigate } from 'react-router-dom'

export const useAdminLogin = () => {
  const [errorMessage, setErrorMessage] = useState(null)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  const navigate = useNavigate()

  const handleSubmit = async e => {
    e.preventDefault()

    if (!email || !password) {
      showError('Please fill all field')
      return
    }

    try {
      setLoading(true)
      const isSuccess = await adminLoginApi({ email, password })

      if (isSuccess) {
        showSuccess('Login successful')
        navigate('/admin/home', { replace: true })
        setEmail('')
        setPassword('')
        setErrorMessage('')
      }
    } catch (error) {
      setErrorMessage(error.message || 'Login failed')
    } finally {
      setLoading(false)
    }
  }

  return {
    errorMessage,
    email,
    password,
    setEmail,
    setPassword,
    handleSubmit,
    loading
  }
}
