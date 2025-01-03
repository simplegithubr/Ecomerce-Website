
import { products } from '@/app/data/product'
import React from 'react'
import { notFound } from 'next/navigation';

interface ProductPageProps{
    params: {id: string}
}


  


 const ProductPage = ({params}: ProductPageProps) => {
   

 const product = products.find((p) => p.id === params.id);
 if(!product){
  notFound()
 }


  return (
    <div className='flex   '>
      <img src={product.image} alt={product.title} className='ml-8 p-4 ' />
      <div className='text-center mt-14 p-14 ml-9 space-y-3 '>
        <h1 className='text-2xl font-bold mb-4'>{product.title}</h1>
        <p className='text-gray-600 mb-4 '>{product.categary}</p>
        <p className='text-gray-500 text-xl font-semibold'>{product.description}</p>
        <p className='text-red-500'>${product.price}</p>
      </div>
    </div>
  )
}

export default ProductPage

