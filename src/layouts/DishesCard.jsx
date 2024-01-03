import React from 'react'
import {BsStarFill, BsStarHalf} from 'react-icons/bs'
import Button from './Button'

const DishesCard = (props) => {
  return (
    <div className='w-full lg:w-1/4 shadow-md p-5 border rounded-md  hover:-translate-y-2 hover:bg-black hover:text-white duration-700'><img src={props.img} alt='img'/>
    <div className='space-y-4'>
        <h3 className='font-semibold text-center text-xl pt-6'>{props.title}</h3>
        <div className='flex flex-row justify-center'>
            <BsStarFill className='text-brightColor'/>
            <BsStarFill className='text-brightColor'/>
            <BsStarFill className='text-brightColor'/>
            <BsStarFill className='text-brightColor'/>
            <BsStarFill className='text-brightColor'/>
            <BsStarHalf className='text-brightColor'/>
        </div>
        <div className='flex flex-row justify-center items-center gap-4 '>
            <h3 className='text-lg font font-semibold'>{props.price}</h3>
            <Button title="Buy Now"/>
        </div>
    </div>
    </div>
  )
}

export default DishesCard