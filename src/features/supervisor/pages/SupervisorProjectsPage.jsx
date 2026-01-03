import ProjectDetailsSup from "../components/ProjectDetailsSup";
import ProjectListSup from "../components/ProjectListSup";
import { useEngineerProjects } from "../../engineer/hooks/useFetchProjectsEng";
import SupervisorNavbar from "../../../layouts/navbar/SupervisorNavbar";

function SupervisorProjectsPage() {
  const projectState = useEngineerProjects();
  return (
    <div className="min-h-screen bg-black">
      <SupervisorNavbar />

      <div className="flex flex-col lg:flex-row gap-4 p-4">
        {/* LEFT */}
        <ProjectListSup projectState={projectState} />

        {/* RIGHT */}
        <ProjectDetailsSup projectState={projectState} />
      </div>
    </div>
  );
}

export default SupervisorProjectsPage;
