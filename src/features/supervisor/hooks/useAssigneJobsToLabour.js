import { useState, useCallback } from 'react'
import { validateAssignJob } from '../validations/jobAssigne.validation'
import { showSuccess } from '../../../utils/toast'
import { assigneJobToLabourSupApi } from '../../../api/supervisor/labour.api'

export const useAssigneJobsToLabour = () => {
  const [assignJobData, setAssignJobData] = useState({
    jobDescription: '',
    jobDate: '',
    jobStartTime: '',
    jobEndTime: '',
    labourId: '',
    projectId: ''
  })

  const [errorMessage, setErrorMessage] = useState(null)
  const [loading, setLoading] = useState(false)

  /* ================= HANDLE CHANGE ================= */
  const handleChange = useCallback(e => {
    const { name, value } = e.target

    setAssignJobData(prev => ({
      ...prev,
      [name]: value
    }))
  }, [])

  /* ================= SET IDS ================= */
  const setIds = useCallback((labourId, projectId) => {
    setAssignJobData(prev => ({
      ...prev,
      labourId,
      projectId
    }))
  }, [])

  /* ================= ASSIGN JOB ================= */
  const handleAssignJob = async () => {
    setErrorMessage(null)

    const error = validateAssignJob(assignJobData)
    if (error) {
      console.log('ffffff', error)
      setErrorMessage(error)
      return
    }

    try {
      setLoading(true)

      const payload = {
        labourId: assignJobData.labourId.trim(),
        projectId: assignJobData.projectId.trim().toUpperCase(),
        jobDescription: assignJobData.jobDescription.trim(),
        jobDate: assignJobData.jobDate,
        jobStartTime: assignJobData.jobStartTime,
        jobEndTime: assignJobData.jobEndTime
      }
      
      await assigneJobToLabourSupApi(payload)
      showSuccess('Job assigned to labour successfully')

      setAssignJobData(prev => ({
        ...prev,
        jobDescription: '',
        jobDate: '',
        jobStartTime: '',
        jobEndTime: ''
      }))
    } catch (error) {
      console.log(error)
      setErrorMessage(
        error?.response?.data?.message || 'Failed to assign job to labour'
      )
    } finally {
      setLoading(false)
    }
  }

  return {
    assignJobData,
    setAssignJobData,
    errorMessage,
    loading,
    handleChange,
    handleAssignJob,
    setIds
  }
}
