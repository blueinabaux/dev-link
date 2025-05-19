import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { authUser, notAuthUser } from "../redux/slices/authSlice";
import { loginCometChatUser as loginUser } from "../config/cometchat"; 

function LoginPage() {
  const [uid, setUid] = useState(""); 
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async () => {
    const trimmedUid = uid.trim();
    if (!trimmedUid) {
      alert("UID is required");
      return;
    }

    try {
      const user = await loginUser(trimmedUid);
      if (user) {
        localStorage.setItem("cometChatUser", JSON.stringify(user)); 
        alert("Login Successful!");
        dispatch(authUser()); 
        navigate("/dashboard");
      } else {
        alert("Login failed. Invalid UID.");
        dispatch(notAuthUser());
      }
    } catch (error) {
      console.error("CometChat login failed:", error);
      dispatch(notAuthUser());
      alert("Login failed. Please check console for details.");
    }
  };

  return (
    <div className="reg-container h-[100vh] w-[100vw] flex justify-center items-center">
      <div className="reg-form w-[30%] h-[60%] py-[40px] bg--500 flex flex-col justify-center items-center gap-[20px] text-white">
        <h1 className="text-[40px] font-bold">Login</h1>

        <div className="input-section h-auto w-full flex flex-col justify-center items-center gap-[20px]">
          <input
            className="outline-none bg-[#242424] w-[80%] focus:transition-all focus:border-[#424242] px-[2vw] py-[1.4vh] rounded-[8px] border-[2px] border-solid border-zinc-800"
            type="text"
            placeholder="Enter UID"
            value={uid}
            onChange={(e) => setUid(e.target.value)}
            name="uid"
          />
        </div>

        <div className="options h-auto w-[80%] flex justify-between items-center text-[15px] text-zinc-400">
          <p>Not a user?</p>
          <Link
            to="/register"
            className="hover:text-white hover:font-semibold transition-all"
          >
            Signup
          </Link>
        </div>

        <button
          onClick={handleLogin}
          className="button-container rounded-[8px] bg-[#fff] w-[40%] px-[1.4vw] py-[1.2vh] text-black cursor-pointer hover:scale-[1.05] transition-all font-medium"
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default LoginPage;
