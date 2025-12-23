import { useEffect, useState } from 'react'

export const useNavbar = () => {
  const [userRole, setUserRole] = useState(
    () => sessionStorage.getItem('userRole') || ''
  )

  useEffect(() => {
    sessionStorage.setItem('userRole', userRole)
  }, [userRole])

  useEffect(() => {
    const roleExist = sessionStorage.getItem('userRole')
    if (!roleExist) {
      alert('Please select role')
      return
    }
  }, [])

  return { userRole, setUserRole }
}
