import React from 'react'
import Image from 'next/image'

function Hero() {
  return (
    <div className='flex justify-evenly p-6 mt-9 bg-pink-300 '>
    
      <div className='space-y-4 mt-16  '>
        <h1 className='font-bold text-3xl text-gray-white'>Welcome to Kinzaa s Bazar</h1>
        <p className='text-xl font-sans text-gray-500 ml-4  '>Your one stop shop for amazing products</p>
       
        <button className='bg-blue-600 p-2 rounded ml-[33%] text-white px-3 hover:bg-slate-500'> Shop Now</button>
   
      </div>
      <Image src='/hero.png' alt='heroimg' width={400} height={400}></Image>
    </div>
  )
}

export default Hero