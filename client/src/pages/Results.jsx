import axios from "axios";
import React, { useEffect, useState } from "react";
import THDBarGraph from '../components/layout/THDBarGraph'
import { useSelector, useDispatch } from 'react-redux'
import { setProjectId  } from '../redux/slice/projectIdSlice';
import { RiArrowGoBackFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

export default function Results() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/home");
  };
  const id = useSelector((state) => state.projectId.value);

  // console.log("fhigh",id);
  const [data, setData] = useState(null);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3001/api/data/fetchProjectData",
        {
          params: {
            id: id,
          },
        }
      );

      setData(response.data[0]);
      // console.log(id);
      // console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(data);

  const frequency = data?.frequency;
  const voltage = data?.voltage;
  const cbRating = data?.cbRating;
  const scRating = data?.scRating;
  const power = data?.nlLoad;
  const qf = data?.qf;
  const pf = data?.pf;

  const inputList = data?.inputList;

  console.log(inputList);

  const harmonicorder = inputList?.map((item) => item.harmonicorder) || [];
  const harmonicpercentage =
    inputList?.map((item) => item.harmonicpercentage) || [];

  const tunningFreq = harmonicorder[0];
  const c = voltage * voltage;
  const capReactance = c / cbRating;

  //   setTimeout(() => {
  //     console.log(c,cbRating,capReactance);
  //   }, 5000);

  const indReactance = capReactance / (tunningFreq * tunningFreq);

  const pi = Math.PI;

  const capacitance = (1 / (2 * pi * capReactance * frequency)) * 1000000;

  const inductance = (indReactance / (2 * pi * frequency)) * 1000;

  let effReactance = capReactance - indReactance;
  if (effReactance < 0) {
    effReactance = -1 * effReactance;
  }

  const root3 = Math.sqrt(3);
  const phaseVoltage = (voltage * 1000) / root3;

  const fundamentalCurrent = phaseVoltage / effReactance;

  const nominalCurrent = phaseVoltage / capReactance;

  const fundmentalVoltage = (fundamentalCurrent * capReactance) / 1000;

  const filterCapRating = fundmentalVoltage * fundamentalCurrent;

  const filterLoadReactance = (voltage * voltage) / scRating;

  const filterLoadInductance =
    (filterLoadReactance / (2 * pi * frequency)) * 1000;

  const resonanceFrequecy =
    ((1 /
      (2 *
        pi *
        Math.sqrt((filterLoadInductance + inductance) * (capacitance / 10)))) *
      10000) /
    50;

  const IL1 = (power * 1000) / (root3 * voltage * pf);

  const loadCurrents = [IL1];

  for (let i = 0; i < harmonicpercentage.length; i++) {
    loadCurrents.push((harmonicpercentage[i] / 100) * IL1);
  }

  const ZF1 = effReactance;

  const filterImpedances = [ZF1];

  const resistance = capReactance / tunningFreq / qf;

  for (let i = 0; i < harmonicorder.length; i++) {
    let zf =
      -1 * (capReactance / harmonicorder[i]) + indReactance * harmonicorder[i];
    if (zf === 0) {
      zf = resistance;
    }
    filterImpedances.push(zf);

    // console.log(zf);
  }

  const loadImpedances = [filterLoadReactance];

  for (let i = 0; i < harmonicorder.length; i++) {
    let zs = filterLoadReactance * harmonicorder[i];
    loadImpedances.push(zs);
  }

  const filterCurrents = [fundamentalCurrent];

  for (let i = 1; i < loadImpedances.length; i++) {
    let IF =
      (loadImpedances[i] / (loadImpedances[i] + filterImpedances[i])) *
      loadCurrents[i];
    filterCurrents.push(IF);
    // console.log(loadImpedances[i],"  ",filterImpedances[i],"  ",loadCurrents[i],"==>");
  }

  const filterLoadCurrents = [fundamentalCurrent];

  for (let i = 1; i < loadImpedances.length; i++) {
    let IS =
      (filterImpedances[i] / (loadImpedances[i] + filterImpedances[i])) *
      loadCurrents[i];
    filterLoadCurrents.push(IS);
    // console.log(loadImpedances[i],"  ",filterImpedances[i],"  ",loadCurrents[i],"==>");
  }

  let filterCurrentRMS = 0;
  for (let i = 0; i < filterCurrents.length; i++) {
    filterCurrentRMS += filterCurrents[i] * filterCurrents[i];
  }
  filterCurrentRMS = Math.sqrt(filterCurrentRMS);

  const filterCapcitorVoltages = [fundmentalVoltage];

  for (let i = 1; i < filterCurrents.length; i++) {
    let vc = (filterCurrents[i] * (capReactance / harmonicorder[i - 1])) / 1000;
    filterCapcitorVoltages.push(vc);
    // console.log(filterCurrents[i],"  ",capReactance," ",harmonicorder[i-1],"===>");
  }

  let filterCapcitorPeakVoltage = 0;
  for (let i = 0; i < filterCapcitorVoltages.length; i++) {
    filterCapcitorPeakVoltage += filterCapcitorVoltages[i];
  }

  let filterCapacitoRMSVoltage = 0;
  for (let i = 0; i < filterCapcitorVoltages.length; i++) {
    filterCapacitoRMSVoltage +=
      filterCapcitorVoltages[i] * filterCapcitorVoltages[i];
  }
  filterCapacitoRMSVoltage = Math.sqrt(filterCapacitoRMSVoltage);

  const percentageFilterCapacitorVoltageRMS =
    (filterCapacitoRMSVoltage / fundmentalVoltage) * 100;

  const percentageFilterCurrentRMS = (filterCurrentRMS / nominalCurrent) * 100;

    // console.log(filterCurrentRMS,nominalCurrent,percentageFilterCurrentRMS);

  let beforCompensationTHD = 0;

  for (let i = 1; i < loadCurrents.length; i++) {
    beforCompensationTHD += loadCurrents[i] * loadCurrents[i];
  }
  // console.log(beforCompensationTHD);
  beforCompensationTHD = Math.sqrt(beforCompensationTHD);
  // console.log(beforCompensationTHD);
  beforCompensationTHD = (beforCompensationTHD / loadCurrents[0]) * 100;
  // console.log("before-final", beforCompensationTHD);

  let afterCompensationTHD = 0;

  for (let i = 1; i < filterLoadCurrents.length; i++) {
    afterCompensationTHD += filterLoadCurrents[i] * filterLoadCurrents[i];
  }
  afterCompensationTHD = Math.sqrt(afterCompensationTHD);
  afterCompensationTHD = (afterCompensationTHD / loadCurrents[0]) * 100;
  // console.log(beforCompensationTHD);

  // console.log("after-final",afterCompensationTHD);
  const calculatedData = [
    { name: "Capacitance Reactance", value: capReactance },
    { name: "Capacitance", value: capacitance },
    { name: "Inductance", value: inductance },
    { name: "Effective Reactance", value: effReactance },
    { name: "Root 3", value: root3 },
    { name: "Phase Voltage", value: phaseVoltage / 1000 },
    { name: "Fundamental Current", value: fundamentalCurrent },
    { name: "Nominal Current", value: nominalCurrent },
    { name: "Fundamental Voltage", value: fundmentalVoltage },
    { name: "Filter Capacitor Rating", value: filterCapRating },
    { name: "Filter Load Reactance", value: filterLoadReactance },
    { name: "Filter Load Inductance", value: filterLoadInductance },
    { name: "Resonance Frequency", value: resonanceFrequecy },
    { name: "Before Compensation THD", value: beforCompensationTHD },
    { name: "After Compensation THD", value: afterCompensationTHD },
    { name: "Percentage Filter Capacitor Voltage RMS", value: percentageFilterCapacitorVoltageRMS },
    { name: "Percentage Filter Current RMS", value: percentageFilterCurrentRMS },
  ];
  const newData=[
    {_id:"Before Compensation THD",count:beforCompensationTHD},
    {_id:"After Compensation THD",count:afterCompensationTHD}
  ]
  return (
    <div className="flex flex-col justify-center items-center space-y-3 bg-slate-200 relative">
    <div className="flex flex-row space-x-2 mt-5  top-1 right-5 fixed z-50">
    <button onClick={fetchData} className="px-4 py-2 bg-fuchsia-300 rounded-lg text-white font-semibold text-xl hover:shadow-md hover:bg-white hover:text-fuchsia-300 transition ease-in-out duration-300 ">
      Refresh
    </button>
    <button className="flex items-center bg-fuchsia-300  py-2 rounded-xl px-4  font-semibold text-lg text-white hover:text-fuchsia-300 hover:bg-white transition ease-in-out duration-300" onClick={handleBack}>
          Back
          <span className="ml-2"><RiArrowGoBackFill /></span>
        </button>
    </div>
    <div className="w-full ">
     <div className="p-5 bg-slate-200 rounded-xl mt-5 ml-10 fixed z-50 shadow-2xl">
     <h2 className="text-xl text-slate-500  font-bold  p-auto">Calculated Data</h2>
     </div>
      <div className="overflow-x-auto w-2/3  -mt-10 ml-96 mb-20">
        <table className="pagination-table">
          <thead>
            <tr className="bg-blue-500 text-white">
              <th className="border border-blue-500 px-4 py-2">Name</th>
              <th className="border border-blue-500 px-4 py-2">Value</th>
            </tr>
          </thead>
          <tbody>
            {calculatedData.map((item, index) => (
              <tr key={index} className={index % 2 === 0 ? 'bg-gray-200' : 'bg-gray-100'}>
                <td className="border border-blue-500 px-4 py-2">{item.name}</td>
                <td className="border border-blue-500 px-4 py-2">{item.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
      <div className="analysis-graphs bg-slate-100 w-3/4 flex justify-center items-center p-20 shadow-2xl rounded-xl">
          {data && <THDBarGraph heading="THD Analysis" data={newData} />}
        </div>
  </div>
  
  );
}
