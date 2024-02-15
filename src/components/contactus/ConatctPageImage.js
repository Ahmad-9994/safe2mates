import React from 'react'
import contactpic from "../../assets/conatctpage.jpg"

const ConatctPageImage = () => {
  return (
    <div 
    style={{ 
       backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.2), rgba(0,0,0,0.3)), url(${contactpic})`, 
      backgroundRepeat:"no-repeat",
      backgroundSize:"cover",
      borderRadius: "0 0 50% 50% / 10px 10px 0 0;",
     }}
    className='w-[100%] h-[90vh] border my-10'
     >    
    </div>
  )
}

export default ConatctPageImage
