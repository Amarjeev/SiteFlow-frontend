import { useState } from 'react'
import { validateLabourProfile } from '../validations/LabourProfile.validation'
import { createdLabourProfileSupApi } from '../../../api/supervisor/labour.api'
import { showSuccess } from '../../../utils/toast'

export const useCreateLabourProfile = () => {
  const [errorMessage, setErrorMessage] = useState(null)
  const [loading, setLoading] = useState(false)
  const [createdLabour, setCreatedLabour] = useState(null)
  const [showPoster, setShowPoster] = useState(false)

  const [formData, setFormData] = useState({
    username: '',
    mobile: ''
  })

  const handleChange = e => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async e => {
    e.preventDefault()

    const error = validateLabourProfile(formData)

    if (error) {
      setErrorMessage(error)
      return
    }

    try {
      setLoading(true)
      setErrorMessage(null)

      const payload = {
        username: formData.username.trim(),
        mobile: formData.mobile.trim()
      }

      const response = await createdLabourProfileSupApi(payload)
      showSuccess('Labour profile created successfully')
      setCreatedLabour(response?.data)
      setShowPoster(true)
      setFormData({ username: '', mobile: '' })
    } catch (error) {
      setErrorMessage(
        error?.response?.data?.message || 'Failed to create labour profile'
      )
    } finally {
      setLoading(false)
    }
  }

  return {
    formData,
    loading,
    errorMessage,

    createdLabour,
    showPoster,
    setShowPoster,

    handleChange,
    handleSubmit
  }
}
