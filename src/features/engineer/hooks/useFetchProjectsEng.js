import { useEffect, useState } from 'react'
import {
  fetchProjectsEngApi,
  fetchProjectWithIdEngApi
} from '../../../api/engineer/projects.api'
import { showError } from '../../../utils/toast'
import { useCallback } from 'react'

export const useEngineerProjects = () => {
  const [searchProjectId, setSearchProjectId] = useState('')
  const [statusFilter, setStatusFilter] = useState(() => {
    return sessionStorage.getItem('statusFilter') || 'ongoing'
  })

  const [projects, setProjects] = useState([])
  const [listError, setListError] = useState(null)
  const [detailsError, setDetailsError] = useState(null)

  const [listLoading, setListLoading] = useState(false)
  const [detailsLoading, setDetailsLoading] = useState(false)

  const [activeProjectId, setActiveProjectId] = useState(() => {
    return sessionStorage.getItem('activeProjectId') || ''
  })
  const [selectedProjectDetails, setSelectedProjectDetails] = useState(null)

  const fetchProjects = useCallback(async () => {
    const payload = {
      projectId: searchProjectId.trim(),
      projectStatus: statusFilter
    }

    try {
      setListLoading(true)
      setListError(null)

      const response = await fetchProjectsEngApi(payload)
      setProjects(response?.projects || [])
    } catch (error) {
      setListError(error?.response?.data?.message || 'Failed to fetch projects')
    } finally {
      setListLoading(false)
    }
  }, [searchProjectId, statusFilter])

  const fetchProjectById = useCallback(async () => {
    if (!activeProjectId) {
      showError('Something went wrong. Please try again.')
      return
    }

    try {
      setDetailsLoading(true)
      setDetailsError(null)

      const response = await fetchProjectWithIdEngApi(activeProjectId)
      setSelectedProjectDetails(response?.project)
    } catch (error) {
      setDetailsError(
        error?.response?.data?.message || 'Failed to fetch project details'
      )
    } finally {
      setDetailsLoading(false)
    }
  }, [activeProjectId])

  useEffect(() => {
    if (statusFilter) {
      sessionStorage.setItem('statusFilter', statusFilter)
    }

    if (activeProjectId) {
      sessionStorage.setItem('activeProjectId', activeProjectId)
    }
  }, [statusFilter, activeProjectId])

  useEffect(() => {
    if (!statusFilter) return

    setActiveProjectId('')
    setSelectedProjectDetails(null)
    fetchProjects()
  }, [statusFilter, fetchProjects])

  useEffect(() => {
    if (!activeProjectId) return
    fetchProjectById()
  }, [activeProjectId, fetchProjectById])

  return {
    searchProjectId,
    setSearchProjectId,
    statusFilter,
    setStatusFilter,
    projects,
    fetchProjects,
    activeProjectId,
    setActiveProjectId,
    selectedProjectDetails,
    listError,
    detailsError,
    listLoading,
    detailsLoading
  }
}
