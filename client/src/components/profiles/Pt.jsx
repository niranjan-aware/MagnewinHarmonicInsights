import React from 'react'
import pt from "../../assets/pratham.jpeg";
import "./pt.css";

export default function Pt() {
  return (
    <div className="">
  
   <div className="Pratham">
     <div className="profile-card ">
       <div className="profile-card-inner">
         <div className="pt-profile-card-front">
         <div className="title ml-5  w-full h-full relative">
            <div className="absolute  -bottom-6">
            <h3 className="text-2xl  font-bold text-slate-900 ">
               Mr.Prathamesh Shinde
             </h3>
             <span className="job text-base font-semibold text-slate-900">
               Student at Walchand College of Engineering, Sangli
             </span>
            </div>
           </div>
         </div>
         <div className="profile-card-back">
           <img src={pt} alt="profile-photo" />
           <h3 className="text-2xl font-bold text-slate-700 ">
           Mr.Prathamesh Shinde
           </h3>
           <span className="job text-base font-semibold text-slate-600">
           Student at Walchand College of Engineering, Sangli
           </span>
           <div className="areas-interest text-base  space-x-3">
             <h1 className="text-slate-50 font-semibold">
               Contribution In Project
             </h1>
             <h4 className="text-slate-500">Fostered industry relationships</h4>
             <h4 className=" text-slate-500">Facilitated communication to align project goals with industry needs</h4>
           </div>
           {/* <div className="areas-research space-x-3">
             <h1 className="text-slate-50 font-semibold">
               Contact
             </h1>
             <h4 className="text-slate-500">Email:niroba.aware.26@gmail.com</h4>
             <h4 className="text-slate-500">Contact:9588699615</h4>
           </div> */}
         </div>
       </div>
     </div>
   </div>
 </div>
  )
}
