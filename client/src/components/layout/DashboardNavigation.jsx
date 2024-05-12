import React from "react";
import { FaArrowCircleRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function DashboardNavigation() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
  };

  const handleAbout = () => {
    navigate("/about");
  };

  return (
    <div className="w-1/2 h-screen float-right bg-sky-200 relative">
      <div className="upper-nav h-16 flex relative items-center">
        <div className="nav-list absolute right-0 flex flex-row space-x-5 m-5">
          <div className="about">
            <button
              className="px-4 py-2 bg-fuchsia-300 rounded-lg text-white font-semibold text-xl hover:shadow-md hover:bg-white hover:text-fuchsia-300 transition ease-in-out duration-300 "
              onClick={handleAbout}
            >
              About
            </button>
          </div>
          <div className="login">
            <button
              className="px-4 py-2 bg-fuchsia-300 rounded-lg text-white font-semibold text-xl hover:shadow-md hover:bg-white hover:text-fuchsia-300 transition ease-in-out duration-300"
              onClick={handleLogin}
            >
              Login
            </button>
          </div>
        </div>
      </div>
      <div className="content absolute top-1/2 right-24 transform -translate-y-1/2 text-center space-y-6">
        <div>
          <h1
            className="text-5xl font-bold heading-title"
            style={{
              fontFamily: "Arial, Helvetica, sans-serif",
            }}
          >
            Magnewin Harmonic Insights
          </h1>
        </div>
        <div>
          <h2 className="text-3xl font-semibold">Magnewin Analytica</h2>
        </div>
        <div>
          <p className="text-lg font-medium">
            Bridging Harmony in the Filter Industry. <br />
            Where cutting-edge calculations meet insightful graphs for
            <br /> precision in harmonic filter design
          </p>
        </div>
        <div className="absolute left-40">
          <button
            className="flex items-center ml-28 px-4 py-2 bg-fuchsia-300 rounded-lg text-white font-semibold text-xl hover:shadow-md hover:bg-white hover:text-fuchsia-300 transition ease-in-out duration-300 "
            onClick={handleLogin}
          >
            Explore <FaArrowCircleRight className="ml-2" />
          </button>
        </div>
      </div>
      <div className="absolute bottom-28 ml-20"> 
      <p className="text-sm font-semibold text-slate-500">*This portal was designed by the Electrical Department of Walchand College of Engineering, Sangli, <br /> <span className="ml-2">   </span> in collaboration with Magnewin Industries</p>
      </div>
    </div>
  );
}
