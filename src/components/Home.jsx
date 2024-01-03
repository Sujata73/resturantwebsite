import React from 'react'
import Button from '../layouts/Button'

const Home = () => {
  return (
    <div className="flex flex-row pt-80 pb-10  justify-between  items-center lg:px-32 px-5 bg-[url('./assets/hero.jpg')] bg-cover ">
        <div className='w-full lg:w-2/3 space-y-5'>
            <h1 className='text-backgroundColor font-semibold text-6xl'>Elevate Your Inner Foodie with Every Bite</h1>
            <p className='text-backgroundColor'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos quis nihil quisquam eveniet neque aperiam sed id eaque molestiae molestias necessitatibus error obcaecati, iusto animi optio itaque. Tempora, soluta et.</p>
            <div>
                <Button title="Order Now"/>
            </div>
        </div>
    </div>
  )
}

export default Home