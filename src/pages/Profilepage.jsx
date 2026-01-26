import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import axiosInstance from "../utils/axiosInstance";
import "./Profilepage.css";
import PageHeader from "../components/PageHeader/PageHeader";
import { toast } from "react-toastify";

export function Profile() {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [mobilenumber, setMobileNumber] = useState("");
  const [passid, setpassid] = useState("");

  const navigate = useNavigate();

  async function getUser() {
    try {
      const res = await axiosInstance.get('/user/current-user');
      setUser(res.data.data.fullname);
      setEmail(res.data.data.email);
      setMobileNumber(res.data.data.mobilenumber);
      setpassid(res.data.data.passid)

    } catch {
      setUser("");
      setEmail("");
      setMobileNumber("");
      navigate("/register");
      toast.error("Please login to continue")
    }
  }

  async function logout() {
    try {
      await axiosInstance.get('user/logout')
      setUser("");
      setEmail("");
      setMobileNumber("");
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div className="w-full min-h-screen">
      <PageHeader
        title="YOUR PROFILE"
        showBackButton={true}
        backPath="/"
        titleDelay={0.2}
        showStars={true}
      />

      <div
        className="
          w-full 
          flex flex-col md:flex-row 
          justify-center items-center 
          gap-12 md:gap-16 
          px-4 py-10
        "
      >
        {/* PROFILE CARD */}
        <div
          className="
            glow-card 
            w-full max-w-md 
            p-8 sm:p-10 
            rounded-2xl 
            border-4 border-[#FED000] 
            font-['Cinzel Decorative'] 
            bg-black/10 
            flex flex-col 
            gap-4
          "
        >
          <h2 className="text-2xl sm:text-3xl text-center mb-3 text-[#FED000] font-bold">
            Profile Details
          </h2>

          <div className="flex flex-col gap-4 text-base sm:text-lg tracking-wide text-white">
            <div className="flex justify-between border-b border-[#FED000]/30 pb-2">
              <span className="text-[#FED000]">Name:</span>
              <span className="break-all">{user}</span>
            </div>

            <div className="flex justify-between border-b border-[#FED000]/30 pb-2">
              <span className="text-[#FED000]">Email:</span>
              <span className="break-all">{email}</span>
            </div>

            <div className="flex justify-between border-b border-[#FED000]/30 pb-2">
              <span className="text-[#FED000]">Mobile:</span>
              <span className="break-all">{mobilenumber}</span>
            </div>
          </div>

          <button
            onClick={logout}
            className="
              mt-4 
              w-full 
              bg-[#FED000] 
              text-black 
              py-2 
              rounded-xl 
              text-lg sm:text-xl 
              tracking-wide 
              hover:bg-yellow-400 
              transition
            "
          >
            LOGOUT
          </button>
        </div>

        {/* SECOND CARD */}
        {passid && (
          <div
            className="
            glow-card 
            w-full max-w-md 
            p-6 sm:p-8 
            rounded-2xl 
            border-4 border-[#FED000] 
            font-['Pirata One'] 
            bg-black/10 
            flex items-center justify-center
          "
          >
            {/* INNER BOX */}
            <div
              className="
              w-32 sm:w-40 
              h-20 sm:h-28 
              border-4 border-[#FED000] 
              rounded-xl 
              flex items-center justify-center 
              text-[#FED000] 
              text-lg sm:text-xl
            "
            >
              {passid}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
