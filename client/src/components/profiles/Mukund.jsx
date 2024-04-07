import React from "react";
import mk from "../../assets/mukund.jpeg";
import "./Mukund.css";

export default function Mukund() {
  return (
    <div className="">
      <div className="vpmohale">
        <div className="profile-card ">
          <div className="profile-card-inner">
            <div className="mukund-profile-card-front">
              <div className="title  ">
                <h3 className="text-2xl  font-bold text-slate-900">
                  Mr. Mukund Chippalkatti
                </h3>
                <h4 className="job text-base font-semibold text-slate-300">
                  Executive Director, Magnewin Energy Pvt Ltd. Sangli
                </h4>
              </div>
            </div>
            <div className="profile-card-back">
              <img src={mk} alt="profile-photo" />
              <h3 className="text-2xl font-bold text-slate-700 ">
              Mr. Mukund Chippalkatti
              </h3>
              <h4 className="job text-base font-semibold text-slate-600">
                  Executive Director, Magnewin Energy Pvt Ltd. Sangli
                </h4>
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
