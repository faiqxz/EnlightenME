import React from 'react'
import CategoryCard from './CategoryCard'
import {FaQuran, FaMoneyBillAlt, FaLanguage, FaPenNib, FaCarrot, FaBalanceScale, FaFemale, FaMosque } from 'react-icons/fa'

const Categories = () => {
  return (
    <div className='w-full bg-[#BCD0CE] py-24'>
        <div className='md:max-w-[1480px] m-auto max-w-[600px]  px-4 md:px-0'>
                <h1 className='md:leading-[72px] text-3xl text-[#FBFBFB] font-bold'>Most <span className='text-[#FEFFD3]'>Popular Categories</span></h1>
                <p className='text-lg text-[#363F44]'>"Explore Ramadan's Diverse Offerings"</p>
                
                <div className='grid lg:grid-cols-4 grid-cols-2 py-12 md:gap-4 gap-1'>
                    <CategoryCard  icons={<FaQuran size={30} />} title={'Quranic Studies'} />
                    <CategoryCard icons={<FaMoneyBillAlt size={30} />} title={'Islamic Finance'} />
                    <CategoryCard icons={<FaLanguage size={30} />} title={'Arabic Language'} />
                    <CategoryCard icons={<FaPenNib size={30} />} title={'Islamic Calligraphy'} />

                    <CategoryCard icons={<FaCarrot size={30} />} title={'Ramadan Nutrition'} />
                    <CategoryCard icons={<FaBalanceScale size={30} />} title={'Fiqh'} />
                    <CategoryCard icons={<FaFemale size={30} />} title={'Women in Islam'} />
                    <CategoryCard icons={<FaMosque size={30} />} title={'Prophet Muhammad Life'} />


                    

                </div>
        
        
        </div>
    </div>
  )
}

export default Categories