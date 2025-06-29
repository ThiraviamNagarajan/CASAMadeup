import { useState, useEffect } from 'react';
import pic1 from "../../assets/Images/3271O-TCM2063-SGI-3x2@2x 1 (1).png";
import pic2 from "../../assets/Images/105567013_161594148752707_5480959666164448316_n@2x 1.png";
import pic3 from "../../assets/Images/106480627_1412219725629450_480051060065323581_n@2x 1.png";
import mobilepic from "../../assets/Images/Mobilepic.jpg"
import Badge from '../../Common Components/Badge';
import DynamicButton from '../../Common Components/Button';

const Header = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const checkScreenSize = () => {
      setScreenWidth(window.innerWidth);
    };

    checkScreenSize();

    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  if (screenWidth < 768) {
    return (
      <div className="flex flex-col w-full">
        <div className='relative'>
          <img src={mobilepic} alt="mobile pic" className="w-full object-cover" />
          <div className='absolute top-[50%] left-[30%] flex justify-center'>
            <div className='flex flex-col gap-[10px] items-center'>
            <Badge text={"Clothes that respire"} highlight={"last"}/>
            <Badge text={"for men who aspire"} highlight={"last"}/>
             <div className='py-[30px]'>
              <DynamicButton padding='py-[12px] px-[18px]'>BROWSE COLLECTION</DynamicButton>
            </div>
            </div>
           
          </div>
        </div>
        
        <div className='relative'>
          <img 
            src={pic2} 
            alt="pic2" 
            className="w-full object-cover"
            style={{
              height: screenWidth < 500 ? 
                (screenWidth < 400 ? 'auto' : '50%') : 
                'auto'
            }}
          />
           <div className='absolute top-[50%] left-[30%] flex justify-center'>
            <div className='flex flex-col gap-[10px] items-center'>
            <Badge text={"Summer is here and"} highlight={"first"}/>
            <Badge text={"so is our collection"} highlight={"last"}/>
           
            </div>
           
          </div>

        </div>
        
        <div className='relative'>
          <img src={pic3} alt="pic3" className="w-full object-cover" />
            <div className='absolute top-[50%] left-[30%] flex justify-center'>
            <Badge text={"Wrinkle-free t-shirts"} highlight={"first"}/>
           
           
          </div>
        </div>
        
        <div className='relative'>
          <img 
            src={pic2} 
            alt="pic2" 
            className="w-full object-cover"
            style={{
              height: screenWidth < 500 ? 
                (screenWidth < 400 ? '50%' : 'auto') : 
                'auto'
            }}
          />
            <div className='absolute top-[50%] left-[30%] flex justify-center'>
            <Badge text={"Stain-free denim shirts"} highlight={"first"}/>
           
           
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col w-full ">
      <div className='relative'>
        <img src={pic1} alt="pic1" className="w-full object-cover" />
         <div className='absolute top-[40%] left-[45%] flex justify-center'>
            <div className='flex flex-col gap-[10px] items-center'>
            <Badge text={"Clothes that respire"} highlight={"last"}/>
            <Badge text={"for men who aspire"} highlight={"last"}/>
             <div className='py-[50px]'>
              <DynamicButton padding='py-[12px] px-[18px]'>BROWSE COLLECTION</DynamicButton>
            </div>
            </div>
           
          </div>
      </div>

      <div className="flex md:flex-row">
        <div className="w-full md:w-1/2 pr-1 relative">
          <img src={pic2} height={700} alt="Left Pic" className="w-full object-cover" />
           <div className='absolute top-[50%] left-[30%] flex justify-center'>
            <div className='flex flex-col gap-[10px] items-center'>
            <Badge text={"Summer is here and"} highlight={"first"}/>
            <Badge text={"so is our collection"} highlight={"last"}/>
           
            </div>
           
          </div>
        </div>

        <div className="w-full md:w-1/2 flex flex-col ">
        <div className='relative'>
          <img src={pic3} height={350} alt="Top Right" className="w-full object-cover" />
          <div className='absolute top-[50%] left-[40%] flex justify-center'>
            <Badge text={"Wrinkle-free t-shirts"} highlight={"first"}/>
           
           
          </div>
          </div>
          <div className='relative'>
          <img src={pic2} height={350} alt="Bottom Right" className="w-full  object-cover" />
           <div className='absolute top-[50%] left-[40%] flex justify-center'>
            <Badge text={"Stain-free denim shirts"} highlight={"first"}/>
           
           
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;