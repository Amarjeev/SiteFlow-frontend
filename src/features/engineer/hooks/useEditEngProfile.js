import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { createStaffProfileValidation } from '../../admin/validations/createStaffProfile.validation'
import {
  editEngProfileApi,
  updateEngPwdApi,
  logoutEngPwdApi
} from '../../../api/engineer/engProfile.api'
import { showError, showSuccess } from '../../../utils/toast'

export const useEditEngProfile = (engineerProfile, refetchProfile) => {
  const navigate = useNavigate()

  /* ================= STATE ================= */

  const [profile, setProfile] = useState(engineerProfile || {})
  const [isEditing, setIsEditing] = useState(false)
  const [showPassword, setShowPassword] = useState(false)

  const [passwords, setPasswords] = useState({
    newPassword: '',
    confirmPassword: ''
  })

  const [updateError, setUpdateError] = useState(null)
  const [updateLoadingProfile, setUpdateLoadingProfile] = useState(false)
  const [pwdLoadingProfile, setPwdLoadingProfile] = useState(false)

  /* ================= HANDLERS ================= */

  useEffect(() => {
    if (!isEditing && engineerProfile) {
      setProfile(engineerProfile)
    }
  }, [engineerProfile, isEditing])

  const handleLogout = async () => {
    try {
      await logoutEngPwdApi()
      navigate('/', { replace: true })
      sessionStorage.clear()
    } catch {
      showError(
        'We logged you out, but couldn’t complete all background actions.'
      )
    }
  }

  const handleProfileChange = e => {
    const { name, value } = e.target
    setProfile(prev => ({ ...prev, [name]: value }))
  }

  const handlePasswordChange = e => {
    const { name, value } = e.target
    setPasswords(prev => ({ ...prev, [name]: value }))
  }

  const handleCancel = () => {
    setIsEditing(false)
    setProfile(engineerProfile)
  }

  const handleSaveProfile = async () => {
    if (!createStaffProfileValidation(profile)) return

    try {
      setUpdateLoadingProfile(true)
      setUpdateError(null)

      await editEngProfileApi(profile)

      showSuccess('Profile updated successfully')

      await refetchProfile()

      setIsEditing(false)
    } catch (error) {
      setUpdateError(error?.response?.data?.message || 'Something went wrong')
    } finally {
      setUpdateLoadingProfile(false)
    }
  }

  const handleChangePassword = async () => {
    const trimmedPassword = passwords.newPassword.trim()

    if (trimmedPassword.length < 6 || trimmedPassword.length > 10) {
      setUpdateError('Password must be between 6 and 10 characters long')
      return
    }

    if (passwords.newPassword !== passwords.confirmPassword) {
      setUpdateError('Passwords do not match')
      return
    }

    try {
      setPwdLoadingProfile(true)
      setUpdateError(null)

      await updateEngPwdApi({ password: passwords.newPassword })

      showSuccess('Password updated successfully')

      setPasswords({
        newPassword: '',
        confirmPassword: ''
      })

      setShowPassword(false)
    } catch (error) {
      console.log(error.response)
      setUpdateError(error?.response?.data?.message || 'Something went wrong')
    } finally {
      setPwdLoadingProfile(false)
    }
  }

  /* ================= RETURN ================= */

  return {
    profile,
    setProfile,
    isEditing,
    setIsEditing,
    showPassword,
    setShowPassword,
    passwords,
    updateError,
    handleProfileChange,
    handlePasswordChange,
    handleSaveProfile,
    handleChangePassword,
    handleLogout,
    updateLoadingProfile,
    pwdLoadingProfile,
    handleCancel
  }
}
