import { useState } from 'react'
import { adminLoginApi } from '../../api/auth/adminLogin.api'
import { showError, showSuccess } from '../../utils/toast'
import { useNavigate } from 'react-router-dom'

// ---------- Admin Login Hook ----------
export const useAdminLogin = () => {
  // ---------- States ----------
  const [errorMessage, setErrorMessage] = useState(null)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  // ---------- Router ----------
  const navigate = useNavigate()

  // ---------- Submit Handler ----------
  const handleSubmit = async e => {
    e.preventDefault()

    if (!email || !password) {
      showError('Please fill all field')
      return
    }

    try {
      setLoading(true)

      const response = await adminLoginApi({ email, password })
      const { userProfile, success } = response

      if (success) {
        showSuccess('Login successful')

        // ---------- Persist Admin Info ----------
        sessionStorage.setItem('userEmail', userProfile?.email)
        sessionStorage.setItem('userName', userProfile?.name)

        navigate('/admin/projects', { replace: true })

        setEmail('')
        setPassword('')
        setErrorMessage('')
      }
    } catch (error) {
      console.log(error)
      setErrorMessage(error.message || 'Login failed')
    } finally {
      setLoading(false)
    }
  }

  // ---------- Hook Return ----------
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
