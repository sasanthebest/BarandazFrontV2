"use client";
import React, { useEffect, useState } from "react";
import { useBarandazContext } from "@/context/context";
import useContactInfoModal from "@/hooks/useInfoModal";
import Image from "next/image";
import { FaLocationArrow, FaSkyatlas } from "react-icons/fa";
import { HiOutlineShare } from "react-icons/hi2";
import ArrowTiltle from "../../../frontend/components/util/ArrowTiltle";
import TextInput from "../../../frontend/components/util/TextInput";
import { useForm } from "react-hook-form";
import axios from "axios";
import { baseURL, deleteBookmark, newBookmark } from "@/services/urls";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import useLoginModal from "@/hooks/useLoginModal";
import { addBookmark, getMyBookMarks } from "@/services/userServices";

const AdsDetail = ({ singleAd, bookmarkId }) => {
  const [bookMarkId, setbookMarkId] = useState(bookmarkId);

  const { allCategories } = useBarandazContext();
  const session = useSession();
  const accessToken = session?.data?.token?.access;
  const loginModal = useLoginModal();
  const {
    register,
    formState: { errors },
  } = useForm();
  const {
      id,
      title,
      category,
      images,
      description,
      price,
      is_exchangeable,
      is_urgent,
      city_name,
      category_name,
      created_at,
      show_phone,
      adspecificvalue,
    } = singleAd;
    
    const parenCategory =
      category.parent !== null
        ? allCategories?.filter((ca) => ca.id === category.parent)[0]
        : false;
    const grandPaCategory = parenCategory
      ? allCategories?.filter((ca) => ca.id === parenCategory.parent)[0]
      : false;
    // console.log("second:", allCategories);
    // console.log('level3',bookmarkId)
  // console.log(accessToken);

  const [mainImgSrc, setMainImgSrc] = useState("/j6.jpg");
  const imgs = [
    "/j1.jpg",
    "/j2.jpg",
    "/j3.jpg",
    "/j4.jpg",
    "/j5.jpg",
    "/j6.jpg",
    "/j7.jpg",
  ];

  const info = useContactInfoModal();
  ///////////////////UseEffects///////////////////
//   useEffect(() => {
//     if (bookmarkId !== undefined) {
//       setbookMarkId(true);
//     }
//   }, []);
  /////////////////Functions///////////////////////

  const onBookmark = () => {
    if (session.status === "unauthenticated") {
      toast.error("لطفا وارد شوید");
      loginModal.onOpen();
    } else if (session.status === "authenticated") {
      const data = {
        content_type: id,
      };
      const config = {
        headers: {
          Authorization: `jwt ${accessToken}`,
        },
      };
      if (bookMarkId!==undefined) {
        axios
          .delete(`${baseURL + deleteBookmark(bookMarkId)}`, config)
            .then((res) => {
              if(res.status===204){toast.success("آگهی از لیست نشان شده ها خارج شد");
              setbookMarkId(undefined)
                    console.log(res)
              } else if (res.status === 401) {
                  toast.error("هویت شما اعتبار سنجی نشد")

              } else if (res.status===404) {
                  toast.error("این آگهی در لیست نشان شده های شما موجود نیست")
                }else{toast.error("خطایی رخ داده")}
                
              
          })
        //   .catch((err) => {
        //       console.log(err);
        //     setbookMarkId(bookMarkId);
        //       toast.error("خطای سرور");
              
        //   });
      } else if (bookMarkId === undefined) {
          addBookmark(data)
        // axios
        //   .post(`${baseURL + newBookmark}`, data, config)
            .then((res) => {
                if(res.status===201){setbookMarkId(res.data.id)
                // console.log(res)
                toast.success("نشان شد");
                    console.log(res)
                } else if (res.status===400) {
                    setbookMarkId(undefined)
                toast.error("خطای سرور");
                console.log(err)
                }
                
                
          })
        //     .catch((err) => {
              
        //   });
      }
    }

    // axios
    //   .post(`${baseURL + newBookmark}`, data, config)
    //   .then((res) => {
    //     toast.success("نشان شد");
    //   })
    //   .catch((err) => {
    //     axios
    //       .delete(`${baseURL + deleteBookmark(bookmarkId)}`, config)
    //       .then((res) => {
    //         toast.success("آگهی از لیست نشان شده ها خارج شد");
    //       })
    //       .catch((err) => {
    //         // console.log(err);
    //         toast.error("خطای سرور");
    //       })
    //   })
  };
  return (
    <>
      <div className="relative grid grid-cols-1 md:grid-cols-2 w-full h-screen mt-6">
        {/* images sections */}
        <div className="w-full grid grid-cols-1 md:grid-cols-5">
          <Image
            alt={title}
            className="w-full rounded col-span-4"
            src={mainImgSrc}
            width={320}
            height={300}
          />
          <div className="col-span-1 flex flex-row md:flex-col gap-1 md:overflow-y-auto overflow-x-auto m-2 md:h-96">
            {imgs.map((img, index) => (
              <Image
                onMouseOver={() => setMainImgSrc(img)}
                alt={title}
                key={index}
                className="rounded hover:opacity-60"
                src={img}
                width={100}
                height={100}
              />
            ))}
          </div>
        </div>

        {/* details */}
        <div className="p-2 bg-white w-full">
          <div className="flex flex-row items-center justify-between">
            <div className="flex flex-row items-center gap-1">
              {grandPaCategory && (
                <ArrowTiltle left title={grandPaCategory.title} />
              )}
              {parenCategory && (
                <ArrowTiltle left title={parenCategory.title} />
              )}
              {category_name}
            </div>
          </div>
          <div className="flex flex-row gap-4 items-center justify-end mt-2">
            <FaSkyatlas
              onClick={onBookmark}
              className={`${
               bookMarkId===undefined ? "text-stone-500" : "text-rose-500"
              }  cursor-pointer`}
              size={20}
            />
            <HiOutlineShare
              className="text-stone-500 hover:text-stone-700 cursor-pointer"
              size={20}
            />
          </div>
          <div className="mt-4">
            <p className="text-xl">{title}</p>
          </div>
          <div className="flex flex-row justify-between">
            <div className="relative mt-2 flex flex-row gap-2 items-center justify-start">
              <FaLocationArrow className="text-sm text-neutral-500" />
              <p className="text-md text-neutral-600 ">
                ده دقیقه پیش در {city_name}
              </p>
              <span className="text-rose-500 pr-2">{is_urgent && "فوری"}</span>
            </div>
          </div>
          <p className="text-md text-stone-600 mt-3">
            {price != null ? `قیمت: ${price}` : "توافقی"}
          </p>
          {/* specifics */}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-5 mb-5">
            {adspecificvalue.map((item, index) => (
              <div key={index}>
                <div className="flex flex-row items-center border-b justify-between mr-10 ml-10 mt-4">
                  <p className="text-stone-500">{item.adspecification.title}</p>
                  <p>{item.value}</p>
                </div>
              </div>
            ))}
          </div>

          <div></div>

          <div className="mt-6">
            <p>توضیحات</p>
            <div className="text-stone-500 pr-5 mt-2">{description}</div>
          </div>
          <div className="mt-6">
            <TextInput
              id="note"
              register={register}
              errors={errors}
              placeholder="میتوانید برروی آگهی یادداشت بگذارید..."
            />
          </div>
        </div>

        {/* footer */}

        {/* 
        <div className='fixed bottom-0 bg-white shadow-inner p-2 flex justify-center border w-full'>
        <div onClick={()=>info.onOpen("09184113688")}
            className='  border rounded bg-slate-200 p-2 hover:bg-slate-300 cursor-pointer'>اطلاعات آگهی دهنده
            </div>
        </div>  */}
      </div>
    </>
  );
};

export default AdsDetail;
