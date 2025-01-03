
import React from 'react'
import Image from 'next/image'

function page() {
  return (
    <div>
    <div className='w-full p-9 space-y-3 shadow-md'>
        <h1 className='text-3xl font-bold'>About</h1>
        <div className='flex space-x-2'>
            <p className='text-gray-400'>Home</p>
            <p className='text-gray-400'>/</p>
            <p className='text-gray-400'>About</p>
        </div>
        <div className='flex w-[700px] mx-auto '>
          
          <div className=' '>
            <h1 className='font-bold text-2xl' >About Kinzaa s Bazar</h1>
            <p className='mt-3 '>Welcome to Kinzaas Bazar your one-stop destination for unique and high-quality products Founded by Kinzaa, an artist with a passion for creativity our e-commerce store brings together art elegance and utility.

At Kinzaas Bazar we believe in offering handpicked items that reflect artistry and style Whether you re shopping for yourself or looking for the perfect gift we have something special for everyone

Thank you for supporting a small business with big dreams We are committed to providing you with the best shopping experience every time

</p>
          </div>
          <Image src="/hero.png" alt='' width={300} height={200} ></Image>
        </div>
       
       
    </div>
  
</div>
  )
}

export default page