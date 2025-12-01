import React, { useState } from "react";
import PageHeader from "../components/PageHeader/PageHeader";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";

function RegisterPage() {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mobilenumber, setMobileNumber] = useState("");
  const [ism_member, setIsm_member] = useState(true);
  const [login, setLogin] = useState(false); // false => REGISTER, true => LOGIN
  const navigate = useNavigate();

  // ----------------------------- REGISTER ---------------------------------
  async function registerUser(e) {
    e.preventDefault();
    try {
      const res = await axios.post(
        "https://srijan-2026.onrender.com/api/v1/user/register",
        {
          fullname,
          email,
          password,
          mobilenumber,
          ism_member,
        }
      );

      toast.success("Registration successful! Please Login.");
      setLogin(true); // Switch to LOGIN form
    } catch (error) {
       console.log(error);

  const msg =
    error?.response?.data?.message ||
    error?.response?.data?.errors?.[0] ||
    "Something went wrong";

  toast.error(msg);
    }
  }

  // ------------------------------ LOGIN -----------------------------------
  async function loginUser(e) {
    e.preventDefault();
    try {
      const res = await axios.post(
        "https://srijan-2026.onrender.com/api/v1/user/login",
        {
          email,
          password,
        },
        { withCredentials: true }
      );

      toast.success("Login successful!");
      localStorage.setItem("user", JSON.stringify(res.user));
      navigate("/")
    } catch (error) {
        console.log(error);

  const msg =
    error?.response?.data?.message ||
    error?.response?.data?.errors?.[0] ||
    "Something went wrong";

  toast.error(msg);
    }
  }

  return (
    <>
      {/* ----------------------------- REGISTER PAGE ----------------------------- */}
      {!login && (
        <div>
          <PageHeader
            title="REGISTER"
            subtitle="Explore the vibrant spectrum of cultural celebrations"
            showBackButton={true}
            backPath="/"
            titleDelay={0.2}
            showStars={true}
          />






               <div className="w-full  mb-5 font-['Pirata One'] flex justify-center items-center px-4">
  <div className="rounded-2xl  border-3 border-[#FED000] max-w-md w-full p-6 shadow-2xl">

    {/* FORM */}
    <form onSubmit={registerUser} className="flex flex-col gap-4">

      {/* FULL NAME */}
      <div className="flex flex-col gap-1">
        <label className="text-white font-medium">Full Name</label>
        <input
          type="text"
          value={fullname}
          onChange={(e) => setFullname(e.target.value)}
          required
          className="p-3 rounded-lg bg-white/90 border-2 border-gray-300 focus:border-[#FED000] outline-none transition"
          placeholder="Enter your full name"
        />
      </div>

      {/* EMAIL */}
      <div className="flex flex-col gap-1">
        <label className="text-white font-medium">Email Address</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="p-3 rounded-lg bg-white/90 border-2 border-gray-300 focus:border-[#FED000] outline-none transition"
          placeholder="Enter your email"
        />
      </div>

      {/* PASSWORD */}
      <div className="flex flex-col gap-1">
        <label className="text-white font-medium">Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="p-3 rounded-lg bg-white/90 border-2 border-gray-300 focus:border-[#FED000] outline-none transition"
          placeholder="Enter password"
        />
      </div>

      {/* MOBILE NUMBER */}
      <div className="flex flex-col gap-1">
        <label className="text-white font-medium">Mobile Number</label>
        <input
          type="number"
          value={mobilenumber}
          onChange={(e) => setMobileNumber(e.target.value)}
          required
          className="p-3 rounded-lg bg-white/90 border-2 border-gray-300 focus:border-[#FED000] outline-none transition"
          placeholder="Enter mobile number"
        />
      </div>

      {/* CHECKBOX */}
      <label className="flex items-center gap-2 text-white font-medium mt-2">
        <input
          type="checkbox"
          checked={ism_member}
          onChange={() => setIsm_member(!ism_member)}
          className="w-4 h-4"
        />
        Are you an ISM Member?
      </label>

      {/* SUBMIT BUTTON */}
      <button
        type="submit"
        className="bg-[#FED000] text-black font-semibold p-3 rounded-lg hover:bg-yellow-400 transition"
      >
        Register
      </button>
    </form>

    {/* SWITCH LOGIN LINK */}
    <p className="mt-4 text-center text-white">
      Already registered?{" "}
      <span
        className="text-yellow-300 underline cursor-pointer"
        onClick={() => setLogin(true)}
      >
        Sign In
      </span>
    </p>

  </div>
</div>







        </div>
      )}

      {/* ----------------------------- LOGIN PAGE ----------------------------- */}
 {login && (
  <div> <PageHeader
        title="LOGIN"
        subtitle="Explore the vibrant spectrum of cultural celebrations"
        showBackButton={true}
        backPath="/"
        titleDelay={0.2}
        showStars={true}
      />
      <div className="w-full  flex justify-center items-center px-4">
    <div className="rounded-2xl bg-[#501d8a] border-2 border-[#FED000] max-w-md w-full p-6 shadow-xl">



      {/* LOGIN FORM */}
      <form onSubmit={loginUser} className="flex flex-col gap-4 mt-4">

        {/* EMAIL */}
        <div className="flex flex-col gap-1">
          <label className="text-white font-medium">Email Address</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="p-3 rounded-lg bg-white/90 border-2 border-gray-300 focus:border-[#FED000] outline-none transition"
            placeholder="Enter your email"
          />
        </div>

        {/* PASSWORD */}
        <div className="flex flex-col gap-1">
          <label className="text-white font-medium">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="p-3 rounded-lg bg-white/90 border-2 border-gray-300 focus:border-[#FED000] outline-none transition"
            placeholder="Enter your password"
          />
        </div>

        {/* LOGIN BUTTON */}
        <button
          type="submit"
          className="bg-[#FED000] text-black font-semibold p-3 rounded-lg hover:bg-yellow-400 transition mt-2"
        >
          Login
        </button>
      </form>

      {/* SWITCH TO REGISTER */}
      <p className="mt-4 text-center text-white">
        New user?{" "}
        <span
          className="text-yellow-300 underline cursor-pointer"
          onClick={() => setLogin(false)}
        >
          Register here
        </span>
      </p>

    </div>
  </div></div>

)}

    </>
  );
}

export default RegisterPage;
