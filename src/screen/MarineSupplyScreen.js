import React from 'react'
import MarineService from '../components/MarineService/MarineService'
import MarineServiceLast from '../components/MarineService/MarineServiceLast'
import OnlineCards from '../components/home/onlineCards/OnlineCards'
import BootsCards from '../components/home/bootsprofilecards/BootsCards'
import supplypic from "../assets/supply.jpg"


const MarineSupplyScreen = () => {

  const MarineData=[
    {
      herotitle:"Marine Supply Stores That Connect",
      herodesc:"Ship2Mates™ promotes Shopping Local with global reach. Marine businesses harness the power of online, word-of-mouth marketing so you can reach customers where they are. Promote and grow your business with a built-in community of local boating enthuasiasts, already looking for your supplies.",
      heropic:supplypic
      
    },

     {
      lastsectiontitle:"Looking to expand on a national scale? Access all the tools you need on Ship2Mates, or we can create your own App at RevillApps.com",
      lastsectiondesc:"Fill out this form for advanced App programs and increased growth opportunities.",
      lastpic:supplypic,
    },

  ]



  return (
    <div>
           <MarineService MarineData={MarineData} />
             <BootsCards />
           <OnlineCards />
         
           <MarineServiceLast MarineData={MarineData} />
    </div>
  )
}

export default MarineSupplyScreen
