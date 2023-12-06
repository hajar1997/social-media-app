import React from 'react'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ContactForm } from '@/components'

const Contact = () => {
  return (
    <div className='mt-4 px-5 py-5'>
      <FontAwesomeIcon fontSize={24} icon={faEnvelope} className='p-2 mb-3 bg-[#e3694a] rounded-md' />
      <h1 className='text-[33px] font-semibold'>How can we help?</h1>
      <h2 className='text-[20px] text-[#99a2ab]'>We'd love to hear from you</h2>
      <ContactForm />
    </div>
  )
}

export default Contact