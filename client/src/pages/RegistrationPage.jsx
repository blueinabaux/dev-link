import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { loginCometChatUser } from "../config/cometchat"; 

function RegistrationPage() {
  const [formData, setFormData] = useState({
    username: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ username: e.target.value });
  };

  const createUser = async (uid, name) => {
    try {
      const res = await axios.post("http://localhost:5000/api/register-user", { uid, name });
      return res.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  };

  const handleRegister = async () => {
    const uid = formData.username.trim();
    if (!uid) {
      alert("Username (UID) is required");
      return;
    }

    try {
      await createUser(uid, uid);
      alert("User registered successfully!");

      try {
        await loginCometChatUser(uid);
        console.log("CometChat login successful!");
        localStorage.setItem("cometChatUser", uid); checks
      } catch (cometError) {
        console.error("CometChat login failed:", cometError);
        alert("Registration successful, but CometChat login failed.");
      }

      navigate("/login");
    } catch (err) {
      console.error("Registration error:", err);
      if (err.code === "ERR_UID_ALREADY_EXISTS") {
        alert("Username already exists. Try another.");
      } else {
        alert("Registration failed. Please try again.");
      }
    }
  };

  return (
    <div className="reg-container h-[100vh] w-[100vw] flex justify-center items-center">
      <div className="reg-form w-[30%] h-[50%] py-[40px] bg--500 flex flex-col justify-center items-center gap-[20px] text-white">
        <h1 className="text-[40px] font-bold">Signup</h1>

        <input
          className="outline-none bg-[#242424] w-[80%] px-[2vw] py-[1.4vh] rounded-[8px] border-[2px] border-solid border-zinc-800"
          type="text"
          placeholder="Enter Username (UID)"
          value={formData.username}
          onChange={handleChange}
          name="username"
        />

        <div className="options w-[80%] flex justify-between items-center text-[15px] text-zinc-400">
          <p>Already a user?</p>
          <Link
            to="/login"
            className="hover:text-white hover:font-semibold transition-all"
          >
            Login
          </Link>
        </div>

        <button
          onClick={handleRegister}
          className="button-container rounded-[8px] bg-[#fff] w-[40%] px-[1.4vw] py-[1.2vh] text-black cursor-pointer hover:scale-[1.05] transition-all font-medium"
        >
          Register
        </button>
      </div>
    </div>
  );
}

export default RegistrationPage;
