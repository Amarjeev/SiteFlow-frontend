import api from '../../config/api.config'

// ---------- Fetch Assign Job for Labour ----------
export const fetchAssignedJobsApi = async params => {
  const response = await api.get('/labour/assigned-jobs', { params })
  return response.data
}
