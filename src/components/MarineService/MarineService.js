import React from 'react'
import pic from "../../assets/marine.jpg"

const MarineService = (props) => {
  console.log(props)
  return (
    <div className='w-[100%] h-auto border md:flex border'>
    <div className='md:w-[50%] h-auto bg-[#00D4CD] md:p-[5rem] p-5 space-y-7'>
    <h1 className='text-5xl font-bold italic text-white'>{props.MarineData[0].herotitle}</h1>
    <h2 className='text-xl font-semibold italic text-white'>{props.MarineData[0].herodesc}</h2>
    <button className='bg-[#0E5073] py-1 px-4 text-white rounded-sm md:mx-[5rem]'>Download the Ship2Mates™ App</button>
    </div>
    <div className='md:w-[50%] h-auto bg-red-500'>

    <img src={props.MarineData[0].heropic} style={{height:"100%" ,width:"100%"}} />
    </div>
    
    </div>
  )
}

export default MarineService
