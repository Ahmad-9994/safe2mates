import React from 'react'
import { onlineCardsdata } from './onlinecardsdata'

const OnlineCards = () => {
  return (
    <div className='w-[80%] h-auto my-10 lg:flex flex-wrap justify-evenly m-auto'>
    {
      onlineCardsdata.map((data)=>{
        return(
    <div className='lg:w-[30%] h-[254px] text-center py-10 rounded-3xl shadow-2xl px-2 my-5 '>
     <h1 className='text-6xl text-[#0E5073]'><i aria-hidden="true" className={data.icon}></i></h1>
    <h1 className='text-2xl font-semibold text-[#0E5073] my-2'>{data.title}</h1>
    <h2 className='text-[#667B87] font-semibold ' >{data.desc}</h2>
    </div>
        )
      })
    }
    


    
      
    </div>
  )
}

export default OnlineCards
