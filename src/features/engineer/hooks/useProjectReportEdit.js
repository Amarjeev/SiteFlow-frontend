import { useState, useEffect } from 'react'
import {
  fetchProjectWithIdEngApi,
  fetchProjectReport,
  editProjectReportEngApi,
  delProjectReportEngApi
} from '../../../api/engineer/projects.api'
import { useCallback } from 'react'
import { showSuccess } from '../../../utils/toast'

export const useProjectReportEdit = () => {
  const [projectId, setProjectId] = useState(() => {
    return sessionStorage.getItem('projectId') || ''
  })

  const [filterDate, setFilterDate] = useState('')
  const [projectDetails, setProjectDetails] = useState(null)
  const [projectReport, setProjectReport] = useState(null)
  const [errorMessage, setErrorMessage] = useState(null)
  const [loading, setLoading] = useState(false)

  const [editingId, setEditingId] = useState(null)
  const [editLoading, setEditLoading] = useState(false)
  const [editError, setEditError] = useState(null)
  const [deleteLoading, setDeleteLoading] = useState(false)
  const [editForm, setEditForm] = useState({
    updateDate: '',
    progressSummary: '',
    projectStatus: ''
  })

  /* ================= FETCH PROJECT ================= */

  const handleFetchProject = useCallback(async () => {
    if (projectId.trim().length !== 17) return

    setLoading(true)
    setErrorMessage(null)
    setProjectDetails(null)

    try {
      const [project, report] = await Promise.all([
        fetchProjectWithIdEngApi(projectId),
        fetchProjectReport(projectId, filterDate)
      ])

      setProjectDetails(project?.project)
      setProjectReport(report?.reports || [])
    } catch (error) {
      setErrorMessage(
        error?.response?.data?.message || 'Failed to fetch project data'
      )
    } finally {
      setLoading(false)
    }
  }, [projectId, filterDate])

  /* ================= PERSIST PROJECT ID ================= */

  useEffect(() => {
    if (projectId.trim().length !== 17) return
    sessionStorage.setItem('projectId', projectId)
  }, [projectId])

  /* ================= AUTO FETCH ON LOAD ================= */

  useEffect(() => {
    setProjectDetails(null)
    setProjectReport(null)
    if (projectId.trim().length !== 17) return
    handleFetchProject()
  }, [handleFetchProject, projectId])

  /* ================= EDIT SECTION ================= */

  /* ================= FILTER ================= */
  const filteredUpdates = filterDate
    ? projectReport?.filter(u => u.updateDate?.slice(0, 10) === filterDate)
    : projectReport

  /* ================= HELPERS ================= */
  const formatDate = date => (date ? new Date(date).toLocaleDateString() : '-')

  const startEdit = update => {
    setEditingId(update._id)
    setEditForm({
      updateDate: update.updateDate?.slice(0, 10),
      progressSummary: update.progressSummary,
      projectStatus: update.projectStatus
    })
  }

  const cancelEdit = () => {
    setEditingId(null)
  }

  const handleEditChange = e => {
    const { name, value } = e.target
    setEditForm(prev => ({ ...prev, [name]: value }))
  }

  const handleSaveEdit = async updateId => {
    try {
      if (!updateId || !editForm) return

      const length = editForm?.progressSummary.trim().length

      if (length < 10 || length > 150) {
        setEditError('Progress summary must be between 10 and 150 characters')
        return
      }
      const payload = {
        id: updateId,
        projectId,
        editForm
      }
      setEditLoading(true)
      setEditError(null)

      const success = await editProjectReportEngApi(payload)

      if (success) {
        showSuccess('Project report updated successfully')
        setEditingId(null)
        handleFetchProject()
      }
    } catch (error) {
      setEditError(
        error?.response?.data?.message || 'Something went wrong while saving'
      )
    } finally {
      setEditLoading(false)
    }
  }

  /* ================= DELETE (SOFT DELETE) ================= */
  const handleDelete = async updateId => {
    if (!updateId) return

    const confirmed = window.confirm(
      'Are you sure you want to delete this update?'
    )
    if (!confirmed) return

    try {
      setDeleteLoading(true)
      setEditError(null)

      const payload = {
        id: updateId,
        projectId
      }

      const success = await delProjectReportEngApi(payload)

      if (success) {
        showSuccess('Project report deleted successfully')
        await handleFetchProject()
        return
      }
    } catch (error) {
      console.error(error.response)
      setEditError(
        error?.response?.data?.message || 'Something went wrong while saving'
      )
    } finally {
      setDeleteLoading(false)
    }
  }

  return {
    projectId,
    setProjectId,
    filterDate,
    setFilterDate,
    projectDetails,
    projectReport,
    errorMessage,
    loading,
    handleFetchProject,

    editingId,
    setEditingId,
    filteredUpdates,
    formatDate,
    startEdit,
    cancelEdit,
    handleEditChange,
    handleSaveEdit,
    editForm,
    editLoading,
    editError,
    deleteLoading,
    handleDelete
  }
}
