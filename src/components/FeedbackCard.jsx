import React from 'react'
import { avatar, quotationMark } from '../assets'

const FeedbackCard = () => {
  return (
    <div className='bg-white p-8 rounded-3xl shadow-xl my-8 mx-2'>
      <div className='flex justify-between'>
        <div className='flex gap-4'>
                <img src={avatar} />
                <div>
                    <h1>Muhammad Farhan</h1>
                    <p>Al-Furqon Student</p>
                </div>
            
            </div>
            <img className='h-8' src={quotationMark} />
      </div>

      <div className='py-8'>
        <h3 className='text-lg'>"The courses on EnligtenMe have truly enriched my Ramadan experience. I've gained valuable knowledge and skills that I can apply in my daily life. Highly recommended!" - M.F.</h3>
      </div>
    </div>
  )
}

export default FeedbackCard