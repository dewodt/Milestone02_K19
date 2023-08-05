import StarRating from '@/components/StarRatting'
import CarIcon from '@/components/icons/car-icon'
import SmokingIcon from '@/components/icons/smoking-icon'
import UtenilsIcon from '@/components/icons/utenils-icon'
import WifiIcon from '@/components/icons/wifi-icon'
import Image from 'next/image'
import React from 'react'
import type { Metadata, ResolvingMetadata } from 'next'
 
// type Props = {
//   params: { id: string }
//   searchParams: { [key: string]: string | string[] | undefined }
// }
 
// export async function generateMetadata(
//   { params, searchParams }: Props,
//   parent?: ResolvingMetadata
// ): Promise<Metadata> {
//   // read route params
//   const id = params.id
 
//   // fetch data
//   const product = await fetch(`https://.../${id}`).then((res) => res.json())
 
 
//   return {
//     title: product.title,
  
//   }
// }
 
export const metadata:Metadata = {
    title:"Cafe details | Ganesha Space"
}

const CafeDetailsPage = () => {
    const data = {
        id: 8,
        address: "Jl. Ganesa No.3, Lb. Siliwangi, Kecamatan Coblong, Kota Bandung, Jawa Barat 40132",
        title: "Chill Cafe & Co-working",
        placeType: "Cafe & Co-working Space",
        distance: 700,
        rating: 4.3,
        startPrice: 35000, // Rp35,000
        endPrice: 120000, // Rp35,000
        review: 8120,
        openHours: "12:00", closeHours: "24:00", alwaysOpen: false,
        imageUrl: ["/upnormal.jpeg", "/itb.jpeg", "/upnormal.jpeg", "/itb.jpeg", "/upnormal.jpeg", "/upnormal.jpeg", "/upnormal.jpeg"],
        facilities: {
            wifi: true,
            menu: true,
            smokingArea: true,
            parkingArea: true,
        },
        embedMapUrl: "https://www.google.com/maps/embed/v1/place?q=Upnormal+Coffee+Roaster+Juanda+(Dago),+Jalan+Ir.+H.+Juanda,+Lebakgede,+Kota+Bandung,+Jawa+Barat,+Indonesia&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8",
        description: "One Eighty Coffee and Music adalah konsep kafe pertama di Bandung yang mengungsung interior kolam renang. Tempat nongkrong yang unik tersebut diresmikan pada tanggal 15 Juli 2016 lalu oleh seorang pemilik bernama Alvin Theardy. Di dalam kafe terdapat area outdoor dengan konsep kolam renang, dimana anda bisa menikmati suasana kafe sembari bermain air. Anda juga bisa melakukan aktivitas seperti work from cafe atau belajar di One Eighty Coffee and Music. Suasana ruangan indoor adalah tempat paling pas bagi anda yang sedang ingin fokus. Dengan desain interior yang nyaman dan mendukung, anda bisa mengerjakan suatu project secara tenang serta nyaman. Sebaiknya datang di pagi hari bila anda ingin melakukan aktivitas work from cafe tersebut.Harga makanan di One Eighty terbilang cukup standar untuk sejenis tempat nongkrong seperti ini. Aneka hidangannya juga beragam dan memiliki cita rasa yang nikmat. Menu hidangannya tersedia dalam berbagai jenis hidangan mulai dari Nusantara hingga Western. Selain itu, juga terdapat hidangan breakfast, brunch, lunch, hingga cemilan ringan untuk menemani waktu nongkrong. One Eighty juga menyajikan menu Tropical Mojito Mocktail yang fresh dan segar dengan beragam varian."
    }

    // Function to format the distance based on whether it's in meters or kilometers
    const formatDistance = (distance: number) => {
        if (distance > 999) {
            const km = (distance / 1000).toLocaleString("id-ID", {
                minimumFractionDigits: 1,
                maximumFractionDigits: 1,
            });
            return `${km} km`; // Return the distance in kilometers with 1 decimal point
        } else {
            return `${distance.toLocaleString("id-ID")} m`; // Return the distance in meters
        }
    };

    const formattedCurrency = (price: number) => (new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
        minimumFractionDigits: 0,
    }).format(price!));

    const formattedReview = new Intl.NumberFormat("id-ID").format(data.review!);


    return (
        <div className="min-h-screen w-full flex flex-col gap-6 lg:gap-10 px-6 md:px-12 lg:px-16 2xl:px-48 py-6 lg:py-10">
            {/* Title */}
            <h1 className=" font-poppins font-bold text-2xl md:text-3xl lg:text-4xl text-white">{data.title}</h1>

            {/* Ratings and address */}
            <section className="w-full flex gap-7 lg:gap-10 -mt-3 lg:-mt-6">
                {/* Review */}
                <div className="flex gap-x-5 flex-col md:flex-row">
                    <StarRating rating={data.rating} />
                    <h2 className="text-white text-sm lg:text-lg">Lebih dari {formattedReview}+ reviews</h2>
                </div>
                {/* Address */}
                <div className="text-white text-sm lg:text-lg">{data.address}</div>
            </section>

            {/* Image container */}
            <section className="w-full flex gap-2 md:gap-4 lg:gap-6 h-[150px] md:h-[280px] lg:h-[500px]">
                {/* First Image */}
                {data.imageUrl[0] && <Image src={data.imageUrl[0]} width="1920" height={1080} className={`${data.imageUrl.length === 1 ? "w-full" : "w-[calc(50%-6px)] md:w-[calc(50%-8px)] lg:w-[calc(50%-12px)]"} h-full rounded-xl object-center object-cover`} alt="image" />}
                <div className="flex flex-col gap-2 md:gap-4 lg:gap-6 flex-1">
                    {/* Container 2nd and 3rd */}
                    <div className={`flex w-full ${data.imageUrl.length > 3 ? "flex-row" : "flex-col"} gap-2 md:gap-4 lg:gap-6 ${data.imageUrl.length > 2 ? "h-[calc(50%-6px)] md:h-[calc(50%-8px)] lg:h-[calc(50%-12px)]" : "h-full"}`}>
                        {data.imageUrl[1] && <Image src={data.imageUrl[1]} width="1920" height={1080} className={` rounded-xl object-center object-cover h-full ${data.imageUrl.length > 3 ? "w-[calc(50%-6px)] md:w-[calc(50%-8px)] lg:w-[calc(50%-12px)]" : "w-full"}`} alt="image" />}
                        {data.imageUrl[2] && <Image src={data.imageUrl[2]} width="1920" height={1080} className={`${data.imageUrl.length === 3 ? "w-full" : "w-[calc(50%-6px)] md:w-[calc(50%-8px)] lg:w-[calc(50%-12px)]"} h-full rounded-xl object-center object-cover`} alt="image" />}

                    </div>
                    {/* Container 4th and 5th */}
                    <div className="flex w-full gap-2 md:gap-4 lg:gap-6 h-[calc(50%-6px)] md:h-[calc(50%-8px)] lg:h-[calc(50%-12px)]">
                        {data.imageUrl[3] && <Image src={data.imageUrl[3]} width="1920" height={1080} className={`${data.imageUrl.length === 4 ? "w-full" : "w-[calc(50%-6px)] md:w-[calc(50%-8px)] lg:w-[calc(50%-12px)]"} h-full rounded-xl object-center object-cover`} alt="image" />}
                        {data.imageUrl[4] && <Image src={data.imageUrl[4]} width="1920" height={1080} className={`w-[calc(50%-6px)] md:w-[calc(50%-8px)] lg:w-[calc(50%-12px)] h-full rounded-xl object-center object-cover`} alt="image" />}
                    </div>
                </div>
            </section>

            {/* Details Access */}
            <section className="text-white text-right ml-auto flex flex-col gap-3 md:gap-4 lg:gap-6">
                {/* Price */}
                <div className="flex flex-col gap-1">
                    <p className="text-base lg:text-xl">Kisaran harga menu: </p>
                    <h3 className="text-base lg:text-xl">Mulai dari <span className="text-lg md:text-xl lg:text-2xl font-poppins font-bold">{formattedCurrency(data.startPrice)} {data.endPrice && " - " + formattedCurrency(data.endPrice)}</span></h3>
                </div>
                {/* Distance */}
                <div className="flex flex-col">
                    <p className="text-base lg:text-xl">Jarak dari ITB: </p>
                    <h3 className="text-lg md:text-xl lg:text-2xl font-poppins font-bold">{formatDistance(data.distance)}</h3>
                </div>
                {/* Opening hours */}
                <div className="flex flex-col">
                    <p className="text-base lg:text-xl">Jam Buka </p>
                    <h3 className="text-lg md:text-xl lg:text-2xl font-poppins font-bold">{data.alwaysOpen ? "24 Hours" : (data.openHours + (data.closeHours && (" - " + data.closeHours)))}</h3>
                </div>
            </section>

            {/* Horizontal line */}
            <span className="w-full bg-white h-0.5" />

            {/* Details Facilities */}
            <section className="flex flex-col gap-3 md:gap-4 lg:gap-6 text-white">
                {/* Wifi */}
                {data.facilities.wifi &&
                    <div className="flex gap-5 md:gap-7">
                        <WifiIcon size={40} className="fill-white w-[34px] sm:w-[30px] lg:w-[40px] aspect-square" />
                        <div className="flex flex-col gap-1">
                            <h3 className="text-lg md:text-xl lg:text-2xl font-semibold font-poppins capitalize">Free Wifi</h3>
                            <p className="text-base lg:text-lg font-inter">Memiliki fasilitas koneksi wifi gratis untuk pelanggan.</p>
                        </div>
                    </div>
                }
                {/* Menu */}
                {data.facilities.menu &&
                    <div className="flex gap-5 md:gap-7">
                        <UtenilsIcon size={40} className="fill-white w-[49px] sm:w-[30px] lg:w-[40px] aspect-square" />
                        <div className="flex flex-col gap-1">
                            <h3 className="text-lg md:text-xl lg:text-2xl font-semibold font-poppins capitalize">Menu Makanan</h3>
                            <p className="text-base lg:text-lg font-inter">Memiliki menu makanan bagi pelangggan yang ingin mengenyangkan perut.</p>
                        </div>
                    </div>
                }
                {/* Smoking Area */}
                {data.facilities.smokingArea &&
                    <div className="flex gap-5 md:gap-7">
                        <SmokingIcon size={40} className="fill-white w-[30px] sm:w-[30px] lg:w-[40px] aspect-square" />
                        <div className="flex flex-col gap-1">
                            <h3 className="text-lg md:text-xl lg:text-2xl font-semibold font-poppins capitalize">Smoking Area</h3>
                            <p className="text-base lg:text-lg font-inter">Tersedia Fasilitas smoking area bagi perokok.</p>
                        </div>
                    </div>
                }
                {/* Parking Area */}
                {data.facilities.parkingArea &&
                    <div className="flex gap-5 md:gap-7">
                        <CarIcon size={40} className="fill-white w-[30px] sm:w-[30px] lg:w-[40px] aspect-square" />
                        <div className="flex flex-col gap-1">
                            <h3 className="text-lg md:text-xl lg:text-2xl font-semibold font-poppins capitalize">Tempat Parkir</h3>
                            <p className="text-base lg:text-lg font-inter">Tempat parkir yang luas dan aman.</p>
                        </div>
                    </div>
                }
            </section>

            {/* Horizontal line */}
            <span className="w-full bg-white h-0.5" />

            {/* About Section */}
            <section className="flex text-white gap-3 md:gap-4 lg:gap-6 flex-col">
                <h3 className="font-bold capitalize font-poppins text-lg md:text-xl lg:text-2xl">
                    Tentang {data.title}
                </h3>
                <p className="text-sm lg:text-lg">
                    {data.description}
                </p>
            </section>

            {/* Horizontal line */}
            <span className="w-full bg-white h-0.5" />

            {/* Location */}
            <section className="flex capitalize text-white gap-6 flex-col">
                <h3 className="font-bold capitalize font-poppins text-lg md:text-xl lg:text-2xl">
                    Lokasi di Google Maps
                </h3>
                <div className="overflow-hidden w-full h-[250px] md:h-[300px] lg:h-[400px]" id="canvas-for-googlemap">
                    <iframe className="w-full h-full" src={data.embedMapUrl} />
                </div>

            </section>
            {/* Horizontal line */}
            <span className="w-full bg-white h-0.5" />
        </div>
    )
}

export default CafeDetailsPage
