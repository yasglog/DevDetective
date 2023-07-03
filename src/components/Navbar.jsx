import React, { useContext, useState } from 'react'
import { MdDarkMode } from 'react-icons/md';
import { AppContext } from '../context/AppContext';
import {BsSun} from 'react-icons/bs'
const Navbar = () => {
  const {theme,setTheme}=useContext(AppContext)
  
  function themeHandler(){
    setTheme("black")
  }
  function themeHandlersec(){
    setTheme("white")
  }
  return (
    <div className='min-w-[1000px]  mx-auto  flex flex-row j items-center justify-around  mt-8 ' >
      <div>
        <h2 className={`text-3xl font-semibold font-serif ${theme==="white"?('text-black'):('text-white')}`}>Github Profile</h2>
      </div>

      <div className='flex gap-3 items-center' >
        {
            theme==="white"?(<h2 className={`text-2xl font-medium font-serif `}>Light</h2>
            ):(<h2  className=' text-2xl font-medium font-serif text-white'>Dark</h2>
            )
        }
        {
          theme==="white"?(<MdDarkMode onClick={themeHandler} className=' text-xl'></MdDarkMode>
          ):(<BsSun  onClick={themeHandlersec} className='text-white text-xl'></BsSun>)
        }
      </div>
    </div>
  )
}

export default Navbar
