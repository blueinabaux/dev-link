const Cards = ({icon, mainText, para}) => {
    return ( 
        <>
            <div className="cards-container h-[35vh] w-[24%] flex flex-col justify-center items-center rounded-[10px] bg-[#1f1f1f] border-[2px] gap-[10px] text-white border-zinc-800 px-[2vw] shadow-sm shadow-[#0e0e0e]">
            {icon}
            <div className="text-section h-auto w-full flex flex-col justify-center items-center">
            <h1 className="font-semibold text-[24px] " >{mainText}</h1>
            <p className="text-zinc-400 text-[14px] text-center">{para}</p>
            </div>

            </div>
        </>
     );
}
 
export default Cards;