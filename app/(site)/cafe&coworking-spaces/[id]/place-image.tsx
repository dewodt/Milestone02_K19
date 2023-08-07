"use client"
import { Place } from '@/types/cms'
import React from 'react'
import { urlForImage } from "@/sanity/lib/image";
import { useContext } from "react";
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import Image from 'next/image';
import { ImagesPopUp } from '../../layout';
import PopupImage from './popup-image';
const PlaceImage = ({ place }: { place: Place }) => {
    // State to zoom details image
    const setPopUp = useContext(ImagesPopUp) as React.Dispatch<
        React.SetStateAction<React.ReactNode | undefined>
    >;
    return (
        <section className="flex h-[150px] w-full gap-2 md:h-[280px] md:gap-4 lg:h-[500px] lg:gap-6">
            {/* First Image */}
            {place.images[0] && (
                <button onClick={() => {
                    setPopUp(<PopupImage place={place} initialSlide={0} />)
                }}
                    className={`${place.images.length === 1
                        ? "w-full"
                        : "w-[calc(50%-6px)] md:w-[calc(50%-8px)] lg:w-[calc(50%-12px)]"
                        } h-full `}>
                    <Image
                        src={urlForImage(place.images[0]).url()}
                        width="1920"
                        height={1080}
                        className={`w-full h-full rounded-xl object-cover object-center`}
                        alt={place.images[0].alt}
                    />
                </button>
            )}
            <div className="flex flex-1 flex-col gap-2 md:gap-4 lg:gap-6">
                {/* Container 2nd and 3rd */}
                <div
                    className={`flex w-full ${place.images.length > 3 ? "flex-row" : "flex-col"
                        } gap-2 md:gap-4 lg:gap-6 ${place.images.length > 3
                            ? "h-[calc(50%-6px)] md:h-[calc(50%-8px)] lg:h-[calc(50%-12px)]"
                            : "h-full"
                        }`}
                >
                    {place.images[1] && (
                        <button onClick={() => {
                            setPopUp(<PopupImage place={place} initialSlide={1} />)
                        }} className={`${place.images.length > 3
                            ? "w-[calc(50%-6px)] md:w-[calc(50%-8px)] lg:w-[calc(50%-12px)] h-full"
                            : place.images.length === 3 ? "w-full h-[calc(50%-6px)] md:h-[calc(50%-8px)] lg:h-[calc(50%-12px)]" : "w-full h-full"
                            } `}>
                            <Image
                                src={urlForImage(place.images[1]).url()}
                                width="1920"
                                height={1080}
                                className="h-full rounded-xl object-cover object-center w-full"
                                alt={place.images[1].alt}
                            /></button>
                    )}
                    {place.images[2] && (
                        <button onClick={() => {
                            setPopUp(<PopupImage place={place} initialSlide={2} />)
                        }} className={`${place.images.length === 3
                            ? "w-full h-[calc(50%-6px)] md:h-[calc(50%-8px)] lg:h-[calc(50%-12px)]"
                            : "w-[calc(50%-6px)] md:w-[calc(50%-8px)] lg:w-[calc(50%-12px)] h-full"
                            } `}>
                            <Image
                                src={urlForImage(place.images[2]).url()}
                                width="1920"
                                height={1080}
                                className="w-full h-full rounded-xl object-cover object-center"
                                alt={place.images[2].alt}
                            />
                        </button>
                    )}
                </div>
                {/* Container 4th and 5th */}
                <div className="flex h-[calc(50%-6px)] w-full gap-2 md:h-[calc(50%-8px)] md:gap-4 lg:h-[calc(50%-12px)] lg:gap-6">
                    {place.images[3] && (
                        <button onClick={() => {
                            setPopUp(<PopupImage place={place} initialSlide={3} />)
                        }} className={`${place.images.length === 4
                            ? "w-full"
                            : "w-[calc(50%-6px)] md:w-[calc(50%-8px)] lg:w-[calc(50%-12px)]"
                            }`}>
                            <Image
                                src={urlForImage(place.images[3]).url()}
                                width="1920"
                                height={1080}
                                className="w-full h-full rounded-xl object-cover object-center"
                                alt={place.images[3].alt}
                            />
                        </button>
                    )}
                    {place.images[4] && (
                        <button onClick={() => {
                            setPopUp(<PopupImage place={place} initialSlide={4} />)
                        }} className="relative w-[calc(50%-6px)] md:w-[calc(50%-8px)] lg:w-[calc(50%-12px)]">
                            <Image
                                src={urlForImage(place.images[4]).url()}
                                width="1920"
                                height={1080}
                                className="h-full w-full rounded-xl object-cover object-center"
                                alt={place.images[4].alt}
                            />
                            {place.images.length > 5 &&
                                <>
                                    <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                                    <p className="absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 text-white z-20 font-poppins font-bold text-4xl">{place.images.length - 5}+</p>
                                </>}
                        </button>
                    )}

                </div>
            </div>
        </section>
    )
}

export default PlaceImage
