import React from 'react'
import MarineService from '../components/MarineService/MarineService'
import MarineServiceLast from '../components/MarineService/MarineServiceLast'
import OnlineCards from '../components/home/onlineCards/OnlineCards'
import BootsCards from '../components/home/bootsprofilecards/BootsCards'
import pic from "../assets/marine.jpg"

const MarineServiceScreen = () => {

  const MarineData=[
    {
      herotitle:"Marine Service Profiles Connections That Convert",
      herodesc:"Whether you’re promoting boat cleaning services, engine repair or hull maintenance; connecting with local captains on Ship2Mates is where that happens. Easy-to-use platform connects you with clients searching for your marine services.",
      heropic:pic
      
    },

     {
      lastsectiontitle:"Looking to expand on a national scale? Access all the tools you need on Ship2Mates, or we can create your own App at RevillApps.com",
      lastsectiondesc:"Fill out this form for advanced App programs and increased growth opportunities.",
      lastpic:pic
      
    },

  ]


  return (
    <div>
           <MarineService MarineData={MarineData} />
           <OnlineCards />
           <BootsCards />
           <MarineServiceLast MarineData={MarineData} />
    </div>
  )
}

export default MarineServiceScreen
