import api from '../../config/api.config'

export const createStaffProfileApi = async payload => {
  const response = await api.post('/admin/staff/create-profile', payload)

  return response.data.success === true
}
