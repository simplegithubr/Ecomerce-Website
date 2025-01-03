
import {products} from '@/app/data/product'
import React from 'react'
import Link from 'next/link'

import Servirse from '@/components/Servises'

export default function Product() {
  return (
    <div className='min-h-screen '>
    
     <p className='text-center p-4 underline font-bold text-3xl mt-5 '>Our Product</p>
    <div className='grid grid-cols-1 md:grid-cols-3 gap-6 w-[1100px] mx-auto py-10'>
      {products.map((product)=>(
        <div key={product.id} className='bg-white rounded-lg shadow-md overflow-hidden w-[350px] h-[400px]'>
          <img src={product.image} alt="" className='w-[70%] h-[60%]  ml-14 p-4' />
          <div className='p-4 text-center space-y-2'>
            <h1 className='text-lg font-semibold text-gray-800'>{product.title}</h1>
            <p>{product.categary}</p>
            <p className='text-red-500'>${product.price}</p>
          </div>
          <div className='flex justify-evenly  '>
           <button className='bg-blue-400 rounded-lg  px-3 text-white'>Add Card</button>
           <Link href={`/products/${product.id}`} className='text-center bg-pink-400 rounded-lg  px-3 text-white'>
           red more</Link>
           </div>
         
        </div>
       
      ))}
      
    </div>
    <Link href="/" className='text-center ml-[44%] bg-purple-600 px-4 p-2 rounded text-white'>Back To Home</Link>
    
   
    <Servirse/>
    </div>
  )
}