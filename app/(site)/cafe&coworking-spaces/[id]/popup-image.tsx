"use client"
import { Place } from "@/types/cms"
import React from "react"
import { PortableText, toPlainText } from "@portabletext/react";
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
const PopupImage = ({ place, initialSlide }: { place: Place, initialSlide: number }) => {
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
        <div className={`h-screen bg-custom-soft-black w-screen transition-opacity duration-300 overflow-hidden fixed z-[999]`}>
            <>
                <div className="bg-black w-screen flex items-center justify-between p-5 2xl:py-6 lg:px-20 absolute top-0 z-[99]">
                    <h1 className="text-white text-xl break-all lg:text-4xl font-bold font-poppins">{place.name}</h1>
                    <button onClick={() => setPopUp(undefined)} className="aspect-square rounded-full ">
                        <CrossIcon size={160} className="fill-white w-8 h-8 lg:w-14 lg:h-14" />
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
                            <Image alt={`Image ${index + 1}`} width={1920} height={1080} src={urlForImage(item).url()} className="w-screen object-center object-contain h-[calc(100vh-170px)]" />
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className="bg-black w-screen bg-opacity-50 m-auto px-10 overflow-x-scroll md:px-28 lg:px-32 h-[200px]">
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
                                spaceBetween: 0
                            },
                            480: {
                                slidesPerView: 2,
                                spaceBetween: 0
                            },
                            640: {
                                slidesPerView: 2,
                                spaceBetween: 5
                            },
                            720: {
                                slidesPerView: 5,
                                spaceBetween: 5
                            },
                            1280: {
                                slidesPerView: 5,
                                spaceBetween: 10

                            }
                        }}

                        freeMode={true}
                        watchSlidesProgress={true}
                        modules={[FreeMode, Navigation, Thumbs]}
                        className="mySwiper"
                    >
                        {place.images.map((item, index) => (
                            <SwiperSlide key={index}>
                                <Image alt={`Image ${index + 1}`} width={1920} height={1080} src={urlForImage(item).url()} className={`my-auto w-[100px] h-[80px] lg:h-[120px] cursor-pointer rounded-[20px] border-2  lg:w-[300px] object-center object-cover`} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </>
        </div>
    );
}

export default PopupImage
