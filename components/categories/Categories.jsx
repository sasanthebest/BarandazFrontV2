'use client'
import { categories } from "@/services/categories";
import CategoryBox from "./CategoryBox";
import CommonCategoryDetails from "./CommonCategoryDetails";

const Categories = () => {
  return (
    <div className='overflow-x-auto overflow-hidden'>
        <div className='flex flex-col gap-2 pl-4 pr-2'>
            {
              categories.map((ca,index)=>(
                <CategoryBox key={index} slug={ca.slug} title={ca.title} icon={ca.icon}/>
                
              ))
            }
            <hr className='mt-5'/>
            <CommonCategoryDetails/>
        </div>
    </div>
  );
};

export default Categories;
