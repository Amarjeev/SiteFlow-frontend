import api from '../../config/api.config'

export const createdLabourProfileSupApi = async payload => {
  const response = await api.post('/supervisor/labours/create-profile', payload)
  return response.data
}

export const getLabourProfileSupApi = async labourId => {
  const response = await api.get(
    `/supervisor/labours/fetch-profile/${labourId}`
  )
  return response.data
}

export const updateLabourProfileSupApi = async payload => {
  const response = await api.post('/supervisor/labours/update-profile', payload)
  return response.data
}

export const delLabourProfileSupApi = async payload => {
  const response = await api.post('/supervisor/labours/delete-profile', {
    labourId: payload
  })
  return response.data.success === true
}

export const verifyProjectAndLabourSupApi = async payload => {
  const response = await api.post('/supervisor/jobs/verify-assignment', payload)
  return response.data
}

export const assigneJobToLabourSupApi = async payload => {
  const response = await api.post('/supervisor/jobs/assign-labour', payload)
    return response.data.success === true
}
