import React, { useState ,useEffect} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useSelector, useDispatch } from 'react-redux'
import { isLoggedIn } from '/src/redux/slice/loginslice.js';
import { RiArrowGoBackFill } from "react-icons/ri";

export default function Login() {

  const dispatch =useDispatch()
  const userLogin = useSelector((state) => state.login.value)
  const [userId, setUserId] = useState(null);
  const navigate = useNavigate();

  const handleRegister = () => {
    navigate("/register");
  };
  const handleBack = () => {
    navigate("/");
  };
  

  const [username, setUsername] = useState(null);
  const handleChangeUsername = (event) => {
    setUsername(event.target.value);
  };

  const [password, setPassword] = useState(null);
  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const setNull = () => {
    setPassword(null);
    setUsername(null);
  };
  useEffect(() => {
    if (userId) {
      localStorage.setItem("user_id", userId);
      // console.log(userId);
    }
  }, [userId]);

  const handleSubmitData = (event) => {
    event.preventDefault();
    // console.log("Submitting login request...");

    if (username && password) {
      axios
        .post("http://localhost:3001/api/auth/login", {
          username: username,
          password: password,
        })
        .then((response) => {
          window.alert("Login Successful 😀😀😀");
          // console.log(response.data.userDetails.user_id);
          
          dispatch(isLoggedIn());
         
          // console.log(userLogin);
          setUserId(response.data.userDetails.user_id)
          localStorage.setItem("user_id", response.data.userDetails.user_id);
          navigate("/home");
          // console.log(userId);
          // console.log(localStorage.getItem("user_id"));
          // dispatch({type:user_id})
        })
        .catch((error) => {
          // console.error("Error logging in:", error);
          window.alert("Error logging in😐");
        });
    } else {
      window.alert("Please provide both username and password.");
    }
  };

  return (
    <div className="pg flex justify-center items-center w-screen   h-screen bg-sky-300">
      <div className="">
      <button className="flex items-center bg-fuchsia-300 absolute top-5 right-5 py-2 rounded-xl px-4  font-semibold text-lg text-white hover:text-fuchsia-300 hover:bg-white transition ease-in-out duration-300" onClick={handleBack}>
          Back
          <span className="ml-2"><RiArrowGoBackFill /></span>
        </button>
      </div>
      <div className="container w-[400px] h-[400px] bg-slate-300 rounded-xl shadow-xl">
        <form className="w-[400px] h-[400px] flex flex-col justify-evenly  ">
          <div className="heading flex justify-center text-xl">
            <h1 className=" text-sky-600 font-semibold">
              Login to your account
            </h1>
          </div>
          <div className="username space-y-3">
            <label
              htmlFor="username"
              className="block ml-10 font-medium text-white"
            >
              Username
            </label>
            <input
              type="text"
              placeholder="username..."
              required={true}
              onChange={handleChangeUsername}
              value={username || ""}
              className="placeholder:italic m-auto placeholder:text-slate-400 block bg-white w-3/4 border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-600 focus:ring-sky-500 focus:ring-1 sm:text-sm  "
            />
          </div>
          <div className="password space-y-3">
            <label
              htmlFor="password"
              className="block ml-10 font-medium text-white"
            >
              Password
            </label>
            <input
              type="text"
              placeholder="password..."
              required={true}
              onChange={handleChangePassword}
              value={password || ""}
              className="placeholder:italic m-auto placeholder:text-slate-400 block bg-white w-3/4 border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-600 focus:ring-sky-500 focus:ring-1 sm:text-sm  "
            />
          </div>
          <div className="login flex justify-center">
            <button
              className="bg-fuchsia-300 py-1 rounded-xl px-20 font-semibold text-lg text-white hover:text-fuchsia-300 hover:bg-white transition ease-in-out duration-300"
              onClick={(event) => handleSubmitData(event)}
            >
              Login
            </button>
          </div>
          <div className="link flex justify-center ">
            <button className="text-sm text-slate-500" onClick={handleRegister}>
              don't have account register here
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
