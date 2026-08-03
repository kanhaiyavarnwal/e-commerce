import React from 'react'
import Title from '../components/Title'
import NewsletterBox from '../components/NewsletterBox'
import { assets } from '../assets/assets'

export default function About() {
  return (
    <div>
      <div className='text-2xl text-center pt-8 torder-t'>
        <Title text1={'ABOUT'} text2={'US'}/>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px] ' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio veritatis saepe illum? Blanditiis, reprehenderit delectus quod corporis nam impedit architecto praesentium quisquam a voluptatum quo in maxime dolore eos ex!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, in provident. Numquam ipsum labore quo maiores recusandae sint ratione atque? Repudiandae quam quibusdam nobis illum a blanditiis explicabo perspiciatis voluptates?</p>
        <b className='text-gray-800'>Our Mission</b>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In provident, possimus molestiae quae quaerat dignissimos eius ipsum, quisquam dolore sequi corrupti explicabo molestias aliquid nobis sint. Debitis accusantium adipisci beatae.</p>
        </div>

      </div>
      <div className='text-xl py-4 '>
        <Title text1={'WHY'} text2={'CHOOSE US'}/>

      </div>
      <div className='flex gap-[4px] flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b >Quality Assurance</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio aliquid qui, eligendi voluptate, tempore laudantium voluptatibus laborum corrupti nostrum doloribus aperiam alias placeat? Hic assumenda accusantium, suscipit quae quasi ullam.</p>
        </div>

        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b >Convennience</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio aliquid qui, eligendi voluptate, tempore laudantium voluptatibus laborum corrupti nostrum doloribus aperiam alias placeat? Hic assumenda accusantium, suscipit quae quasi ullam.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b >Exceptional Customer Services</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio aliquid qui, eligendi voluptate, tempore laudantium voluptatibus laborum corrupti nostrum doloribus aperiam alias placeat? Hic assumenda accusantium, suscipit quae quasi ullam.</p>
        </div>

      </div>
      <NewsletterBox/>
      
      
      
      
      </div>
  )
}
