import React, { useState } from 'react'
import { BiRestaurant } from "react-icons/bi";
import Button from '../layouts/Button';
import { AiOutlineClose } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { BiChevronDown } from "react-icons/bi";

const Navbar = () => {
    const[menu,setMenu]=useState(false)
    const handleChange=()=>{
        setMenu(!menu)
    }
  return (
    <div className='fixed w-full z-10 '>
        <div >
            <div>
                <div className='flex flex-row justify-between bg-white lg:px-32 px-5 p-5 shadow-md' >
                    <div className='flex flex-row items-center cursor-pointer gap-1'><span><BiRestaurant  size={32}/></span><h1 className='text-xl font-semibold'>FoodieWeb</h1></div>
                    <nav className=' hidden md:flex flex-row  list-none gap-10  font-medium text-lg '>
                        <li className='hover:text-brightColor cursor-pointer transition-all '>Home </li>
                       <div className='group   relative '>
                        <div className='flex  items-center'><li className='hover:text-brightColor cursor-pointer  transition-all'>Dishes</li>
                       <BiChevronDown className="cursor-pointer"/></div>
                        <ul className='hidden group-hover:block absolute space-y-2 bg-white border border-gray-300 rounded-md p-5 '>
                            <li  className='hover:text-brightColor cursor-pointer transition-all'>Spicy</li>
                            <li  className='hover:text-brightColor cursor-pointer transition-all'>Taste</li>
                            <li  className='hover:text-brightColor cursor-pointer transition-all'>Crespy</li>
                        </ul>
                        </div> 
                        <li className='hover:text-brightColor cursor-pointer transition-all'>About</li>
                        <li className='hover:text-brightColor cursor-pointer transition-all'>Menu</li>
                        <li className='hover:text-brightColor cursor-pointer transition-all' >Reviews</li>
                    </nav>
                    <div className='lg::block hidden'><Button title='login'/></div>
                    <div className='md:hidden  flex items-center'>
                        {menu?(
                         <AiOutlineClose  className='z-10' onClick={handleChange}/>
                          ):(<GiHamburgerMenu onClick={handleChange} />)}
                    </div>
                    <div className={`${menu? "absolute left-0 top-16 bg-black text-white w-full gap-10 flex flex-col items-center justify-center h-96":" absolute  space-y-2 left-[-100%] "}`}>
                        <li>Home</li>
                        <li>Menu</li>
                        <li>Reviews</li>
                        <li>Reviews</li>
                        <Button title='login'/>
                    </div>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar