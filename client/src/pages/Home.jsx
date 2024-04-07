
import HeaderHome from "../components/layout/HeaderHome";
import ProjectTable from "../components/layout/ProjectTable";
import { IoAddCircleSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate=useNavigate()
  const handleCreateProject=()=>{
    navigate('/calculationDataForm')
  }
  return (
    <div className="bg-sky-200 h-screen w-screen relative z-10">
      <div className="header">
        <HeaderHome />
      </div>
      <div className="table m-auto">
        <ProjectTable />
      </div>
      <div className="create-project absolute right-5 bottom-5 z-50">
        <button className="flex items-center py-2 px-6 bg-red-400 text-white font-semibold hover:bg-green-400 shadow-xl rounded-lg transition-shadow ease-in-out duration-300 " onClick={handleCreateProject}>
          <span>Create New Project</span>
          <IoAddCircleSharp className="ml-2" />
        </button>
      </div>
      <div>
        
      </div>
    </div>
  );
}
