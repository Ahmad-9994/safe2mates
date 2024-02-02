import React from 'react'
import logo from "../../assets/logo.png"

const Navbar = () => {
  return (
    <div className='flex items-center py-2 sticky top-[0%] bg-white shadow-md'>
      <div className='md:w-[30%]  px-10 '><img src={logo} width={140}  height={140}/></div>
      <div className='w-[70%] hidden md:block '>
      <ul className='flex justify-end   align-center pr-10'>
      <li className='px-5 text-[1rem] text-[#0E5073]'>For Boating Enthusiasts</li>
        <li className='px-5 text-[1rem] text-[#0E5073]'>Bussiness & Services</li>
          <li className='px-5 text-[1rem] text-[#0E5073]'>Blogs</li>
          <li className='px-5 text-[1rem] text-[#0E5073]'>Contacts</li>
      </ul>
      </div>
    </div>
  )
}

export default Navbar
