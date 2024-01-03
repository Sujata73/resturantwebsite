import React from 'react'

const ReviewCard = (props) => {
  return (
    <div className='w-full lg:w-1/3 bg-white  border-4 border-lightText md:border-none p-5 rounded-lg shadow-md '>
        <div className='text-lightText'>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. In distinctio ad, quasi doloremque reprehenderit natus, earum odit aliquid itaque culpa magni aspernatur eligendi delectus, provident velit? Mollitia quas facilis possimus?</p>
        </div>
        <div className='flex flex-row justify-center items-center  mt-4 gap-4'>
            <img  className="rounded-full w-1/4" src={props.img} alt="img"/>
            <h3 className='font-semibold'>{props.name}</h3>
        </div>
    </div>
  )
}

export default ReviewCard