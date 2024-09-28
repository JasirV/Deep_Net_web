import React from 'react'
import ImageH from '../../assets/imageH.png'

const HookahPage = () => {
  return (
    <div className=' w-full border border-white pb-12'>
        <div className='flex justify-center mt-4'>
        <img src={ImageH} alt="" />
        </div>
        <div className='text-white flex items-center text-center md:justify-center mt-5 md:gap-2  '>
            <p className='font-extrabold md:flex'>_____</p>
             <p className='md:text-5xl font-extrabold custom-shadow text-5xl'>HOOKAH FLAVORS</p>
            <p className='font-extrabold md:flex'>_____</p>
        </div>
        <div className='flex justify-evenly text-white md:mt-12 mt-6 md:flex-row flex-col items-center gap-1 md:gap-0'>
            <p className='font-bold text-lg'>ORANGE MINT</p>
            <p className='font-bold text-lg'>BLUE MIST</p>
            <p className='font-bold text-lg'>MIGHTY FREEZE</p>
            <p className='font-bold text-lg'>LUV 66</p>
            <p className='font-bold text-lg'>PEACH</p>
            <p className='font-bold text-lg'>WATERMELON</p>
        </div>
    </div>
  )
}

export default HookahPage