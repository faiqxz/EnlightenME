import React from 'react'
import { cta } from '../assets'

const CTA = () => {
  return (
    <div className='w-full bg-[#BCD0CE] py-24'>
    <div className='md:max-w-[1480px] m-auto grid md:grid-cols-2 gap-8 max-w-[600px] items-center  px-4 md:px-0'>
                
        <img src={cta} className="w-[650px] mx-auto" />

        
        <div>
            <h1 className='py-2  text-3xl text-[#FBFBFB] font-semibold'>Unlock Your <span className='text-[#FEFFD3]'>Learning Journey</span> Today </h1>
            <p className='py-2 text-lg text-gray-600'>Join Our Community and Dive Into a World of Knowledge</p>
            <button className='max-[780px]:w-full my-4 px-8 py-5 rounded-md bg-[#363F44] text-white font-bold'>Sign Up For Free</button>

             
        </div>
        



    </div>
    

</div>
  )
}

export default CTA