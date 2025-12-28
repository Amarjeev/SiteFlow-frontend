import { useState, useEffect } from 'react'
import {
  fetchStaffProfileApi,
  updateStaffProfileApi,
  deleteStaffProfileApi
} from '../../../api/admin/staff.api'
import { createStaffProfileValidation } from '../validations/createStaffProfile.validation'
import { showSuccess } from '../../../utils/toast'

export const useEditStaffProfile = () => {
  const [staff, setStaff] = useState(null)
  const [editableStaff, setEditableStaff] = useState(null)

  const [isEditing, setIsEditing] = useState(false)
  const [errorMessage, setErrorMessage] = useState(null)
  const [loading, setLoading] = useState(false)

  const [searchType, setSearchType] = useState(
    () => sessionStorage.getItem('searchType') || 'userId'
  )

  const [searchValue, setSearchValue] = useState(
    () => sessionStorage.getItem('searchValue') || ''
  )

  useEffect(() => {
    if (searchType) {
      sessionStorage.setItem('searchType', searchType.trim())
    }

    const trimmedValue = searchValue.trim()
    if (trimmedValue) {
      sessionStorage.setItem('searchValue', trimmedValue)
    }
  }, [searchType, searchValue])

  /* ================= SEARCH ================= */
  const handleSearch = async () => {
    if (!searchValue?.trim()) return

    try {
      setLoading(true)
      setErrorMessage(null)
      setStaff(null)
      setIsEditing(false)

      const payload = {
        searchType,
        searchValue: searchValue.trim()
      }

      const res = await fetchStaffProfileApi(payload)
      setStaff(res)
      setEditableStaff(res)
    } catch (error) {
      setErrorMessage(
        error?.response?.data?.message || 'Unable to fetch staff profile.'
      )
    } finally {
      setLoading(false)
    }
  }

  //re-fetch when page refresh
  useEffect(() => {
    if (!searchValue.trim()) return
    handleSearch()
  }, [])

  /* ================= EDIT ================= */
  const handleEdit = () => {
    setEditableStaff(staff)
    setIsEditing(true)
  }

  const handleChange = e => {
    const { name, value } = e.target

    setEditableStaff(prev => ({
      ...prev,
      [name]: value
    }))
  }

  /* ================= SAVE ================= */
  const handleSave = async () => {
    try {
      setErrorMessage(null)
      if (!createStaffProfileValidation(editableStaff)) return
      setLoading(true)

      const response = await updateStaffProfileApi(editableStaff)
      const { success, message } = response

      if (success) {
        showSuccess(message)
      }
    } catch (error) {
      setErrorMessage(
        error?.response?.data?.message || 'Failed to save changes.'
      )
    } finally {
      setLoading(false)
    }
  }

  /* ================= CANCEL ================= */
  const handleCancel = () => {
    setEditableStaff(staff)
    setIsEditing(false)
  }

  /* ================= PROJECT REMOVE ================= */
  const handleRemoveProject = projectId => {
    setEditableStaff(prev => ({
      ...prev,
      assignedProjects: prev.assignedProjects.filter(id => id !== projectId)
    }))
  }

  /* ================= DELETE ================= */
  const handleDeleteProfile = async () => {
    const confirmDelete = window.confirm(
      'Are you sure you want to delete this staff profile? This action cannot be undone.'
    )

    if (!confirmDelete) return

    const userId = staff?.userId
    if (!userId) return

    try {
      setLoading(true)
      setErrorMessage(null)
      const isSuccess = await deleteStaffProfileApi(userId)

      if (isSuccess) {
        showSuccess('Staff profile deleted successfully')
        setSearchValue("")
        setStaff(null)
        setEditableStaff(null)
        setIsEditing(false)
        sessionStorage.removeItem('searchValue')
        sessionStorage.removeItem('searchType')
      }
    } catch (error) {
      setErrorMessage(
        error?.response?.data?.message || 'Failed to save changes.'
      )
    } finally {
      setLoading(false)
    }
  }

  return {
    staff,
    editableStaff,
    isEditing,
    loading,
    errorMessage,

    handleSearch,
    handleEdit,
    handleChange,
    handleSave,
    handleCancel,
    handleDeleteProfile,
    handleRemoveProject,

    searchType,
    setSearchType,
    searchValue,
    setSearchValue
  }
}
