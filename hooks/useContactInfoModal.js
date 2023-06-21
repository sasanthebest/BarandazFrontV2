import {create } from 'zustand'


const useContactInfoModal=create((set)=>({
    isOpen:false,
    data:'',
    onOpen:(data)=>set({isOpen:true,data:data}),
    onClose:()=>set({isOpen:false})
}))

export default useContactInfoModal