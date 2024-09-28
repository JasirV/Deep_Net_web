import React, { useEffect, useState } from 'react'
import api from '../../api/axiosInstance'
import cocktail from '../../assets/cocktail 1.png'
import drinkImg from '../../assets/drink final 1.png'

const Drinks = () => {
    const [drinks,setDrinks]=useState([])
useEffect(()=>{
    const fetchDrinks= async ()=>{
        try {
            const response= await api.get(`/items/${"DRINKS"}`)
            setDrinks(response.data.items)
        } catch (error) {
            console.error(error)
        }
    }
    fetchDrinks()
},[])
console.log(drinks);

  return (
    <div className='border mb-3'>
  {/* Navediv */}
  <div className='flex justify-between items-center'>
    <img src={drinkImg} alt="drinkImg" className='md:w-36 md:h-32 w-16 h-20 md:relative -top-16 -left-12 ' />
    <div className='text-white flex items-center justify-center mt-5 md:gap-2'>
      <p className='font-extrabold '>_____</p>
      <p className='md:text-5xl font-extrabold custom-shadow text-4xl'>DRINKS</p>
      <p className='font-extrabold '>_____</p>
    </div>
    <img src={cocktail} alt="cocktail" className='md:w-36 md:h-32 w-16 h-20 mt-2 md:relative -top-14 left-10' />
  </div>

  {/* Drink List */}
  <div className="text-white p-10 grid grid-cols-1 md:grid-cols-2 gap-8">
    {drinks?.map((i, index) => (
      <div key={index} className="">
        <div className="flex justify-between items-center pb-2 mb-2 relative">
        <div className="w-3/4">
          <h3 className="text-xl font-bold tracking-wider">{i?.name}</h3>
        </div>
        <span className="text-lg font-bold text-white w-1/4 text-right">${i?.price}</span>
        {/* Dotted line */}
        <div className="absolute bottom-0 left-0 w-full border-b-2 border-dotted border-white mt-1" />
        </div>
        <p className="text-sm text-gray-400">{i?.description}</p>
      </div>
    ))}
  </div>
</div>
  )
}

export default Drinks
