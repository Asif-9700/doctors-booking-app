import React from 'react'
import { assets } from '../assets/assets'

const Contact = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p>CONTACT <span className='text-gray-700 font semibold'>US</span></p>
      </div>

      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 text-sm '>
        <img className='w-full md:max-w-[360px]' src={assets.contact_image} alt="" />
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-semibold tex-lg text-gray-600'>Our Office</p>
          <p className='text-gray-500'>Prescripto HealthTech Pvt. Ltd. <br /> 3rd Floor, Cyber Heights, <br />Hyderabad, Telangana - 500081, India</p>
              <p className='text-gray-500'>Tel: (+91) 999-9999-999<br />Email: contact@prescripto.in</p>
          <p className='font-semibold text-lg text-gray-600'>Carrier at Prescripto</p>
          <p className='text-gray-500'>Learn more about our teams and job openings</p>
      

          <button className='border border-black px-8 py-4 text-sm hover:bg-primary hover:text-white transition-all duration-500'>Explore jobs</button>
        </div>
      </div>
    </div>
  )
}

export default Contact
