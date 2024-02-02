import React from 'react'
import HeroSection from '../components/home/herosection/HeroSection'
import BootsCards from '../components/home/bootsprofilecards/BootsCards'
import OnlineCards from '../components/home/onlineCards/OnlineCards'
import ProfileCards from '../components/home/profileCards/ProfileCards'
import GallaryCards from '../components/home/gallaryCards/GallaryCards'




const Home = () => {
  return (
    <div>
    <HeroSection />
    <BootsCards />
    <OnlineCards />
    <ProfileCards />
    <GallaryCards />
    
    </div>
  )
}

export default Home
