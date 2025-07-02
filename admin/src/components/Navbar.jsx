import React from 'react'
import logo from '../assets/goatadminn.png'

const Navbar = ({setToken}) => {
  return (
    <div className='flex items-center p-5 justify-between'>
        <img src={logo} alt="" className='w-45'/>
        <button onClick={() => setToken('')} className='bg-black text-white px-5 sm:px-7 sm:py-2 rounded-[50px] text-xs sm:text-sm'>Logout</button>
    </div>
  )
}

export default Navbar