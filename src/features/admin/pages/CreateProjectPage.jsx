import CreateProjectForm from "../components/CreateProjectForm";
import ProjectNotification from "../components/ProjectNotification";
import AdminNavbar from "../../../layouts/navbar/AdminNavbar";

function CreateProjectPage() {
  return (
    <div>
      <AdminNavbar/>
      <CreateProjectForm />
    </div>
  );
}

export default CreateProjectPage;
