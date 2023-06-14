'use client'

import React from 'react'
import Modals from './Modal'
import useContactInfoModal from '@/hooks/useInfoModal'

const ContactInfoModal = () => {
    const contactInfoModa=useContactInfoModal()

    const bodyContent=(
        <div>salam</div>
    )
  return (
    <Modals
    title="اطلاعات تماس"
    isOpen={contactInfoModa.isOpen}
    onClose={contactInfoModa.onClose}
    disabled={false}
    body={bodyContent}
  />
  )
}

export default ContactInfoModal