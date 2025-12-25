import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { verifyOtpValidation } from '../validations/resetPassword.validation'
import { forgotPwdVerifyOtpApi } from '../../api/auth/forgotPassword.api'
import { useNavigate } from 'react-router-dom'

export const useForgotPwdVerifyOtp = () => {
  const location = useLocation()
  const email = location.state?.email
  const role = location.state?.role
  const [otp, setOtp] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const [loading, setLoading] = useState(false)

  const navigate = useNavigate()

  useEffect(() => {
    if (!email || !role) {
      navigate('/forgot-password', { replace: true })
    }
  }, [email, role, navigate])

  const handleVerifyOtp = async e => {
    e.preventDefault()
    if (!verifyOtpValidation(email, otp, role)) return

    try {
      setLoading(true)

      const isSuccess = await forgotPwdVerifyOtpApi({
        email: email.trim().toLowerCase(),
        role: role?.toLowerCase(),
        otp: otp?.trim()
      })

      if (isSuccess) {
        navigate('/forgot-password/reset', {
          state: { email, role }
        })
      }
    } catch (error) {
      setErrorMessage(error?.message || 'OTP sending failed')
    } finally {
      setLoading(false)
    }
  }

  return {
    setOtp,
    otp,
    email,
    errorMessage,
    handleVerifyOtp,
    loading
  }
}
