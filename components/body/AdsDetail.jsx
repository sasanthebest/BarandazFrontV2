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
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import useLoginModal from "@/hooks/useLoginModal";
import { addBookmark, deleteBookmark } from "@/services/userServices";
import TimeWraper from "./card/TimeWraper";
import Location from "./card/Location";
import { RWebShare } from "react-web-share";

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
    code,
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
  // const [mainImgSrc, setMainImgSrc] = useState(images[0]?.image);

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

  const handleBookmark = () => {
    if (session.status === "unauthenticated") {
      toast.error("لطفا وارد شوید");
      loginModal.onOpen();
    } else if (session.status === "authenticated") {
      if (bookMarkId !== undefined) {
        deleteBookmark(bookMarkId, accessToken).then((res) => {
          if (res.status === 204) {
            toast.success("آگهی از لیست نشان شده ها خارج شد");
            setbookMarkId(undefined);
            // console.log(res);
          } else if (res.status === 401) {
            toast.error("هویت شما اعتبار سنجی نشد");
          } else if (res.status === 404) {
            toast.error("این آگهی در لیست نشان شده های شما موجود نیست");
          } else {
            toast.error("خطایی رخ داده");
          }
        });
      } else if (bookMarkId === undefined) {
        addBookmark(id, accessToken).then((res) => {
          if (res.status === 201) {
            setbookMarkId(res.data.id);
            // console.log("res1:",res);
            toast.success("نشان شد");
          } else if (res.status === 400) {
            setbookMarkId(undefined);
            toast.error("خطای سرور");
            // console.log(err)
          } else if (res.status === 401) {
            toast.error("هویت شما اعتبار سنجی نشد");
          } else {
            toast.error("خطایی رخ داده");
          }
        });
      }
    }
  };

  return (
    <div className="relative grid grid-cols-1 md:grid-cols-2 w-full h-80v pt-6 overflow-y-scroll">
      {/* images sections */}
      {imgs.length != 0 && (
        <div
          className="
            flex 
            flex-col 
            gap-4 
            p-2 
            lg:grid 
            lg:grid-cols-5"
        >
          <div className="relative w-full h-72 lg:col-span-4">
            <div className="">
              <Image
                alt={title}
                className="rounded"
                src={mainImgSrc}
                fill={true}
              />
            </div>
          </div>

          <div
            className="
                    flex 
                    flex-row 
                    items-center
                    justify-center
                    gap-1
                    lg:flex-col
                    lg:col-span-1
                    lg:justify-start
                    lg:overflow-y-auto
                    "
          >
            {imgs.map((img, index) => (
              <div key={index} className="relative w-20 h-20 ">
                <Image
                  onMouseOver={() => setMainImgSrc(img)}
                  alt={title}
                  className="rounded hover:opacity-60"
                  src={img}
                  fill={true}
                />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* details */}
      <div className="p-2 bg-white w-full">
        <div className="flex flex-row items-center justify-between">
          <div className="flex flex-row items-center gap-1">
            {grandPaCategory && (
              <ArrowTiltle left title={grandPaCategory.title} />
            )}
            {parenCategory && <ArrowTiltle left title={parenCategory.title} />}
            {category_name}
          </div>
        </div>
        <div className="flex flex-row gap-4 items-center justify-end mt-2">
          <FaSkyatlas
            onClick={handleBookmark}
            className={`${
              bookMarkId === undefined ? "text-stone-500" : "text-rose-500"
            }  cursor-pointer`}
            size={20}
          />
          <RWebShare
            data={{
              text: "barandaz",
              url: `http://localhost:3000/ads/${code}`,
              title: "barandaz",
            }}
            onClick={() => console.log("shared successfully!")}
          >
            <HiOutlineShare
              className="text-stone-500 hover:text-stone-700 cursor-pointer"
              size={20}
            />
          </RWebShare>
        </div>
        <div className="mt-4">
          <p className="text-xl">{title}</p>
        </div>
        <div className="flex flex-row justify-between">
          <div className="relative mt-2 flex flex-row gap-2 items-center justify-start">
            {/* <FaLocationArrow className="text-sm text-neutral-500" /> */}
            <TimeWraper time={created_at}></TimeWraper>
            {/* <p className="text-md text-neutral-600 ">در {city_name}</p> */}
            <Location city_name={city_name} />
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
  );
};

export default AdsDetail;
