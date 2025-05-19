import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../Buttons/Button";
import { Link as ScrollLink } from "react-scroll";
import { useSelector } from "react-redux";

function Navbar() {
  const nav = useNavigate();
  const isAuthenticated = useSelector((state) => state.auth.isAuth); 
  console.log("AUTH ? : ", isAuthenticated);

  return (
    <>
      {
        !isAuthenticated ? (
          <div className="navbar text-white bg-[#323232] fixed left-[25%] top-[4%] max-md:left-[5%] py-[10px] w-[50vw] max-md:w-[90%] flex justify-between rounded-[8px] shadow-lg items-center bg--700 pl-[2vw] pr-[1vw] border-[1px] border-solid border-[#383838] z-[999]">
        <Link  to="/" smooth={true} duration={500}  className="text-[20px] font-semibold cursor-pointer">DevLink</Link>
        <div className="nav-mid h-full w-auto flex justify-center items-center gap-[40px] text-[14px] text-[#7d7d7d] ">
        <ScrollLink to="home" smooth={true} duration={500}  className='hover:text-gray-100 duration-200 cursor-pointer'>Home</ScrollLink >
        <ScrollLink to="features" smooth={true} duration={500}  className='hover:text-gray-100 duration-200 cursor-pointer'>Features</ScrollLink >
        <ScrollLink to="pricing" smooth={true} duration={500}  className='hover:text-gray-100 duration-200 cursor-pointer' >Pricing</ScrollLink >
        <ScrollLink to="contact" smooth={true} duration={500}  className='hover:text-gray-100 duration-200 cursor-pointer' >Contact</ScrollLink >

        </div>
        <div className="nav-right w-auto h-full flex justify-center items-center">
          {
            !isAuthenticated ? (<div
              onClick={() => nav("/login")}
              className="button-container bg-[#fff] rounded-[8px] px-[2vw] py-[1.2vh] text-black cursor-pointer hover:bg-transparent border-[1px] border-solid border-[#fff] hover:text-[#fff]  transition-all text-[15px] font-medium "
            >
              Login
            </div>) : "User"
          }
        </div>
      </div>
        ) : null
      }
    </>
  );
}

export default Navbar;
