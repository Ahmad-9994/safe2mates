import React from 'react'
import footerpic from "../../../assets/180x180-Nav-png.png"
import playstorepic from "../../../assets/download-icon-appgoogleonplayicon.png"
import appstorepic from "../../../assets/app-store-badge.png"
import footerpic2 from "../../../assets/footerpic1.jpg"
import strippic from "../../../assets/Strip-logo-Image.png"
import amazonpic from "../../../assets/Amazon_Web_Services-Logo.png"


const FooterGallary = () => {
  return (
    <div className='w-[100%] h-auto bg-[#F5F5F5] md:flex text-center my-10'>

    <div className='md:w-[50%] py-10'>
    <h1 className='text-2xl italic font-bold w-[80%] m-auto'>Stay connected with your local boating community.</h1>
    <div className='md:w-[30%] w-[50%] m-auto my-5'><img src={footerpic} /></div>
    <h1 className='text-2xl italic font-bold w-[80%] m-auto'>Download the free Ship2Mates™ App</h1>
    <div className=' md:w-[30%] w-[60%] m-auto my-5'><img src={playstorepic} /></div>
    <div className=' md:w-[30%] w-[60%] m-auto my-5'><img src={appstorepic} /></div>
    </div>

    <div className='md:w-[50%] py-10'>
    <div className='md:w-[30%] w-[70%] m-auto my-5'><img src={footerpic2} /></div>
    <h1 className='font-semibold md:w-[50%] w-[80%] m-auto italic'>Secure payment & payout gateway powered by Stripe</h1>
     <div className=' md:w-[30%] w-[70%] m-auto my-5'><img src={strippic} /></div>
     <h1 className='font-semibold md:w-[50%] w-[80%] m-auto italic'>Powered & Secured by AWS</h1>
     <div className='md:w-[30%] w-[70%] m-auto my-5'><img src={amazonpic} /></div>
    
    </div>
          
    </div>
  )
}

export default FooterGallary
