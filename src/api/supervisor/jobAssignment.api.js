import api from '../../config/api.config'

// ---------- Verify Project & Labour ----------
export const verifyProjectAndLabourSupApi = async payload => {
  const response = await api.post(
    '/supervisor/jobs/verify-assignment',
    payload
  )
  return response.data
}

// ---------- Assign Job To Labour ----------
export const assignJobToLabourSupApi = async payload => {
  const response = await api.post(
    '/supervisor/jobs/assign-labour',
    payload
  )
  return response.data.success === true
}
