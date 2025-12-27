import api from '../../config/api.config'

export const createProjectApi = async payload => {
  const response = await api.post('/admin/project/create-projects', payload)

  return response.data.success === true
}

export const fetchProjectApi = async payload => {
  const response = await api.post('/admin/project/fetch-projects', payload)

  return response.data
}

export const fetchProjectbyIdApi = async projectId => {
  const response = await api.post(`/admin/project/fetch-project/${projectId}`)

  return response.data
}

export const updateProjectApi = async payload => {
  const response = await api.post('/admin/project/update', payload)

  return response.data.success === true
}

export const deleteProjectApi = async projectId => {
  const response = await api.post(`/admin/project/${projectId}/delete`)

  return response.data.success === true
}
