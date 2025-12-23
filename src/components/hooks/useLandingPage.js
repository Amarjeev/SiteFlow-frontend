import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const useLandingPage = () => {
  const navigate = useNavigate()
  const [role, setRole] = useState('')

  const handleContinue = () => {
    if (!role) {
      alert('Please select your role')
      return
    }

    sessionStorage.setItem('userRole', role)

    navigate('/login')
  }

  return { handleContinue, setRole, role }
}
