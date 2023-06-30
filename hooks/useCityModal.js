
import {create } from 'zustand'

const useCityModal=create((set)=>({
    isOpen:false,
    onOpen:()=>set({isOpen:true}),
    onClose:()=>set({isOpen:false})
}))

export default useCityModal