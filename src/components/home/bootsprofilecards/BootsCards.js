import React from 'react'
import { bootData }from "./cardsDetails"

const BootsCards = () => {

  

  return (
    <div className='w-[100%]] h-auto py-[10]'>

    {
      bootData.map((data)=>{
        return(
                     <div className='lg:w-[50%] w-[90%] h-auto m-auto px-8 text-center  py-8 my-10 rounded-3xl shadow-xl'>
      <h1 className='text-2xl font-bold text-[#0E5073] m-auto italic my-2'>{data.title}</h1>
      <h2 className='font-semibold my-2'>{data.des1}</h2>
      <h2 className='font-semibold'>{data.des2}</h2>
      
      </div>)
      })
    }
     

  
      
    </div>
  )
}

export default BootsCards