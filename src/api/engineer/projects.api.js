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

export const fetchProjectReport = async (id, date) => {
  const response = await api.get(
    `/engineer/project-reports?id=${id}&date=${date}`
  )
  return response.data
}

export const updateDailyProjectProgressEngApi = async payload => {
  const response = await api.post('/engineer/projects/daily-progress', payload)

  return response.data.success === true
}

export const editProjectReportEngApi = async payload => {
  const response = await api.post('/engineer/project-reports/edit', payload)

  return response.data.success === true
}

export const delProjectReportEngApi = async payload => {
  const response = await api.post('/engineer/project-reports/delete', payload)

  return response.data.success === true
}
