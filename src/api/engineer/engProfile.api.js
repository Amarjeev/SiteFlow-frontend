import api from '../../config/api.config'

export const fetchEngProfileApi = async () => {
  const response = await api.get('/engineer/fetch-profile')
  return response.data
}

export const editEngProfileApi = async payload => {
  const response = await api.put('/engineer/update-profile', payload)
  return response.data
}

export const updateEngPwdApi = async payload => {
  const response = await api.put('/engineer/update-password', payload)
  return response.data.success === true
}


export const logoutEngPwdApi = async () => {
  const response = await api.post('/engineer/logout')
  return response.data.success === true
}
