import React from 'react';
import { heroImg } from '../assets';
import  {AiOutlineSearch} from 'react-icons/ai'

const Hero = () => {
  return (
    <div className='w-full bg-[#9CB3A9] py-24'>
        <div className='md:max-w-[1480px] m-auto grid md:grid-cols-2 max-w-[600px]  px-4 md:px-0'>
            
            <div className='flex flex-col justify-start gap-4'>
                <p className='py-2 text-2xl text-[#363F44] font-medium'>START TO SUCCESSFUL RAMADHAN</p>
                <h1 className='md:leading-[72px] py-1 text-[#FBFBFB] md:text-5xl text-4xl font-semibold'>Elevate Your <span className='text-[#FEFFD3]'>Ramadan</span> Experience with <span  className='text-[#FEFFD3]'>Knowledge</span> and <span  className='text-[#FEFFD3]'>Reflection.</span>
                </h1>
                <p className='py-2 text-lg text-gray-600'>Explore various activities during your fast</p>
                
                <form className='bg-[#363F44] max-w-[500px] p-4 input-box-shadow rounded-md flex justify-between'>
                    <input 
                        className='bg-[#363F44]'
                        type="text"
                        placeholder='Explore Courses'
                    />
                    <button>
                        <AiOutlineSearch 
                            size={20}
                            className="icon"
                            style={{color:'#363F44'}}

                        />

                    </button>
                </form>
            </div>
            
            <img  src={heroImg} className="md:order-last  order-first" />



        </div>
        

    </div>
  )
}

export default Hero