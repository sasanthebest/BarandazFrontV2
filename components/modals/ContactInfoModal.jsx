'use client'

import React, { useEffect } from 'react'
import Modals from './Modal'
import useContactInfoModal from '@/hooks/useContactInfoModal'
import Button from '../util/Button'
import ButtonC from '../util/ButtonC'

const ContactInfoModal = () => {
    const contactInfoModal=useContactInfoModal()

    let bodyContent=(
        <div className='w-full h-full p-6 '>
        
            <div className='flex  justify-around'>
              <p>شماره تماس:</p>
              {contactInfoModal.data}
            </div>
            <div className='pt-4 text-rose-500 text-center flex flex-col gap-2'>
              <p className='text-rose-500 animate-ping text-sm'>هشدار:</p>
              <p>قبل از پرداخت هرگونه وجه از صحت کالا و خدمات ارائه شده اطمینان حاصل فرمائید.</p>
     
              </div>

        </div>
    )

    if (contactInfoModal.data==='hidden'){
      bodyContent=(
        <div className='w-full h-full p-6 '>
        
        <div className='flex flex-col items-center gap-4'>
          <p>شماره تماس مخفی شده است میتوانید در چت پیام دهید.</p>
        <ButtonC  label="پیام در چت"/>
        </div>

      </div>
      )}



  return (
    <Modals
    title="اطلاعات تماس"
    isOpen={contactInfoModal.isOpen}
    onClose={contactInfoModal.onClose}
    disabled={false}
    body={bodyContent}

  />
  )
}

export default ContactInfoModal