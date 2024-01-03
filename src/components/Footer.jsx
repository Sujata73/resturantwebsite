import React from 'react'

const Footer = () => {
  return (
    <div className='bg-gradient-to-r from-black to-brightColor text-white mt-10'>
        <div className='flex flex-col md:flex-row justify-between  p-8 md:px-32 px-5'>
            <div  className='w-full lg:w-1/4 text-start ' >
                <h1 className='font-semibold text-xl'>FoodieWeb</h1>
                <p className='text-sm  pt-2'>Indulge in a symphony of flavors, where each plate is a canvas for culinary excellence.</p>
            </div>
         
            <div className='text-start'> 
                <h1 className='font-medium text-xl pb-4 pt-5 md:pt-0'>Links</h1>
                <nav className='flex flex-col  gap-2'>
                    <a className='hover:text-brightColor transition-all cursor-pointer' href='/'>Reviews</a>
                    <a className='hover:text-brightColor transition-all cursor-pointer' href="/">About</a>
                    <a className='hover:text-brightColor transition-all cursor-pointer' href="/">Menu</a>
                    <a className='hover:text-brightColor transition-all cursor-pointer' href='/'>Dishes</a>
                </nav>
            </div>
            <div className='text-start'>
                <h1 className='font-medium text-xl pb-4 pt-5 md:pt-0'>Links</h1>
                <nav className='flex flex-col gap-2 '>
                    <a className='hover:text-brightColor transition-all cursor-pointer' href='/'>Reviews</a>
                    <a className='hover:text-brightColor transition-all cursor-pointer' href="/">About</a>
                    <a className='hover:text-brightColor transition-all cursor-pointer' href="/">Menu</a>
                    <a className='hover:text-brightColor transition-all cursor-pointer' href='/'>Dishes</a>
                </nav>
            </div>
            <div className='text-start'>
                <h1 className='font-medium text-xl pb-4 pt-5 md:pt-0'>Links</h1>
                <nav className='flex  flex-col gap-2'>
                    <a className='hover:text-brightColor transition-all cursor-pointer' href='/'>Reviews</a>
                    <a className='hover:text-brightColor transition-all cursor-pointer' href="/">About</a>
                    <a className='hover:text-brightColor transition-all cursor-pointer' href="/">Menu</a>
                    <a className='hover:text-brightColor transition-all cursor-pointer' href='/'>Dishes</a>
                </nav>
            </div>
            </div>
     
        <div>
        <p className=' py-4'>@copyright developed by<span className='text-backgroundColor'>champion programers</span>|All rights reserved</p>
        </div>
    </div>
  )
}

export default Footer