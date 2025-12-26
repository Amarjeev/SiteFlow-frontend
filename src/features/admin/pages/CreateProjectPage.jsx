import CreateProjectForm from "../components/CreateProjectForm";
import ProjectNotification from "../components/ProjectNotification";
import AdminNavbar from "../../../layouts/admin/AdminNavbar";

function CreateProjectPage() {
  return (
    <div>
      <AdminNavbar/>
      <CreateProjectForm />
    </div>
  );
}

export default CreateProjectPage;
