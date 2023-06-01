'use client'
import React from 'react'
import { useForm } from 'react-hook-form'
import TextInput from '../util/TextInput'
import CheckBox from '../util/CheckBox'
import Button from '../util/Button'
import Fields from './Fields'
import DropDown from '../util/DropDown'
import ImageUploader from './ImageUploader'
import { useBarandazContext } from '@/context/context'


const SubmitAd = ({helpText,slug}) => {
  const {allCities}=useBarandazContext()
  const {register,handleSubmit,formState:{errors},setValue,getValues}=useForm()
    
    const onSubmit=(data)=>{
      console.log(getValues('city'))
      data.category=slug
      
    }
  return (
    <div className='flex flex-col gap-5 items-start justify-center w-96 mb-4'>
        <DropDown id='city' register={register} cities={allCities} />
        <ImageUploader set={setValue} register={register} />
        <CheckBox id="show_phone_number" register={register} label="نمایش  شماره تلفن در آگهی"/>
        <Fields label="قیمت" inputId="price"  helpText="توضیحات" inputeLabel="قیمت" register={register} errors={errors} type="number" inputRequired={true}/>
        <Fields label="عنوان آگهی" inputId="title" helpText="توضیحات" inputeLabel="عنوان" register={register} errors={errors} type="text" inputRequired={true}/>
        <div>
        <p>جزییات آگهی</p>
        <p className='text-xs text-stone-400 pt-1'>توضیحات مربوط به توضیحات این دسته بندی</p>
        </div>
        <TextInput register={register}/>
        <div className='flex flex-row gap-1'>
          <Button onClick={handleSubmit(data=>onSubmit(data))} small label="ثبت"/>
          <Button small label="انصراف"/>
        </div>
    </div>
  )
}

export default SubmitAd