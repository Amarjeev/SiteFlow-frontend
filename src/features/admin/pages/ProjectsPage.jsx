import React from "react";
import ProjectCard from "../components/ProjectCard";
import ProjectSearchBar from "../components/ProjectSearchBar";

function ProjectsPage() {
  return (
    <div>
      <ProjectSearchBar />
      <ProjectCard />
    </div>
  );
}

export default ProjectsPage;
