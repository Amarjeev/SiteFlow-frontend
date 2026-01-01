import { useState } from 'react'
import { updateDailyProjectProgressEngApi } from '../../../api/engineer/projects.api'
import { showSuccess } from '../../../utils/toast'
import { projectUpdateEngValidation } from '../validations/ProjectUpdate.validation'

export const useProjectUpdatesEng = () => {
  const [updateText, setUpdateText] = useState('')
  const [newStatus, setNewStatus] = useState('')
  const [updateDate, setUpdateDate] = useState(
    () => new Date().toISOString().split('T')[0]
  )

  const [projectId, setProjectId] = useState('')
  const [validationError, setValidationError] = useState('')

  const [errorMessage, setErrorMessage] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async e => {
    e.preventDefault()
    setValidationError('')

    const payload = {
      projectId,
      progressSummary: updateText.trim(),
      updateDate,
      status: newStatus
    }

    const error = projectUpdateEngValidation({
      projectId,
      newStatus,
      updateText
    })

    if (error) {
      setValidationError(error)
      return
    }

    try {
      setLoading(true)
      setErrorMessage(null)

      const success = await updateDailyProjectProgressEngApi(payload)

      if (success) {
        showSuccess('Project update submitted successfully')
        setUpdateText('')
        setUpdateDate(new Date().toISOString().split('T')[0])
        return
      }
    } catch (error) {
      setErrorMessage(error.response?.data?.message || 'Something went wrong')
    } finally {
      setLoading(false)
    }
  }

  return {
    updateText,
    setUpdateText,
    newStatus,
    setNewStatus,
    updateDate,
    setUpdateDate,
    projectId,
    setProjectId,
    validationError,
    handleSubmit,
    errorMessage,
    loading
  }
}
