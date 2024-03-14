import React from 'react';
import { companyLogo1, companyLogo2, companyLogo3, companyLogo4  } from '../assets';

const Companies = () => {
  return (
    <div className='w-full bg-[#9CB3A9] py-[50px]'>
        <div className='md:max-w-[1480px] m-auto max-w-[600px]  px-4 md:px-0'>
            <h1 className='text-center text-2xl font-bold text-[#363F44]'>Joining this program has been a game-changer for our team.</h1>
            <p className='text-center  text-[#363F44] text-xl'>"The courses provided not only enhanced our skills but also fostered a deeper understanding of Ramadan principles within our workplace. Highly recommended!"</p>
            <div className='flex justify-center py-8 md:gap-8 '>
                <div className='grid md:grid-cols-4 grid-cols-2 gap-2'>
                  <img src={companyLogo1} />
                  <img src={companyLogo2} />
                  <img src={companyLogo3} />
                  <img src={companyLogo4} />
                </div>
            </div>
        
        </div>

    </div>
  )
}

export default Companies