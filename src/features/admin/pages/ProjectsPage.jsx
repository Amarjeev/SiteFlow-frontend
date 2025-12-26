import React from "react";
import ProjectCard from "../components/ProjectCard";
import ProjectSearchBar from "../components/ProjectSearchBar";
import AdminNavbar from "../../../layouts/admin/AdminNavbar";
import { useFetchProjects } from "../hooks/useFetchProjects";

function ProjectsPage() {
  const {
    projectId,
    setProjectId,
    projectStatus,
    setProjectStatus,
    startDate,
    setStartDate,
    projects,
    loadMore,
    hasMore,
    loading,
    handleClear,
  } = useFetchProjects();

  return (
    <div>
      <AdminNavbar />

      <ProjectSearchBar
        projectId={projectId}
        setProjectId={setProjectId}
        projectStatus={projectStatus}
        setProjectStatus={setProjectStatus}
        startDate={startDate}
        setStartDate={setStartDate}
        handleClear={handleClear}
      />

      <ProjectCard
        projects={projects}
        loadMore={loadMore}
        hasMore={hasMore}
        loading={loading}
      />
    </div>
  );
}

export default ProjectsPage;
