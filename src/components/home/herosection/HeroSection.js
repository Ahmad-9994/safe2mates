import React from 'react'
import HeroImage from "../../../assets/hero.jpg"
import appstoreimages from "../../../assets/app-store-badge.png"
import playstoreiamge from "../../../assets/download-icon-appgoogleonplayicon.png"
import flag1 from "../../../assets/Mexico-flag.jpg"
import flag2 from "../../../assets/Canada-flag.jpg"
import flag3 from "../../../assets/USA-Flag.jpg"

const HeroSection = () => {
  return (
    <div style={{ 
       backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.8), rgba(0,0,0,0.7)), url(${HeroImage})`, 
      backgroundRepeat:"no-repeat",
      backgroundSize:"cover" }}
     className='w-[100%] h-auto my-10'>

     <div className='md:w-1/2 p-3 md:text-left text-center'>
     <h1 className='md:text-4xl text-2xl font-bold text-white'>The Essential Boating App For Boat Owners, Marine Services, Rentals and Enthusiasts...</h1>
     <h2 className='md:text-2xl text-xl text-white pt-10'>Ship2Mates™ is the boating and marine services marketplace in your community and beyond.
     <br />
      <br />
The all-in-one Boat Management Platform built to instantly connect you with unlimited boating resources.
<br />
 <br />
Download the free App and discover how Ship2Mates™ brings boating enthusiasts and marine services together in your community.
<br />
 <br />
Built for the love of boating.</h2>
     


      <div className='md:flex  justify-between  py-5 w-[70%] m-auto' >
     <img src={appstoreimages} width={200} height={67} />
     <img src={playstoreiamge} width={200} height={67} />
     </div>

     <div className='flex w-[45%] justify-evenly py-5'>
     <img src={flag1}  />
     <img src={flag2}/>
      <img src={flag3}  />
     </div>



     </div>

    


      
    </div>
  )
}

export default HeroSection
