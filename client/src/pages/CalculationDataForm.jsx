import { React, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { RiArrowGoBackFill } from "react-icons/ri";


export default function CalculationDataForm() {
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate("/home");
  };
  const handleBack = () => {
    navigate("/home");
  };
  const [userId, setUserId] = useState(localStorage.getItem("user_id"));

  const [projectTitle, setProjectTitle] = useState(null);
  const handleChangeProjectTitle = (event) => {
    setProjectTitle(event.target.value);
  };

  const [description, setDescription] = useState(null);
  const handleChangeDescription = (event) => {
    setDescription(event.target.value);
  };

  const [problemStatement, setProblemStatement] = useState(null);
  const handleChangeProblemStatement = (event) => {
    setProblemStatement(event.target.value);
  };

  const [proposedSolution, setProposedSolution] = useState(null);
  const handleChangeProposedSolution = (event) => {
    setProposedSolution(event.target.value);
  };

  const [expectedOutcome, setExpectedOutcome] = useState(null);
  const handleChangeExpectedOutcome = (event) => {
    setExpectedOutcome(event.target.value);
  };

  const [frequency, setFrequency] = useState(null);

  const handleChangeFrequency = (event) => {
    setFrequency(event.target.value);
  };

  const [voltage, setVoltage] = useState(null);
  const handleChangeVoltage = (event) => {
    setVoltage(event.target.value);
  };

  const [cbRating, setCbRating] = useState(null);
  const handleChangeCbRating = (event) => {
    setCbRating(event.target.value);
    // console.log(cbRating);
  };

  const [scRating, setScRating] = useState(null);
  const handleChangeScRating = (event) => {
    setScRating(event.target.value);
  };

  const [nlLoad, setNlLoad] = useState(null);
  const handleChangeNlLoad = (event) => {
    setNlLoad(event.target.value);
  };

  const [qf, setQf] = useState(null);
  const handleChangeQf = (event) => {
    setQf(event.target.value);
  };

  const [pf, setPf] = useState(null);
  const handleChangePf = (event) => {
    setPf(event.target.value);
  };

  const [inputList, setInputList] = useState([
    { harmonicorder: "", harmonicpercentage: "" },
  ]);

  const handleAddClick = () => {
    setInputList([...inputList, { harmonicorder: "", harmonicpercentage: "" }]);
  };

  const handleInputChange = (event, index) => {
    const { name, value } = event.target;
    const list = [...inputList];
    list[index][name] = value;
    setInputList(list);
    // console.log(inputList);
  };

  const handleRemoveClick = (index) => {
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
  };

  const handleSubmitData = () => {
    console.log(voltage);
    if (
      userId != null &&
      projectTitle != null &&
      description != null &&
      problemStatement != null &&
      proposedSolution != null &&
      expectedOutcome != null &&
      frequency != null &&
      voltage != null &&
      cbRating != null &&
      scRating != null &&
      nlLoad != null &&
      qf != null &&
      pf != null &&
      inputList != null
    ) {
      axios
        .post("http://localhost:3001/api/data/calculationData", {
          user_id: userId,
          project_title: projectTitle,
          description,
          problem_statement: problemStatement,
          proposed_solution: proposedSolution,
          expected_outcome: expectedOutcome,
          frequency,
          voltage,
          cbRating,
          scRating,
          nlLoad,
          qf,
          pf,
          inputList,
        })
        .then((response) => {
          // Reset all state variables to null
          setProposedSolution(null);
          setProblemStatement(null);
          setProjectTitle(null);
          setDescription(null);
          setExpectedOutcome(null);
          setFrequency(null);
          setVoltage(null);
          setCbRating(null);
          setScRating(null);
          setNlLoad(null);
          setQf(null);
          setPf(null);
          // Set the number of harmonic spectrum to one
          setInputList([{ harmonicorder: "", harmonicpercentage: "" }]);
          handleSubmit();
        })
        .catch((error) => {
          console.error("Error saving new  entry:", error);
          window.alert("Error saving new  entry:😃😃😃 ! ", error);
        });
    } else {
      window.alert("Please fill all the required fields😃😃😃 ! ");
    }
  };

  return (
    <div className="container flex flex-row relative ">
      <div className="z-50 right-5 top-5 fixed">
        <button className=" flex items-center ml-2 px-4 py-2 z-50 bg-fuchsia-300 rounded-lg text-white font-semibold text-xl hover:shadow-md hover:bg-green-400  transition ease-in-out duration-300 " onClick={handleBack}>
          Back
          <span className="ml-2"><RiArrowGoBackFill /></span>
        </button>
      </div>
      <div className="info bg-slate-300 w-2/5 h-screen fixed shadow-2xl border-x-2 border-slate-400">
        <p className="text-3xl font-bold m-5 p-5">
          Instructions to fill the form
        </p>
        <ol className="list-decimal ml-6 p-5">
          <li className="p-5 font-medium text-xl">
            <p>Provide the tunig frequency (as per requirement)</p>
          </li>
          <li className="p-5 font-medium text-xl">
            <p>Line voltage should be in KV</p>
          </li>
          <li className="p-5 font-medium text-xl">
            <p>Capacitor Bank rating should be in MVAR</p>
          </li>
          <li className="p-5 font-medium text-xl">
            <p>Short Circuit rating MVA</p>
          </li>
          <li className="p-5 font-medium text-xl">
            <p>Measure accurate load of system</p>
          </li>
          <li className="p-5 font-medium text-xl">
            <p>
              As per the required condition select the appropriate number of
              harmonic spectrum
            </p>
          </li>
        </ol>
      </div>
      <div className="form w-3/5 h-full  flex flex-col absolute right-0 bg-yellow-50">
        <div className=" bg-yellow-50">
          <form className="w-[500px] h-fit mx-auto grid grid-cols-1 gap-8 mt-20 bg-yellow-50 mb-10">
            <div>
              <label
                htmlFor="email-address-icon"
                className="block mb-2 text-md font-bold text-slate-500"
              >
                UserID
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none"></div>
                <input
                  type="text"
                  id="email-address-icon"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Frequency in HZ"
                  value={userId || ""}
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="email-address-icon"
                className="block mb-2 text-md font-bold text-slate-500"
              >
                Project Title
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none"></div>
                <input
                  type="text"
                  id="email-address-icon"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Frequency in HZ"
                  onChange={handleChangeProjectTitle}
                  value={projectTitle || ""}
                  required={true}
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="email-address-icon"
                className="block mb-2 text-md font-bold text-slate-500"
              >
                Description
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none"></div>
                <input
                  type="text"
                  id="email-address-icon"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Frequency in HZ"
                  onChange={handleChangeDescription}
                  value={description || ""}
                  required={true}
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="email-address-icon"
                className="block mb-2 text-md font-bold text-slate-500"
              >
                Problem Statement
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none"></div>
                <input
                  type="text"
                  id="email-address-icon"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Frequency in HZ"
                  onChange={handleChangeProblemStatement}
                  value={problemStatement || ""}
                  required={true}
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="email-address-icon"
                className="block mb-2 text-md font-bold text-slate-500"
              >
                Proposed Solution
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none"></div>
                <input
                  type="text"
                  id="email-address-icon"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Frequency in HZ"
                  onChange={handleChangeProposedSolution}
                  value={proposedSolution || ""}
                  required={true}
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="email-address-icon"
                className="block mb-2 text-md font-bold text-slate-500"
              >
                Expected Outcome
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none"></div>
                <input
                  type="text"
                  id="email-address-icon"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Frequency in HZ"
                  onChange={handleChangeExpectedOutcome}
                  value={expectedOutcome || ""}
                  required={true}
                />
              </div>
            </div>
          </form>
        </div>
        <div className="bg-yellow-50">
          <p className="text-lg font-bold m-3 text-slate-600">
            Fill the harmonic spectrum as per requirement
          </p>
          <div>
            <form className="w-[600px]">
              {inputList.map((x, i) => {
                return (
                  <div key={i}>
                    <div className="flex flex-row space-x-4 my-2 ml-52 w-[500px]">
                      <div>
                        <input
                          type="text"
                          required={true}
                          name="harmonicorder"
                          placeholder="harmonicorder"
                          onChange={(e) => handleInputChange(e, i)}
                          className="bg-gray-50 border mr-2 mb-2 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        />
                      </div>
                      <div>
                        <input
                          type="text"
                          name="harmonicpercentage"
                          required={true}
                          placeholder="harmonicpercentage"
                          onChange={(e) => handleInputChange(e, i)}
                          className="bg-gray-50 border mr-2 mb-2 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        />
                      </div>
                      {inputList.length !== 1 && (
                        <div>
                          <button
                            className=" px-4 py-2 bg-fuchsia-300 rounded-lg text-white font-semibold text-xl hover:shadow-md hover:bg-red-500  transition ease-in-out duration-300 "
                            onClick={() => handleRemoveClick(i)}
                          >
                            Remove
                          </button>
                        </div>
                      )}
                    </div>
                    {inputList.length - 1 === i && (
                      <div>
                        <button
                          className=" px-4 py-2 bg-fuchsia-300 rounded-lg text-white font-semibold text-xl hover:shadow-md hover:bg-green-400  transition ease-in-out duration-300 ml-20"
                          onClick={handleAddClick}
                        >
                          Add more...
                        </button>
                      </div>
                    )}
                  </div>
                );
              })}
            </form>
          </div>
        </div>
        <div className="bg-yellow-50">
          <form className="w-[500px] h-fit mx-auto grid grid-cols-1 gap-8 mt-10">
            <div>
              <label
                htmlFor="email-address-icon"
                className="block mb-2 text-md font-bold text-slate-500"
              >
                Frequency
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none"></div>
                <input
                  type="text"
                  id="email-address-icon"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Frequency in HZ"
                  onChange={handleChangeFrequency}
                  value={frequency || ""}
                  required={true}
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="email-address-icon"
                className="block mb-2 text-md font-bold text-slate-500"
              >
                Line Voltage
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none"></div>
                <input
                  type="text"
                  id="email-address-icon"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="voltage in KV"
                  onChange={handleChangeVoltage}
                  value={voltage || ""}
                  required={true}
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="email-address-icon"
                className="block mb-2 text-md font-bold text-slate-500"
              >
                Capacitor Bank Rating{" "}
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none"></div>
                <input
                  type="text"
                  id="email-address-icon"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="rating in MVAR"
                  onChange={handleChangeCbRating}
                  value={cbRating || ""}
                  required={true}
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="email-address-icon"
                className="block mb-2 text-md font-bold text-slate-500"
              >
                Short Circuit Rating
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none"></div>
                <input
                  type="text"
                  id="email-address-icon"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="MVA"
                  onChange={handleChangeScRating}
                  value={scRating || ""}
                  required={true}
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="email-address-icon"
                className="block mb-2 text-md font-bold text-slate-500"
              >
                Non Linear Load
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none"></div>
                <input
                  type="text"
                  id="email-address-icon"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="load in MW"
                  onChange={handleChangeNlLoad}
                  value={nlLoad || ""}
                  required={true}
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="email-address-icon"
                className="block mb-2 text-md font-bold text-slate-500"
              >
                Power Factor
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none"></div>
                <input
                  type="text"
                  id="email-address-icon"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="pf"
                  onChange={handleChangePf}
                  value={pf || ""}
                  required={true}
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="email-address-icon"
                className="block mb-2 text-md font-bold text-slate-500"
              >
                Quality Factor
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none"></div>
                <input
                  type="text"
                  id="email-address-icon"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Quality Factor"
                  onChange={handleChangeQf}
                  value={qf || ""}
                  required={true}
                />
              </div>
            </div>
          </form>
        </div>

        <div className="bg-yellow-50  ">
          <button
            className=" ml-[800px] m-5  bottom-0   px-4 py-2 bg-fuchsia-300 rounded-lg text-white font-semibold text-xl hover:shadow-md hover:bg-green-400  transition ease-in-out duration-300 "
            onClick={handleSubmitData}
          >
            submit
          </button>
        </div>
      </div>
    </div>
  );
}
