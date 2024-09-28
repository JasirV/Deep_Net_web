import React from 'react'

const Mainfooter = () => {
  return (
    <div className='bg-[#6e582f] md:flex p-4 text-white text-center'>
        <div className=' md:w-1/3 w-full p-3 border-b-2 md:border-r-2 md:border-b-0 border-dotted border-white'>
            <p className='text-base font-light font-serif'>Food may not be refunded. If your food was made incorrectly we will remake it for you.</p>
        </div>
        <div className='md:w-1/3 w-full p-3 border-b-2 md:border-r-2 md:border-b-0 border-dotted border-white'>
            <p className='text-base font-light font-serif'>18% service charge will be added to all checks over $100.</p>
        </div>
        <div className='w-full md:w-1/3 p-3'>
            <p className='text-base font-light font-serif'>Consuming raw or undercooked meats, poultry, seafood, shellfish or eggs may increase your risk of foodborne illness</p>
        </div>
    </div>
  )
}

export default Mainfooter