import StaffNavbar from "../../../layouts/navbar/EngineerNavbar";
import ProjectList from "../components/ProjectList";
import ProjectDetails from "../components/ProjectDetails";
import { useEngineerProjects } from "../hooks/useFetchProjectsEng";

function MyProjects() {
  const projectState = useEngineerProjects();

  return (
    <div className="min-h-screen bg-gray-100">
      <StaffNavbar />

      <div className="flex flex-col lg:flex-row gap-4 p-4">
        {/* LEFT */}
        <ProjectList projectState={projectState} />

        {/* RIGHT */}
        <ProjectDetails projectState={projectState} />
      </div>
    </div>
  );
}

export default MyProjects;
