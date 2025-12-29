import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export const useAdminNavLogic = () => {
  const { pathname } = useLocation()

  const [adminName, setAdminName] = useState('')
  const [adminEmail, setAdminEmail] = useState('')
  const [menuOpen, setMenuOpen] = useState(false)



  useEffect(() => {
    setAdminEmail(sessionStorage.getItem('adminEmail') || 'N/A')
    setAdminName(sessionStorage.getItem('adminName') || 'N/A')
  }, [])

  const navLinks = [
    ['Projects', '/admin/projects', '📁'],
    ['Create Project', '/admin/create-project', '➕'],
    ['Add Staff', '/admin/create/staff-profile', '👤'],
    ['Project Assignment', '/admin/projects/assign', '🧩'],
    ['Staff Profiles', '/admin/staff/profile/edit', '🗂️'],
    ['Labour Profiles', '/admin/labour/profile', '🧑']
  ]

  const linkStyle = isActive =>
    `
      relative flex items-center gap-2 px-3 py-1.5 rounded-full text-sm
      transition-all duration-200
      ${
        isActive
          ? 'text-red-600 bg-red-50'
          : 'text-gray-700 hover:text-red-600 hover:bg-red-50'
      }
      hover:scale-[1.05]
    `

  return {
    adminName,
    adminEmail,
    menuOpen,
    setMenuOpen,
    pathname,
    navLinks,
    linkStyle,
  }
}
