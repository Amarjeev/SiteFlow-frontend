import { useState, useEffect } from 'react'
import { verifyProjectAndLabourSupApi } from '../../../api/supervisor/labour.api'
import { useCallback } from 'react'

export const useVerifyProjectAndLabour = () => {
  const [projectId, setProjectId] = useState(() => {
    return localStorage.getItem('assignJob_projectId') || ''
  })

  const [labourId, setLabourId] = useState(() => {
    return localStorage.getItem('assignJob_labourId') || ''
  })

  const [project, setProject] = useState(null)
  const [labour, setLabour] = useState(null)
  const [verifyError, setVerifyError] = useState(null)
  const [loadingVerify, setLoadingVerify] = useState(false)

  useEffect(() => {
    if (projectId) {
      localStorage.setItem('assignJob_projectId', projectId)
    }
    if (labourId) {
      localStorage.setItem('assignJob_labourId', labourId)
    }
  }, [projectId, labourId])

  const handleVerify = useCallback(async () => {
    if (!projectId.trim()) {
      setVerifyError('Please enter the Project ID')
      return
    }

    if (!labourId.trim()) {
      setVerifyError('Please enter a Labour ID or mobile number')
      return
    }

    try {
      setVerifyError(null)
      setLoadingVerify(true)
      setProject(null)
      setLabour(null)

      const payload = {
        projectId: projectId.trim().toUpperCase(),
        labourId: labourId.trim()
      }

      const response = await verifyProjectAndLabourSupApi(payload)

      setProject(response.project)
      setLabour(response.labour)
    } catch (error) {
      setVerifyError(
        error?.response?.data?.message || 'Failed to verify project and labour'
      )
    } finally {
      setLoadingVerify(false)
    }
  }, [projectId, labourId])

  const handleClear = useCallback(() => {
    setProjectId('')
    setLabourId('')
    setProject(null)
    setLabour(null)
    setVerifyError(null)
    setLoadingVerify(false)

    localStorage.removeItem('assignJob_projectId')
    localStorage.removeItem('assignJob_labourId')
  }, [])

  useEffect(() => {
    if (projectId && labourId) {
      handleVerify()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return {
    projectId,
    setProjectId,
    labourId,
    setLabourId,
    project,
    labour,
    verifyError,
    loadingVerify,
    handleVerify,
    handleClear
  }
}
