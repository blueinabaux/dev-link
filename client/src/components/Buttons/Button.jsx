import React from 'react'
import { useNavigate } from 'react-router-dom'

function Button({text, toPage}) {
    const nav = useNavigate();
  return (
    <>
        <div
        onClick={() => nav(`/${toPage}`)}
         className="button-container rounded-[8px] bg-[#fff]  px-[1.4vw] py-[1.2vh] text-black cursor-pointer hover:scale-[1.05] transition-all font-medium shadow-sm shadow-[#505050] ">
            {text}
        </div>
    </>
  )
}

export default Button