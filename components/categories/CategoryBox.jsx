'use client'
import { useRouter } from "next/navigation";

const CategoryBox = ({ category }) => {
  const router = useRouter();
  return (
    <div className="flex flex-col gap-1 items-center cursor-pointer">
      <div
        onClick={() => router.push(`category/${category.id}`)}
        className="hover:text-neutral-400 flex flex-row gap-1 items-center text-sm"
      >
        <category.icon className="text-stone-500" size={20} />
        {category.title}
      </div>
    </div>
  );
};

export default CategoryBox;
