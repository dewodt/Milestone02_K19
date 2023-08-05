import StarRating from "@/components/star-rating";
import CarIcon from "@/components/icons/car-icon";
import SmokingIcon from "@/components/icons/smoking-icon";
import UtenilsIcon from "@/components/icons/utenils-icon";
import WifiIcon from "@/components/icons/wifi-icon";
import Image from "next/image";
import React from "react";
import type { Metadata, ResolvingMetadata } from "next";

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

export const metadata: Metadata = {
  title: "Cafe details | Ganesha Space",
};

const CafeDetailsPage = () => {
  const data = {
    id: 8,
    address:
      "Jl. Ganesa No.3, Lb. Siliwangi, Kecamatan Coblong, Kota Bandung, Jawa Barat 40132",
    title: "Chill Cafe & Co-working",
    placeType: "Cafe & Co-working Space",
    distance: 700,
    rating: 4.3,
    startPrice: 35000, // Rp35,000
    endPrice: 120000, // Rp35,000
    review: 8120,
    openHours: "12:00",
    closeHours: "24:00",
    alwaysOpen: false,
    imageUrl: [
      "/upnormal.jpeg",
      "/itb.jpeg",
      "/upnormal.jpeg",
      "/itb.jpeg",
      "/upnormal.jpeg",
      "/upnormal.jpeg",
      "/upnormal.jpeg",
    ],
    facilities: {
      wifi: true,
      menu: true,
      smokingArea: true,
      parkingArea: true,
    },
    embedMapUrl:
      "https://www.google.com/maps/embed/v1/place?q=Upnormal+Coffee+Roaster+Juanda+(Dago),+Jalan+Ir.+H.+Juanda,+Lebakgede,+Kota+Bandung,+Jawa+Barat,+Indonesia&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8",
    description:
      "One Eighty Coffee and Music adalah konsep kafe pertama di Bandung yang mengungsung interior kolam renang. Tempat nongkrong yang unik tersebut diresmikan pada tanggal 15 Juli 2016 lalu oleh seorang pemilik bernama Alvin Theardy. Di dalam kafe terdapat area outdoor dengan konsep kolam renang, dimana anda bisa menikmati suasana kafe sembari bermain air. Anda juga bisa melakukan aktivitas seperti work from cafe atau belajar di One Eighty Coffee and Music. Suasana ruangan indoor adalah tempat paling pas bagi anda yang sedang ingin fokus. Dengan desain interior yang nyaman dan mendukung, anda bisa mengerjakan suatu project secara tenang serta nyaman. Sebaiknya datang di pagi hari bila anda ingin melakukan aktivitas work from cafe tersebut.Harga makanan di One Eighty terbilang cukup standar untuk sejenis tempat nongkrong seperti ini. Aneka hidangannya juga beragam dan memiliki cita rasa yang nikmat. Menu hidangannya tersedia dalam berbagai jenis hidangan mulai dari Nusantara hingga Western. Selain itu, juga terdapat hidangan breakfast, brunch, lunch, hingga cemilan ringan untuk menemani waktu nongkrong. One Eighty juga menyajikan menu Tropical Mojito Mocktail yang fresh dan segar dengan beragam varian.",
  };

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

  const formattedCurrency = (price: number) =>
    new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(price!);

  const formattedReview = new Intl.NumberFormat("id-ID").format(data.review!);

  return (
    <div className="flex min-h-screen w-full flex-col gap-6 px-6 py-6 md:px-12 lg:gap-10 lg:px-16 lg:py-10 2xl:px-48">
      {/* Title */}
      <h1 className=" font-poppins text-2xl font-bold text-white md:text-3xl lg:text-4xl">
        {data.title}
      </h1>

      {/* Ratings and address */}
      <section className="-mt-3 flex w-full gap-7 lg:-mt-6 lg:gap-10">
        {/* Review */}
        <div className="flex flex-col gap-x-5 md:flex-row">
          <StarRating rating={data.rating} />
          <h2 className="text-sm text-white lg:text-lg">
            Lebih dari {formattedReview}+ reviews
          </h2>
        </div>
        {/* Address */}
        <div className="text-sm text-white lg:text-lg">{data.address}</div>
      </section>

      {/* Image container */}
      <section className="flex h-[150px] w-full gap-2 md:h-[280px] md:gap-4 lg:h-[500px] lg:gap-6">
        {/* First Image */}
        {data.imageUrl[0] && (
          <Image
            src={data.imageUrl[0]}
            width="1920"
            height={1080}
            className={`${
              data.imageUrl.length === 1
                ? "w-full"
                : "w-[calc(50%-6px)] md:w-[calc(50%-8px)] lg:w-[calc(50%-12px)]"
            } h-full rounded-xl object-cover object-center`}
            alt="image"
          />
        )}
        <div className="flex flex-1 flex-col gap-2 md:gap-4 lg:gap-6">
          {/* Container 2nd and 3rd */}
          <div
            className={`flex w-full ${
              data.imageUrl.length > 3 ? "flex-row" : "flex-col"
            } gap-2 md:gap-4 lg:gap-6 ${
              data.imageUrl.length > 2
                ? "h-[calc(50%-6px)] md:h-[calc(50%-8px)] lg:h-[calc(50%-12px)]"
                : "h-full"
            }`}
          >
            {data.imageUrl[1] && (
              <Image
                src={data.imageUrl[1]}
                width="1920"
                height={1080}
                className={` h-full rounded-xl object-cover object-center ${
                  data.imageUrl.length > 3
                    ? "w-[calc(50%-6px)] md:w-[calc(50%-8px)] lg:w-[calc(50%-12px)]"
                    : "w-full"
                }`}
                alt="image"
              />
            )}
            {data.imageUrl[2] && (
              <Image
                src={data.imageUrl[2]}
                width="1920"
                height={1080}
                className={`${
                  data.imageUrl.length === 3
                    ? "w-full"
                    : "w-[calc(50%-6px)] md:w-[calc(50%-8px)] lg:w-[calc(50%-12px)]"
                } h-full rounded-xl object-cover object-center`}
                alt="image"
              />
            )}
          </div>
          {/* Container 4th and 5th */}
          <div className="flex h-[calc(50%-6px)] w-full gap-2 md:h-[calc(50%-8px)] md:gap-4 lg:h-[calc(50%-12px)] lg:gap-6">
            {data.imageUrl[3] && (
              <Image
                src={data.imageUrl[3]}
                width="1920"
                height={1080}
                className={`${
                  data.imageUrl.length === 4
                    ? "w-full"
                    : "w-[calc(50%-6px)] md:w-[calc(50%-8px)] lg:w-[calc(50%-12px)]"
                } h-full rounded-xl object-cover object-center`}
                alt="image"
              />
            )}
            {data.imageUrl[4] && (
              <Image
                src={data.imageUrl[4]}
                width="1920"
                height={1080}
                className={`h-full w-[calc(50%-6px)] rounded-xl object-cover object-center md:w-[calc(50%-8px)] lg:w-[calc(50%-12px)]`}
                alt="image"
              />
            )}
          </div>
        </div>
      </section>

      {/* Details Access */}
      <section className="ml-auto flex flex-col gap-3 text-right text-white md:gap-4 lg:gap-6">
        {/* Price */}
        <div className="flex flex-col gap-1">
          <p className="text-base lg:text-xl">Kisaran harga menu: </p>
          <h3 className="text-sm lg:text-xl">
            Mulai dari{" "}
            <span className="font-poppins text-lg font-bold md:text-xl lg:text-2xl">
              {formattedCurrency(data.startPrice)}{" "}
              {data.endPrice && " - " + formattedCurrency(data.endPrice)}
            </span>
          </h3>
        </div>
        {/* Distance */}
        <div className="flex flex-col">
          <p className="text-base lg:text-xl">Jarak dari ITB: </p>
          <h3 className="font-poppins text-lg font-bold md:text-xl lg:text-2xl">
            {formatDistance(data.distance)}
          </h3>
        </div>
        {/* Opening hours */}
        <div className="flex flex-col">
          <p className="text-base lg:text-xl">Jam Buka </p>
          <h3 className="font-poppins text-lg font-bold md:text-xl lg:text-2xl">
            {data.alwaysOpen
              ? "24 Hours"
              : data.openHours + (data.closeHours && " - " + data.closeHours)}
          </h3>
        </div>
      </section>

      {/* Horizontal line */}
      <span className="h-0.5 w-full bg-white" />

      {/* Details Facilities */}
      <section className="flex flex-col gap-3 text-white md:gap-4 lg:gap-6">
        {/* Wifi */}
        {data.facilities.wifi && (
          <div className="flex gap-5 md:gap-7">
            <WifiIcon
              size={40}
              className="aspect-square w-[34px] fill-white sm:w-[30px] lg:w-[40px]"
            />
            <div className="flex flex-col gap-1">
              <h3 className="font-poppins text-lg font-semibold capitalize md:text-xl lg:text-2xl">
                Free Wifi
              </h3>
              <p className="font-inter text-sm lg:text-lg">
                Memiliki fasilitas koneksi wifi gratis untuk pelanggan.
              </p>
            </div>
          </div>
        )}
        {/* Menu */}
        {data.facilities.menu && (
          <div className="flex gap-5 md:gap-7">
            <UtenilsIcon
              size={40}
              className="aspect-square w-[49px] fill-white sm:w-[30px] lg:w-[40px]"
            />
            <div className="flex flex-col gap-1">
              <h3 className="font-poppins text-lg font-semibold capitalize md:text-xl lg:text-2xl">
                Menu Makanan
              </h3>
              <p className="font-inter text-sm lg:text-lg">
                Memiliki menu makanan bagi pelangggan yang ingin mengenyangkan
                perut.
              </p>
            </div>
          </div>
        )}
        {/* Smoking Area */}
        {data.facilities.smokingArea && (
          <div className="flex gap-5 md:gap-7">
            <SmokingIcon
              size={40}
              className="aspect-square w-[30px] fill-white sm:w-[30px] lg:w-[40px]"
            />
            <div className="flex flex-col gap-1">
              <h3 className="font-poppins text-lg font-semibold capitalize md:text-xl lg:text-2xl">
                Smoking Area
              </h3>
              <p className="font-inter text-sm lg:text-lg">
                Tersedia Fasilitas smoking area bagi perokok.
              </p>
            </div>
          </div>
        )}
        {/* Parking Area */}
        {data.facilities.parkingArea && (
          <div className="flex gap-5 md:gap-7">
            <CarIcon
              size={40}
              className="aspect-square w-[30px] fill-white sm:w-[30px] lg:w-[40px]"
            />
            <div className="flex flex-col gap-1">
              <h3 className="font-poppins text-lg font-semibold capitalize md:text-xl lg:text-2xl">
                Tempat Parkir
              </h3>
              <p className="font-inter text-sm lg:text-lg">
                Tempat parkir yang luas dan aman.
              </p>
            </div>
          </div>
        )}
      </section>

      {/* Horizontal line */}
      <span className="h-0.5 w-full bg-white" />

      {/* About Section */}
      <section className="flex flex-col gap-3 text-white md:gap-4 lg:gap-6">
        <h3 className="font-poppins text-lg font-bold capitalize md:text-xl lg:text-2xl">
          Tentang {data.title}
        </h3>
        <p className="text-sm lg:text-lg">{data.description}</p>
      </section>

      {/* Horizontal line */}
      <span className="h-0.5 w-full bg-white" />

      {/* Location */}
      <section className="flex flex-col gap-6 capitalize text-white">
        <h3 className="font-poppins text-lg font-bold capitalize md:text-xl lg:text-2xl">
          Lokasi di Google Maps
        </h3>
        <div
          className="h-[250px] w-full overflow-hidden md:h-[300px] lg:h-[400px]"
          id="canvas-for-googlemap"
        >
          <iframe className="h-full w-full" src={data.embedMapUrl} />
        </div>
      </section>
      {/* Horizontal line */}
      <span className="h-0.5 w-full bg-white" />
    </div>
  );
};

export default CafeDetailsPage;
