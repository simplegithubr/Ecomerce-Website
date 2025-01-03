
import React from 'react'
import Image from 'next/image'

export default function NewArrival() {
  return (
    <div className='mt-9 p-5 bg-black text-white'>
        <div className='flex justify-evenly '>
            <Image src="/product1 (3).png" alt='' width={200} height={200}></Image>
            <div className='flex flex-col justify-evenly mr-14'>
                <h3 className='text-xl font-sans'>New Arrivals</h3>
                <h1 className='font-bold text-xs'>Stay ahead with our newest collection of smartphones accessories and gadgets Grab them before they re gone</h1>
               
                <button className='border border-white p-2 '>Order Now</button>
            </div>
        </div>
      
    </div>
  )
}
