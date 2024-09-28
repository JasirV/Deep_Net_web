import ButtonBg from '../../assets/ButtonBg.png'

const Buttons = () => {
  return (
    <div className='className="w-full  brightness-150  flex flex-col items-center justify-center text-center text-white'
      style={{ backgroundImage: `url(${ButtonBg})` }}>
        <div className='space-x-4 p-6'>

            <button className='px-6 p-2 bg-[#000000] border border-[#0796EF]'>FOOD</button>
            <button className='px-6 p-2 bg-[#0796EF] border border-[#0796EF]'>DRINKS</button>
            <button className='px-6 p-2 bg-[#000000] border border-[#0796EF]'>BRUNCH</button>
        </div>
    </div>
  )
}

export default Buttons
