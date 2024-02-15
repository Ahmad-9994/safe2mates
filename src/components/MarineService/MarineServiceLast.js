import React from 'react'
import pic from "../../assets/gallary6.jpg"

const MarineServiceLast = (props) => {
  return (
    <div className='w-[100%] h-auto  bg-[#b8e06e] md:flex'>

    <div className='md:md:w-[50%] h-auto  md:p-[5rem] p-5 space-y-7'>
    <h1 className='text-3xl font-bold italic text-white'>{props.MarineData[1].lastsectiontitle}</h1>
    <h2 className='text-md font-semibold italic text-white'>{props.MarineData[1].lastsectiondesc}</h2>
    <button className='bg-[#0E5073] py-1 px-4 text-white rounded-sm md:mx-[5rem]'>SUBMIT YOUR INFO</button>
    </div>

    <div className='md:w-[50%] h-auto '>

    <div className='w-[80%] h-[40vh]  rounded-[8rem] m-10'
    style={{ 
       backgroundImage: ` url(${props.MarineData[1].lastpic})`, 
      backgroundRepeat:"no-repeat",
      backgroundSize:"cover" }}
    
    ></div>
    
    
    </div>

        
    </div>
  )
}

export default MarineServiceLast
