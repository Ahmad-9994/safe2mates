import React from 'react'
import profilecardpic1 from "../../../assets/profilecard1.jpg"
import {profileCardsData} from "./profileCardsData"

const ProfileCards = () => {
  return (
    <div className='w-[100%] h-auto border flex flex-wrap justify-evenly'>

    {
    profileCardsData.map((data)=>{
      return (
      <div className='md:w-[40%] h-auto text-center px-10 rounded-3xl shadow-lg my-5 py-10 '> 
      <div className=' border h-auto m-auto my-10'><img src={data.image} /></div>
      <h1 className='text-xl italic font-bold text-[#0E5073]'>{data.title}</h1>
      <h2 className='text-[#0E5073] font-bold my-3 text-md text-[#667B87]'>Save time booking marine services and maintenance.</h2>
      <h3 className='text-left text-sm text-[#535A5C] italic'>Store all of your watercraft details, ready to instantly share with potential marine service providers and more. In-App Chat, request a quote, schedule time and cost for agreed services. Get service updates. Payment is secured until work is completed and approved.</h3>
      
      </div>
      )
    })
    }


     
    </div>
  )
}

export default ProfileCards
