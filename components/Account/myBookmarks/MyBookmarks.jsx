'use client'
import Image from "next/image";
import SaveIcon from "../../body/card/SaveIcon";
import ExpandableText from "../../ExpandeableText";
import { baseURL } from "@/services/urls";
import { useRouter } from "next/navigation";

const MyBookmarks = ({ data }) => {
  const router=useRouter()

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  m-2">
      {
        data.map((bookmark)=>(

      <div  key={bookmark.id} className="relative group/item border border-neutral-400 rounded m-1 flex flex-row justify-between items-start gap-4 ">

            <div onClick={()=>router.push(`/ads/${bookmark.content_type.code}`)} className="cursor-pointer flex flex-row gap-1">
              <div className="m-1 ">
                <Image className="h-full rounded" alt={bookmark.content_type.title} src={bookmark.content_type.image?baseURL+bookmark.content_type.image:'/logoC.png'} width={80} height={80}/>
              </div>
              <div className="flex flex-col gap-2 pt-1">
                  <div className="cursor-pointer hover:text-neutral-400">

                  <ExpandableText size={15} >{bookmark.content_type.title}</ExpandableText>
                  </div>
                  <p className="text-sm text-neutral-400">{bookmark.content_type.price}</p>
                  <p className="text-sm text-neutral-400">{bookmark.content_type.city_name}</p>
              </div>
            </div>
            <div className="absolute left-4 top-7 bottm-20 invisible group-hover/item:visible cursor-pointer ">
              <div className="text-sm text-neutral-400 relative border rounded bg-white p-3 hover:text-neutral-700"><p>{bookmark.content_type.title}</p></div>
            </div>
  
          
            <div  className="pl-8 pt-1 text-rose-500 hover:text-rose-300">
              <SaveIcon/>
            </div>
        </div>
        ))
      }
      </div>

  )
 
};

export default MyBookmarks;
