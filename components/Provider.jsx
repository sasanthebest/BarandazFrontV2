'use client'

import { BarandazWrapper } from '@/context/context'
import { SessionProvider } from 'next-auth/react'
import React from 'react'

const Provider = ({children,session}) => {
  return (
    <SessionProvider session={session}>
      <BarandazWrapper>{children}</BarandazWrapper>
    </SessionProvider>
  );
}

export default Provider