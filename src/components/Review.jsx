import React from 'react'
import ReviewCard from '../layouts/ReviewCard'
import pic1 from '../assets/pic1 (1).png'
import pic2 from '../assets/pic2.png'
import pic3 from '../assets/pic3.png'

const Review = () => {
  return (
    <div className='lg:px-32 px-5 flex flex-col '><h1 className='text-4xl font-semibold text-center lg:pt-16 pt-24 pb-10'>Customer's Review</h1>
    <div className=' flex  flex-col gap-5 justify-center md:flex-row mt-5'>
    <ReviewCard img={pic1} name="shophia azura"/>
    <ReviewCard img={pic2} name="ross"/>
    <ReviewCard img={pic3}  name="Rachel"/>
    </div>
   
    </div>
  )
}

export default Review