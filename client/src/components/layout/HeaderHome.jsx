import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { isLoggedIn } from '../../redux/slice/loginslice';

export default function HeaderHome() {
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.login.value);
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("user_id");
    dispatch(isLoggedIn());

    console.log(userLogin);
    navigate("/");
  };
  return (
    <div className="h-16 w-full bg-slate-200 m-auto flex flex-row items-center relative">
      <div className="title absolute left-10 top-4">
        <h1 className="text-xl font-bold text-slate-500">MagnewinHarmonicInsights</h1>
      </div>
      <form className="max-w-sm absolute right-52">
        <div className="flex space-x-4 h-10">
          <div className="flex rounded-md overflow-hidden w-full">
            <input type="text" className="w-full rounded-md rounded-r-none" />
            <button className="bg-indigo-600 text-white px-4 text-lg font-semibold py-2 rounded-r-md">
              Go
            </button>
          </div>
          <button className="bg-white px-4 text-lg font-semibold py-2 rounded-md">
            Clear
          </button>
        </div>
      </form>
      <div className="absolute right-16">
        <button
          className="flex items-center px-4 py-2 bg-fuchsia-300 rounded-lg text-white font-semibold text-xl hover:shadow-md hover:bg-white hover:text-fuchsia-300 transition ease-in-out duration-300 "
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
    </div>
  );
}
