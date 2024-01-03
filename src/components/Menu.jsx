import React from 'react'
import DishesCard from '../layouts/DishesCard'
import menu1 from '../assets/menu1.jpg'
import menu2 from '../assets/menu2.jpg'
import menu3 from '../assets/menu3.jpg'
import menu4 from '../assets/menu4.jpg'

const Menu = () => {
  return (
    <div className='flex flex-col justify-center items-center lg:px-32 px-5'>
        <h1 className='font-semibold text-4xl lg:pt-8 pt-52 pb-14'>Premium Menu</h1>
        <div className='flex flex-wrap gap-20 justify-center '>
            <DishesCard img={menu1} title="Delicious Dish" price="$16.80"/>
            <DishesCard img={menu2} title="Delicious Dish" price="$18.80"/>
            <DishesCard img={menu3} title="Delicious Dish" price="$19.80"/>
            <DishesCard img={menu4} title="Delicious Dish"price="$20.80"/>
           
        </div>
    </div>
  )
}

export default Menu