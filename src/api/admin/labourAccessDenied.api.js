import api from '../../config/api.config'

export const getLabourProfileApi = async payload => {
  const response = await api.get('/admin/labours/fetch-profile', {
    params: payload
  })

  return response.data.labour
}

export const restrictLabourAccessApi = async payload => {
  const response = await api.post('/admin/labours/access-status', payload)

  return response.data
}
