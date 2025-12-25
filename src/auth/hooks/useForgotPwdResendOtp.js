import { useLocation, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { requestOtpValidation } from '../validations/resetPassword.validation'
import { forgotPwdRequestOtpApi } from '../../api/auth/forgotPassword.api'
import { showSuccess } from '../../utils/toast'

export const useForgotPwdResendOtp = () => {
  const [loadingResendOtp, setLoadingResendOtp] = useState(false)
  const [errorMessageResendOtp, setErrorMessageResendOtp] = useState('')

  const location = useLocation()
  const navigate = useNavigate()

  const email = location.state?.email
  const role = location.state?.role

  // Protect route
  useEffect(() => {
    if (!email || !role) {
      navigate('/forgot-password', { replace: true })
    }
  }, [email, role, navigate])

  const handleRequestResendOtp = async () => {
    if (!requestOtpValidation(email, role)) return

    try {
      setLoadingResendOtp(true)
      setErrorMessageResendOtp('')

      const isSuccess = await forgotPwdRequestOtpApi({
        email: email.trim().toLowerCase(),
        role: role.toLowerCase()
      })

      if (isSuccess) {
        showSuccess('OTP sent successfully')
      }
    } catch (error) {
      setErrorMessageResendOtp(error.message || 'OTP sending failed')
    } finally {
      setLoadingResendOtp(false)
    }
  }

  return {
    loadingResendOtp,
    errorMessageResendOtp,
    handleRequestResendOtp
  }
}
