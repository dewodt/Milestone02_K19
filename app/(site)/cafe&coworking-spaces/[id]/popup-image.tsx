"use client";

import { Place } from "@/types/cms";
import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper";
import { urlForImage } from "@/sanity/lib/image";
import { useContext } from "react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import Image from "next/image";
import { ImagesPopUp } from "../../layout";
import CrossIcon from "@/components/icons/cross-icon";
const PopupImage = ({
  place,
  initialSlide,
}: {
  place: Place;
  initialSlide: number;
}) => {
  const setPopUp = useContext(ImagesPopUp) as React.Dispatch<
    React.SetStateAction<React.ReactNode | undefined>
  >;
  // Get formatted values
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
  const swiperRef = useRef<any>(null);

  // Function to handle Swiper instance update
  const handleThumbsSwiperUpdate = (swiper: SwiperType | null) => {
    setThumbsSwiper(swiper);
  };
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div
      className={`fixed z-[999] h-screen w-screen overflow-hidden bg-custom-soft-black transition-opacity duration-300`}
    >
      <>
        <div className="absolute top-0 z-[99] flex w-screen items-center justify-between bg-black p-5 lg:px-20 2xl:py-6">
          <h1 className="break-all font-poppins text-xl font-bold text-white lg:text-4xl">
            {place.name}
          </h1>
          <button
            onClick={() => setPopUp(undefined)}
            className="aspect-square rounded-full "
          >
            <CrossIcon
              size={160}
              className="h-8 w-8 fill-white lg:h-14 lg:w-14"
            />
          </button>
        </div>
        <Swiper
          loop={true}
          spaceBetween={10}
          navigation={true}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper2"
          initialSlide={initialSlide}
        >
          {place.images.map((item, index) => (
            <SwiperSlide key={index}>
              <Image
                alt={`Image ${index + 1}`}
                width={1920}
                height={1080}
                src={urlForImage(item).url()}
                className="h-[calc(100vh-170px)] w-screen object-contain object-center"
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="m-auto h-[200px] w-screen overflow-x-scroll bg-black bg-opacity-50 px-10 md:px-28 lg:px-32">
          <Swiper
            ref={swiperRef}
            onSwiper={handleThumbsSwiperUpdate}
            loop={true}
            centeredSlides={true}
            centerInsufficientSlides={true}
            centeredSlidesBounds={true}
            breakpoints={{
              320: {
                slidesPerView: 2,
                spaceBetween: 0,
              },
              480: {
                slidesPerView: 2,
                spaceBetween: 0,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 5,
              },
              720: {
                slidesPerView: 5,
                spaceBetween: 5,
              },
              1280: {
                slidesPerView: 5,
                spaceBetween: 10,
              },
            }}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper mt-6"
          >
            {place.images.map((item, index) => (
              <SwiperSlide key={index}>
                <Image
                  alt={`Image ${index + 1}`}
                  width={1920}
                  height={1080}
                  src={urlForImage(item).url()}
                  className={`my-auto h-[80px] w-[100px] cursor-pointer rounded-[20px] border-2 object-cover  object-center lg:h-[120px] lg:w-[300px]`}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </>
    </div>
  );
};

export default PopupImage;
