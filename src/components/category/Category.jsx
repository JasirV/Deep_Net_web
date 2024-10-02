import { leftImage, rightImage } from '../../assets/image/leftImage';
import HookahPage from '../hookah/HookahPage';
import BgImage from '../../assets/Rectangle 116.png'
import Mainfooter from '../mainfooter/Mainfooter';
import  Drinks  from '../drinks/Drinks';
import Cocktails from '../cocktails/Cocktails';
const Category = () => {

    const backimage = {
        backgroundImage: `url(${BgImage})`,
        backgroundSize: 'cover', 
        backgroundPosition: 'center', 
        backgroundRepeat: 'no-repeat' 
      };
    return (
      <div className="max-w-full flex justify-between pt-5" style={backimage }>
        {/* leftsaidImage */}
        <div className=' h-1/2 w-20% md:flex hidden flex-col gap-4'>
        {leftImage.map((i)=>(
          <img key={i} className="w-[50px] h-[50px] md:w-[100px] md:h-[100px] lg:w-[150px] lg:h-[180px] " src={i}  />
        ))}
        <div>

        </div>
        </div>
        {/* center */}
        <div className="md:max-w-[90%] w-full p-8">


          <div className='w-full'>
            <Drinks/>
            <Cocktails/>
          <HookahPage/>
          </div>
          <div className='flex justify-center mt-12 mb-12'>
          <button className='px-7 p-2 bg-[#0796EF] border border-[#0796EF] text-white '>ORDER ONLINE</button>
          </div>
          <div>
          <Mainfooter/>
          </div>
        </div>
        {/* RightSaidImage */}
        <div className='h-1/2 w-20% hidden md:flex flex-col gap-4'>
        {rightImage.map((i)=>(
          <img key={i} className="w-[50px] h-[50px] md:w-[100px] md:h-[100px] lg:w-[150px] lg:h-[180px] transform scale-x-[-1]" src={i}  />
        ))}
        </div>
      </div>
    )
  }
  
  export default Category;