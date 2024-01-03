import React from 'react'
import Button from '../layouts/Button'

const About = () => {
  return (
    <div className='flex  flex-col lg:flex-row justify-center items-center gap-10 pb-10 pt-12 lg:px-32 px-5 '>
        <img  src={require('../assets/about.png')} alt=""/>
        <div className='space-y-2 lg:pt-14'>
            <h1 className='font-semibold text-4xl text-center lg:text-start'>Why Choose Us?</h1>
            <p className='text-start '>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora suscipit ut esse culpa magni nulla omnis autem. Voluptatum aliquam expedita, dolor nobis quas natus impedit quae, inventore tempore officia veritatis.</p>
            <p className='text-start'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, est fuga accusamus ipsum officia laborum repellat aliquam ipsam velit cumque, quos vero unde, tenetur consectetur assumenda magnam. Ratione, aperiam hic?</p>
            <div className="flex justify-center lg:justify-start">
                <Button  title="Learn More"/>
            </div>
        </div>
    </div>
  )
}

export default About