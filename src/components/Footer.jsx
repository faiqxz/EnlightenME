import React from 'react'
import { logo } from '../assets'
import {FaFacebookF,FaDribbble,FaLinkedinIn,FaInstagram,FaBehance} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='w-full bg-[#9CB3A9] py-24'>
        <div className='md:max-w-[1480px] m-auto grid md:grid-cols-5 max-[780px]:grid-cols-2  gap-8 max-w-[600px]  px-4 md:px-0'>
            
            <div className='col-span-2'>
                <img src={logo} className="h-[25px]" />
                <h3 className='text-2xl font-bold mt-10'>Contact Us</h3>
                <h3 className='py-2 text-[#363F44]'>Call : +123 400 123</h3>
                <h3 className='py-2 text-[#363F44]'>Join Our Community and Dive Into <br></br> a World of Knowledge</h3>
                <h3 className='py-2 text-[#363F44]'>Email: faiqsc@mail.com</h3>
                <div className='flex gap-4 py-4'>
                        <div className='p-4 bg-[#BCD0CE] rounded-xl'><FaFacebookF size={25} style={{color:'#363F44'}} /></div>
                        <div className='p-4 bg-[#BCD0CE] rounded-xl'><FaDribbble size={25} style={{color:'#363F44'}} /></div>
                        <div className='p-4 bg-[#BCD0CE] rounded-xl'><FaLinkedinIn size={25} style={{color:'#363F44'}} /></div>
                        <div className='p-4 bg-[#BCD0CE] rounded-xl'><FaInstagram size={25} style={{color:'#363F44'}} /></div>
                        <div className='p-4 bg-[#BCD0CE] rounded-xl'><FaBehance size={25} style={{color:'#363F44'}} /></div>

                </div>

            </div>

            <div>
                <h3 className='text-2xl font-bold'>Explore</h3>
                <ul className='py-6 text-[#363F44]'>
                    <li className='py-2'>Home</li>
                    <li className='py-2'>About</li>
                    <li className='py-2'>Course</li>
                    <li className='py-2'>Blog</li>
                    <li className='py-2'>Contact</li>

                </ul>
            </div>

            <div>
                <h3 className='text-2xl font-bold'>Category</h3>
                <ul className='py-6 text-[#363F44]'>
                    <li className='py-2'>Quranic Studies</li>
                    <li className='py-2'>Islamic Finance</li>
                    <li className='py-2'>Arabic Language</li>
                    <li className='py-2'>Islamic Calligraphy</li>
                    <li className='py-2'>Ramadan Nutrition</li>
                    <li className='py-2'>Fiqh</li>
                    <li className='py-2'>Women in Islam</li>
                    <li className='py-2'>Prophet Muhammad Life</li>

                </ul>
            </div>

            <div className='max-[780px]:col-span-2'>
                <h3 className='text-2xl font-bold'>Subscribe</h3>
                <h3 className='py-2 text-[#363F44]'>Join Our Community and Dive Into  <br></br> a World of Knowledge.</h3>
                <form className='py-4'>
                    <input 
                        className='bg-[#F2F3F4] p-4 w-full rounded' 
                        placeholder='Email here' 
                    />
                    <button className='max-[780px]:w-full my-4 px-5 py-3 rounded-md bg-[#363F44] text-white font-medium'>Subscribe Now</button>

                </form>


            </div>
        
        </div>
    </div>
  )
}

export default Footer