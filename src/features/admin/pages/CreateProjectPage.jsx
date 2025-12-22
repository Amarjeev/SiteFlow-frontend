import React from "react";
import CreateProjectForm from "../components/CreateProjectForm";
import ProjectNotification from "../components/ProjectNotification";

function CreateProjectPage() {
  return (
    <div>
      <ProjectNotification />
      <CreateProjectForm />
    </div>
  );
}

export default CreateProjectPage;
