import React from "react";

export default function IntroAbout() {
  return (
    <div className="w-full flex flex-row h-[600px] items-center bg-sky-100">
      <div className="title w-1/2 h-[600px] flex flex-col ml-10 justify-center relative space-y-4">
        <h2 className="ml-2 text-4xl font-bold text-slate-400">Welcome to </h2>
        <h1
          className="text-6xl font-bold heading-title -ml-32 text-slate-500"
          style={{
            fontFamily: "Arial, Helvetica, sans-serif",
          }}
        >
          MagnewinAnalytica
        </h1>
      </div>
      <div className="content w-1/2 bg-white h-[500px] shadow-xl m-10 shadow-stone-400 hover:scale-105 rounded-xl transition-transform duration-300">
        <div className="info p-5">
          <h1 className="text-2xl font-bold m-5 text-slate-400">
            What is MagnewinHarmonicInsights ?
          </h1>
          <ul className="pl-10 text-slate-800 text-lg list-disc space-y-2">
            <li>Harmonics, stemming from non-linear loads, pose significant challenges in industries, impacting equipment safety and power quality.</li>
            <li>State governments are considering penalties for non-compliance, highlighting the need for effective mitigation strategies.</li>
            <li>Our project addresses this by developing software to automate the calculation and customization of harmonic filters, streamlining the mitigation process.</li>
            <li>Our software offers various customization options, allowing users to tailor filters to specific harmonic frequencies prevalent in their systems.</li>
            <li>Additionally, it provides comprehensive analysis graphs, aiding in the visualization of harmonic distortion and filter effectiveness.</li>
            <li>By simplifying and enhancing the filter design process, our software aims to revolutionize harmonic mitigation in industries, ensuring compliance with regulations and optimizing power quality.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
