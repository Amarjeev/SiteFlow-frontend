import { fetchEngProfileApi } from '../../../api/engineer/engProfile.api'
import { useEffect, useState } from 'react'

export const useFetchEngProfile = () => {
  const [engineerProfile, setEngineerProfile] = useState(null)
  const [fetchProfileError, setFetchProfileError] = useState(null)
  const [fetchLoadingProfile, setFetchLoadingProfile] = useState(false)

  const handleFetchProfile = async () => {
    setFetchLoadingProfile(true)
    setFetchProfileError(null)

    try {
      const response = await fetchEngProfileApi()

      setEngineerProfile(response.profile)
    } catch (error) {
      setFetchProfileError(
        error?.response?.data?.message || 'Something went wrong'
      )
    } finally {
      setFetchLoadingProfile(false)
    }
  }

  useEffect(() => {
    handleFetchProfile()
  }, [])

  return {
    engineerProfile,
    fetchLoadingProfile,
    fetchProfileError,
    handleFetchProfile
  }
}
