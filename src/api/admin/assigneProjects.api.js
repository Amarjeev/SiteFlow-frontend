import api from '../../config/api.config'

export const assignProjectToStaffsApi = async payload => {
  const response = await api.post('/admin/assign-projects/staff', payload)

  return response.data.success === true
}


export const ensureStaffAndProjectExistApi = async payload => {
  const response = await api.post(
    '/admin/assign-projects/validate',
    payload
  )

  return response.data
}