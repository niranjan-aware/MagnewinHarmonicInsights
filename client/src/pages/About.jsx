import React from "react";
import GuideProfiles from "../components/layout/GuideProfileCards";
import IntroAbout from "../components/layout/IntroAbout";
import TeamProfileCards from '../components/layout/TeamProfileCards'
import { RiArrowGoBackFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

export default function About() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/");
  };
  
  return (
    <div className=" bg-sky-100">
      <div className="nav w-full h-16 bg-slate-200 relative flex items-center shadow-lg ">
        <h1 className="text-3xl absolute left-20 font-bold text-slate-600">MagnewinharmonicInsights</h1>
        <button className="flex items-center bg-fuchsia-300 absolute right-10  py-2 rounded-xl px-4  font-semibold text-lg text-white hover:text-fuchsia-300 hover:bg-white transition ease-in-out duration-300" onClick={handleBack}>
          Back
          <span className="ml-2"><RiArrowGoBackFill /></span>
        </button>
      </div>
      
     <div>
     <IntroAbout />
     </div>
      
      <div className="guide-profiles w-full">
      <div className="  flex items-center ">
          <h1 className="text-3xl shadow-2xl ml-10 font-bold text-slate-600">Guidance</h1>
        </div>
        <GuideProfiles />
      </div>
      
      <div className="team-profiles">
        <div className="w-full ">
          <h1 className="text-3xl ml-10 font-bold text-slate-600">Teams Members</h1>
        </div>
        <TeamProfileCards/>
      </div>
    </div>
  );
}
