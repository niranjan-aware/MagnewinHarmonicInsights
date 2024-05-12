import React from "react";
import vpm from "../../assets/vpm.jpg";
import "./vpprofile.css";

export default function VPprofile() {
  return (
    <div className="">
     
      <div className="vpmohale">
        <div className="profile-card ">
          <div className="profile-card-inner">
            <div className="vp-profile-card-front  ">
              <div className="title  ">
                <h3 className="text-2xl  font-bold text-slate-900">
                  Dr.Vijay Mohale
                </h3>
                <h4 className="job text-base font-semibold text-slate-600">
                  Ph.D IIT Roorkee
                </h4>
                <h4 className="job text-base font-semibold text-slate-600">
                  Senior Member IEEE
                </h4>
               
              </div>
            </div>
            <div className="profile-card-back">
              <img src={vpm} alt="profile-photo" />
              <h3 className="text-2xl font-bold text-slate-700 ">
                Dr.Vijay Mohale
              </h3>
              <span className="job text-base font-semibold text-slate-600">
                  Assistant Professor Department of Electrical Engineering
                  Walchand College of Engineering, (Govt Aided Autonomous
                  Institute) SANGLI - MS
                </span>
                <span className="job text-base font-semibold text-slate-600">
                Cell :+91 9421837331
                </span>
              <div className="areas-interest text-base  space-x-3">
                <h1 className="text-slate-50 font-semibold">
                  Areas of Interets
                </h1>
                <span className="text-slate-500">Power Systems</span>
                <span className=" text-slate-500">Renewable Energy</span>
              </div>
              <div className="areas-research space-x-3">
                <h1 className="text-slate-50 font-semibold">
                  Research Interests
                </h1>
                <span className="text-slate-500">Harmonic Analysis</span>
                <span className="text-slate-500">Smart Grids</span>
                <span className="text-slate-500">Power Quality</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
