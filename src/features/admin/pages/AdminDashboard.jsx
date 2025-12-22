import React from 'react'
import AdminNavbar from '../../../layouts/admin/AdminNavbar'
import CreateProjectForm from '../components/CreateProjectForm'
import CreateProjectPage from './CreateProjectPage'
import ProjectCard from '../components/ProjectCard'
import ProjectsPage from './ProjectsPage'
import AddStaffProfile from '../components/AddStaffProfile'
import AssigneProjects from '../components/AssigneProjects'
import StaffProfileEdit from '../components/StaffProfileEdit'
import ProjectEdit from '../components/ProjectEdit'
import LaboursProfile from '../components/LaboursProfile'

function AdminDashboard() {
  return (
    <div>
      <AdminNavbar/>
      {/* <CreateProjectPage/> */}
     {/* <ProjectsPage/> */}
     {/* <AddStaffProfile/> */}
     {/* <AssigneProjects/> */}
     {/* <StaffProfileEdit/> */}
     {/* <ProjectEdit/> */}
     <LaboursProfile/>
    </div>
  )
}

export default AdminDashboard
