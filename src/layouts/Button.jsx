import React from 'react'

const Button = (props) => {
  return (
    <div className=''>
        <button className='border-2 border-brightColor px-6 py-1 text-brightColor hover:bg-brightColor hover:text-white rounded-full transition-all'>{props.title}</button>
    </div>
  )
}

export default Button