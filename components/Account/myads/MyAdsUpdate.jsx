'use client'

import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import Inpute from '../../util/Inpute'
import CheckBox from '../../util/CheckBox'
import DropDown from '../../util/DropDown'
import ImageUploader from '../../submitAd/ImageUploader'
import { useBarandazContext } from '@/context/context'
import TextInput from '../../util/TextInput'
import Button from '../../util/Button'
import TinyImages from './TinyImages'


const MyAdsUpdate = ({singleAd}) => {
    const {id,title,category,images,description,price,code,
        is_exchangeable,is_urgent,city_name,category_name,created_at,show_phone,adspecificvalue}=singleAd

    // const {allCategories,allCities}=useBarandazContext()
    // console.log(allCategories)
    // console.log(allCities)

    // const currentCategory=allCategories.filter(ca=>ca.slug==slug)[0]
    // const currentSubCategory=allCategories.filter(ca=>ca.parent==currentCategory.id)
    // const currentParentCategory=allCategories.filter(ca=>ca.id==currentSubCategory[0]?.parent)
    const {register,handleSubmit,formState:{errors},setValue}=useForm()


    // if (allCategories.length!=0){

    //     var currentCategoryDropDownArray=[...(allCategories.filter(ca=>ca.slug==slug)[0]?.adspecifics.filter(i=>
    //         i.field_type=='drop_down'
    //     ))]
    //     var currentCategoryInputArray=[...(allCategories.filter(ca=>ca.slug==slug)[0]?.adspecifics.filter(i=>
    //         i.field_type=='input'
    //     ))]
    //     var currentCategoryCheckboxArray=[...(allCategories.filter(ca=>ca.slug==slug)[0]?.adspecifics.filter(i=>
    //         i.field_type=='checkbox'
    //     ))]
    // }
  
  
      const onSubmit=(data)=>{    
        const values=[]
        // console.log(data)
        
        currentCategoryDropDownArray.map(d=>{
          values.push(data[d.title])
          delete data[d.title]
        })
        currentCategoryInputArray.map(i=>{
          values.push(data[i.title])
          delete data[i.title]
        
        })
        currentCategoryCheckboxArray.map(c=>{
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
  
  
      // useEffect(() => {
      //   setValue('category',currentCategory.id)
        
      // }, [])
  
  
    return (
      <div className='flex justify-center'>

      <div className='flex flex-col gap-5 items-start justify-center w-96 mb-4'>
          {/* uniqu fields */}

          {/* {
            currentCategory.adspecifics.length!=0 && (
              ( currentCategoryDropDownArray.map((item,index)=>(
                
                
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
                    
                    (currentCategoryInputArray.map((item,index)=>(
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
                    
                    (currentCategoryCheckboxArray.map((item,index)=>(
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
                      
                    )}   */}

            {/* common fields */}
          {/* <DropDown inputeTitle="شهر" id='city' set={setValue} data={allCities} /> */}
          <ImageUploader set={setValue} register={register} errors={errors} />
          <TinyImages images={images} title={title} code={code} id={id}/>
          <CheckBox set={setValue} id="show_phone_number" register={register} label="نمایش  شماره تلفن در آگهی"/>
          <Inpute label="قیمت" id="price"   register={register} errors={errors} type="number" required/>
          <Inpute label="عنوان آگهی" id="title"   register={register} errors={errors} type="text" required/>
          <div>
          <p>جزییات آگهی</p>
          <p className='text-xs text-stone-400 pt-1'>توضیحات مربوط به توضیحات این دسته بندی</p>
          </div>
          <TextInput id='descriptions' errors={errors} register={register} placeholder="توضیحات"/>
          <div className='flex flex-row gap-1'>
            <Button onClick={handleSubmit(data=>onSubmit(data))} small label="ثبت"/>
            <Button small label="انصراف"/>
          </div>
          </div>
      </div>
    )
  }
  
  export default MyAdsUpdate