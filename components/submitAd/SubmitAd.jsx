'use client'
import React, { useEffect, useState } from 'react'
import { useForm, useFormContext } from 'react-hook-form'
import TextInput from '../util/TextInput'
import CheckBox from '../util/CheckBox'
import Button from '../util/Button'
import Fields from './Fields'
import DropDown from '../util/DropDown'
import ImageUploader from './ImageUploader'
import { useBarandazContext } from '@/context/context'
import { baseURL, submitAd } from '@/services/urls'
import axios from 'axios'
import { headers } from 'next/dist/client/components/headers'
import Inpute from '../util/Inpute'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from "yup";

// const schema=yup.object({
//   title:yup.string().required('لطفا عنوان آگهی را وارد کنید.'),
//   price:yup.string().required('لطفا فیلد قیمت را وارد کنید.'),
//   descriptions:yup.string().required('لطفا توضیحات آگهی را وارد کنید.'),
// })

const SubmitAd = ({dropDown,input,checkBox,currentCategory}) => {
  const {allCities}=useBarandazContext()
  const {register,handleSubmit,formState:{errors},setValue,getValues,setError}=useForm()



    const onSubmit=(data)=>{    
      const values=[]
      // console.log(data)
      
      dropDown.map(d=>{
        values.push(data[d.title])
        delete data[d.title]
      })
      input.map(i=>{
        values.push(data[i.title])
        delete data[i.title]
      
      })
      checkBox.map(c=>{
        values.push(data[c.title])
        delete data[c.title]
      })
      data.values=values

      
      
      console.log('data_will_send_to_user:',data)
     
      // axios.post('http://localhost:8000/submit_ad/',data,{
      //   headers:{
      //     'Accept': 'application/json',
      //     'Content-Type': 'multipart/form-data',
      //     'Authorization':'jwt eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjkzMjEyNjMzLCJqdGkiOiI1YzU4ODQ2ZjU0NjU0OWViYTVhNTJiZWQ4YWVmOTZiYyIsInVzZXJfaWQiOjF9.BnJouOMEVZ3RxXLCOgVk0OjwTa3Zil5k-6d7uOX7hkI'
      // }})
      // .then((res)=>{
      //   console.log(res.data)
      // })
    }


    useEffect(() => {
      setValue('category',currentCategory.id)
      
    }, [])


  return (
    <div className='flex flex-col gap-5 items-start justify-center w-96 mb-4'>
        {/* uniqu fields */}

        {
          currentCategory.adspecifics.length!=0 && (
           ( dropDown.map((item,index)=>(


              <DropDown 
              specifc 
              errors={errors} 
              register={register} 
              inputeTitle={item.title} 
              key={index} 
              sId={item.id} 
              id={item.title} 
              helpText={item.help_text}
              set={setValue} 
              data={item.drop_down_values}/> 
           )))
        )} 
        {
          currentCategory.adspecifics.length!=0 && (
        
            (input.map((item,index)=>(
              <Fields 
              info={item}  
              key={index} 
              set={setValue} 
              errors={errors} 
              register={register} 
              type="text"/> 
              
           )))
          )} 
        {
          currentCategory.adspecifics.length!=0 && (
          
            (checkBox.map((item,index)=>(
              <CheckBox 
              specifc 
              key={index} 
              sId={item.id} 
              id={item.title} 
              label={item.title} 
              helpText={item.help_text}
              register={register} 
              set={setValue}/> 
            )))

        )}  
        
          {/* common fields */}
        <DropDown inputeTitle="شهر" id='city' set={setValue} data={allCities} />
        <ImageUploader set={setValue} register={register} errors={errors} />
        <CheckBox set={setValue} id="show_phone_number" register={register} label="نمایش  شماره تلفن در آگهی"/>
        <Inpute label="قیمت" id="price"   register={register} errors={errors} type="number" required/>
        <Inpute label="عنوان آگهی" id="title"   register={register} errors={errors} type="text" required/>
        <div>
        <p>جزییات آگهی</p>
        <p className='text-xs text-stone-400 pt-1'>توضیحات مربوط به توضیحات این دسته بندی</p>
        </div>
        <TextInput id='descriptions' errors={errors} register={register}/>
        <div className='flex flex-row gap-1'>
          <Button onClick={handleSubmit(data=>onSubmit(data))} small label="ثبت"/>
          <Button small label="انصراف"/>
        </div>
    </div>
  )
}

export default SubmitAd