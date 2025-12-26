import { useState } from 'react'
import { createProjectValidation } from '../validations/createProject.validation'
import { createProjectApi } from '../../../api/admin/Projects.api'
import { showSuccess } from '../../../utils/toast'

export const useCreateProject = () => {
  const [errorMessage, setErrorMessage] = useState(null)
  const [loading, setLoading] = useState(false)

  const initialProjectState = {
    projectName: '',
    siteLocation: '',
    workSummary: '',
    startDate: '',
    endDate: ''
  }

  const [project, setProject] = useState(initialProjectState)

  const handleChange = e => {
    const { name, value } = e.target
    setProject(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async e => {
    e.preventDefault()
    if (!createProjectValidation(project)) return

    try {
      setLoading(true)

      const isSuccess = await createProjectApi(project)

      if (isSuccess) {
        showSuccess('Project created successfully')
        setErrorMessage(null)
        setProject(initialProjectState)
      }
    } catch (error) {
      const status = error.response?.status

      if (status === 404) {
        setProject(initialProjectState)
      }

      setErrorMessage(
        error.response?.data?.message || 'Something went wrong'
      )
    } finally {
      setLoading(false)
    }
  }

  return {
    project,
    handleSubmit,
    handleChange,
    errorMessage,
    loading
  }
}
