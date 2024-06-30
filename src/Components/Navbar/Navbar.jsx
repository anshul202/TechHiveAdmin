import React from 'react'
import logo from '../../assets/logo _nobg.svg'
import adminlogo from '../../assets/admin.png'
const Navbar = () => {
  return (
    <div className='navbar flex justify-between align-center py-[9px] px-[60px] shadow-xl mb-[1px] bg-white md:py-7 md:px-28'>
        <div className='navleft flex items-center w-auto'>
            <img src={logo} alt="log" className='navlogo h-20 w-20 md:h-7 md:w-7 '/>
            <div>
            <h3 className='text-xl bg-clip-text bg-gradient-to-r from-black to bg-gray-600 text-transparent font-bold'>TechHive</h3>
            <p className='bg-gradient-to-r from-red-700 to bg-orange-400 bg-clip-text text-transparent text-xs'>Admin Panel</p>
            </div>
        </div>
        <img src={adminlogo} className='h-12 w-12 rounded-full p-2 shadow-2xl shadow-black outline-black' />

    </div>
  )
}

export default Navbar