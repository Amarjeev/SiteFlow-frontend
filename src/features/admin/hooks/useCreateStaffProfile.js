import { useState } from 'react'
import { createStaffProfileValidation } from '../validations/createStaffProfile.validation'
import { createStaffProfileApi } from '../../../api/admin/staff.api'
import { showSuccess } from '../../../utils/toast'

export const useCreateStaffProfile = () => {
  const [errorMessage, setErrorMessage] = useState(null)
  const [loading, setLoading] = useState(false)

  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    role: '',
    email: ''
  })

  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async e => {
    e.preventDefault()

    if (!createStaffProfileValidation(formData)) return

    try {
      setLoading(true)

      const isSuccess = await createStaffProfileApi(formData)

      if (isSuccess) {
        showSuccess('Project created successfully')
        setErrorMessage(null)
        setFormData({
          name: '',
          mobile: '',
          role: '',
          email: ''
        })
      }
    } catch (error) {
      setErrorMessage(error.response?.data?.message || 'Something went wrong')
    } finally {
      setLoading(false)
    }
  }

  return { formData, errorMessage, loading, handleChange, handleSubmit }
}
