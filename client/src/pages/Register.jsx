import { useRef, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { RiArrowGoBackFill } from "react-icons/ri";
import emailjs from "@emailjs/browser";

export default function Register() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
  };
  const handleBack = () => {
    navigate("/login");
  };

  const [email, setEmail] = useState(null);
  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const [username, setUsername] = useState(null);
  const handleChangeUsername = (event) => {
    setUsername(event.target.value);
    console.log(username);
  };

  const [password, setPassword] = useState(null);
  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const [confirmPassword, setConfirmPassword] = useState(null);
  const handleChangeConfirmPassword = (event) => {
    setConfirmPassword(event.target.value);
  };

  const setNull = () => {
    setPassword(null);
    setUsername(null);
    setConfirmPassword(null);
    setEmail(null);
  };

  useEffect(() => {
    // Effect code here
    emailjs.init("p1_uLklkxfieg_fih");
  }, []);
//   const emailRef = useRef(<HTMLInputElement>);
// const nameRef = useRef(<HTMLInputElement>);
const [loading, setLoading] = useState(false);

const handleEmailSubmit = async () => {
  // e.preventDefault();
  const serviceId = "service_8qf7pao";
  const templateId = "template_wvpe55x";
  try {
    setLoading(true);
    await emailjs.send(serviceId, templateId, {
     username: username,
     password:password,
      recipient: email
    });
    alert("email successfully sent check your credential in inbox 🙂🙂🙂");
  } catch (error) {
    console.log(error);
  } finally {
    setLoading(false);
  }
};

  const handleSubmitData = (event) => {
    event.preventDefault();

    if (
      email != null &&
      password != null &&
      username != null &&
      confirmPassword != null
    ) {
      // window.alert("😃😃😃 ! ");
      const confirm_password = confirmPassword;

      axios
        .post("http://localhost:3001/api/auth/register", {
          email,
          username,
          password,
          confirm_password,
        })
        .then((response) => {
          handleEmailSubmit()
          navigate("/login");
          
        })
        .catch((error) => {
          console.error("Error saving new entry:", error);
        });
    } else {
      window.alert("Please fill all the required fields😃😃😃 ! ");
    }
  };

  return (
    <div className="pg flex justify-center items-center w-screen  relative h-screen bg-sky-300">
      <div className="">
      <button className="flex items-center bg-fuchsia-300 absolute top-5 right-5 py-2 rounded-xl px-4  font-semibold text-lg text-white hover:text-fuchsia-300 hover:bg-white transition ease-in-out duration-300" onClick={handleBack}>
          Back
          <span className="ml-2"><RiArrowGoBackFill /></span>
        </button>
      </div>
      <div className="container w-[500px] h-[500px] bg-slate-300 rounded-xl shadow-xl">
        <form className="w-[500px] h-[500px] flex flex-col justify-evenly  ">
          <div className="heading flex justify-center text-xl">
            <h1 className=" text-sky-600 font-semibold">Create new account</h1>
          </div>
          <div className="email  space-y-3">
            <label
              htmlFor="email"
              className="block ml-10 font-medium text-white"
            >
              Email
            </label>
            <input
              type="text"
              placeholder="email..."
              onChange={handleChangeEmail}
              value={email || ""}
              required={true}
              className="placeholder:italic m-auto placeholder:text-slate-400 block bg-white w-3/4 border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-600 focus:ring-sky-500 focus:ring-1 sm:text-sm  "
            />
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
              onChange={handleChangeUsername}
              value={username || ""}
              required={true}
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
              onChange={handleChangePassword}
              value={password || ""}
              required={true}
              className="placeholder:italic m-auto placeholder:text-slate-400 block bg-white w-3/4 border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-600 focus:ring-sky-500 focus:ring-1 sm:text-sm  "
            />
          </div>

          <div className="confirm-password  space-y-3">
            <label
              htmlFor="confirmpassword"
              className="block ml-10 font-medium text-white"
            >
              confirm-password
            </label>
            <input
              type="text"
              placeholder="confirm-password"
              onChange={handleChangeConfirmPassword}
              value={confirmPassword || ""}
              required={true}
              className="placeholder:italic m-auto placeholder:text-slate-400 block bg-white w-3/4 border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-600 focus:ring-sky-500 focus:ring-1 sm:text-sm  "
            />
          </div>
          <div className="login flex justify-center">
            <button
              className="bg-fuchsia-300 py-1 rounded-xl px-20 font-semibold text-lg text-white hover:text-fuchsia-300 hover:bg-white transition ease-in-out duration-300"
              onClick={(event) => handleSubmitData(event)}
            >
              Register
            </button>
          </div>
          <div className="link flex justify-center ">
            <button className="text-sm text-slate-500" onClick={handleLogin}>
              {" "}
              have account login here
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
