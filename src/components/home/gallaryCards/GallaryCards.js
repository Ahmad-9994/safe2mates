import React from 'react'
import {gallaryCardsData} from "./gallaryCardData"
const GallaryCards = () => {
  return (
    <div className='w-[80%]  m-auto flex flex-wrap justify-evenly py-10'>

    {
      gallaryCardsData.map((data)=>{
        return(
           <div className='md:w-[18%] w-[70%] text-center'>
              <img src={data.iamge} />    
             <h1 className='text-sm italic font-bold my-5 text-[#667B87]'>{data.title}</h1>     
    
    </div>
        )
      })
    }



    

    </div>
  )
}

export default GallaryCards
