import api from '../../config/api.config'

export const fetchProjectsEngApi = async payload => {
  const response = await api.get('/engineer/projects', {
    params: payload
  })

  return response.data
}

export const fetchProjectWithIdEngApi = async id => {
  const response = await api.get(`/engineer/projects/${id}`)
  return response.data
}

export const updateDailyProjectProgressEngApi = async payload => {
  const response = await api.post('/engineer/projects/daily-progress', payload)

  return response.data.success === true
}
