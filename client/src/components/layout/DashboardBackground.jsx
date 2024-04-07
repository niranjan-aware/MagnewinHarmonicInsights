import React from 'react';
import analysisImage2 from '../../assets/analysis_2.png';
import analysisImage from '../../assets/anlysis_Img.png';
import designer from '../../assets/Designer.jpeg';
import designer1 from '../../assets/Designer (1).jpeg';
import electricalIndustry from '../../assets/electrical-industry-upscaled.jpg';
import equipments from '../../assets/equipments.png';
import controls from '../../assets/controls.jpg';
import graphs from '../../assets/graphs.png';
import results from '../../assets/results.png';
import switches from '../../assets/switches.jpg';
import f1 from '../../assets/f1.jpg';
import f2 from '../../assets/f2.jpg';

export default function DashboardBackground() {
  return (
    <div className="grid grid-cols-3 gap-8 bg-sky-200 h-screen overflow-hidden p-10" style={{ width: '50%', float: 'left' }}>
      <div className="relative">
        <img src={analysisImage} alt="" className="w-full h-auto rounded-xl shadow-lg shadow-stone-900 hover:scale-110 transition-transform duration-300" />
      </div>
      <div className="relative">
        <img src={analysisImage2} alt="" className="w-full h-auto rounded-xl shadow-lg shadow-stone-900 hover:scale-110 transition-transform duration-300" />
      </div>
      <div className="relative">
        <img src={designer} alt="" className="w-full h-auto rounded-xl shadow-lg shadow-stone-900 hover:scale-110 transition-transform duration-300" />
      </div>
      <div className="relative">
        <img src={designer1} alt="" className="w-full h-auto rounded-xl shadow-lg shadow-stone-900 hover:scale-110 transition-transform duration-300" />
      </div>
      <div className="relative">
        <img src={equipments} alt="" className="w-full h-auto rounded-xl shadow-lg shadow-stone-900 hover:scale-110 transition-transform duration-300" />
      </div>
      <div className="relative">
        <img src={controls} alt="" className="w-full h-auto rounded-xl shadow-lg shadow-stone-900 hover:scale-110 transition-transform duration-300" />
      </div>
      <div className="relative">
        <img src={graphs} alt="" className="w-full h-auto rounded-xl shadow-lg shadow-stone-900 hover:scale-110 transition-transform duration-300" />
      </div>
      {/* <div className="relative">
        <img src={results} alt="" className="w-full h-auto rounded-xl shadow-lg shadow-stone-900 hover:scale-110 transition-transform duration-300" />
      </div> */}
      {/* <div className="relative">
        <img src={switches} alt="" className="w-full h-auto rounded-xl shadow-lg shadow-stone-900 hover:scale-110 transition-transform duration-300" />
      </div> */}
      <div className="relative">
        <img src={f1} alt="" className="w-full h-auto rounded-xl shadow-lg shadow-stone-900 hover:scale-110 transition-transform duration-300" />
      </div>
      <div className="relative">
        <img src={f2} alt="" className="w-full h-auto rounded-xl shadow-lg shadow-stone-900 hover:scale-110 transition-transform duration-300" />
      </div>
    </div>
  );
}
