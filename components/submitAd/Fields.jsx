

import React from 'react'
import Inpute from '../util/Inpute'

const Fields = ({label,helpText,inputId,inputeLabel,register,errors,type,inputRequired}) => {
  return (
    <div className='w-full'>
        <p>{label}</p>
        {helpText && <p className='text-xs text-stone-400 pt-1'>{helpText}</p>}
        <Inpute 
        id={inputId}
        label={inputeLabel}
        type={type}
        required={inputRequired}
        register={register}
        errors={errors}        
        />
    </div>
  )
}

export default Fields