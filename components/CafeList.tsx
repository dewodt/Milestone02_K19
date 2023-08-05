import Image from "next/image";
import React from "react";
import StarRating from "./StarRatting";
import Link from "next/link";
import { start } from "repl";

const CafeList = ({
  id,
  address,
  title,
  type,
  distance,
  rating,
  startPrice,
}: {
  id: number;
  address: string;
  title: string;
  type: string;
  distance: number;
  rating: number;
  startPrice: number | string;
}) => {
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

  // Function to format currency
  const formattedCurrency = (price: number) => {
    return (new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(price!) + ",-")
  }

  return (
    <>
      {/* Horizontal line */}
      <span className="w-full bg-white h-0.5" />

      {/* Main content */}
      <div key={id} className="flex gap-5 animate-blink md:gap-8 lg:gap-10 w-full">
        {/* Link to the cafe details page */}
        <div className="rounded-xl w-[130px] h-[100px] sm:w-[180px] sm:h-[140px] md:w-[230px] md:h-[180px] lg:w-[350px] lg:h-[250px] overflow-hidden">
          <Link href={`/cafe/${id}`}>
            <Image
              height={300}
              width={300}
              src="/upnormal.jpeg"
              alt="Cafe"
              className="object-center object-cover hover:scale-110 duration-300 w-full h-full hover:opacity-75 transition-all"
            />
          </Link>
        </div>
        <div className="flex flex-1 text-white gap-0.5 lg:gap-1 flex-col font-inter font-medium">
          {/* Cafe address and title */}
          <h3 className="text-sm lg:text-base mb-0.5 lg:mb-1">{address}</h3>
          <h2 className="text-xl lg:text-2xl font-extrabold">{title}</h2>

          {/* Cafe type and distance from ITB */}
          <div className="flex flex-col gap-[1px] text-sm lg:text-base">
            <h4>{type}</h4>
            <h5>{formatDistance(distance)} from ITB</h5>
          </div>

          {/* Star rating */}
          <StarRating rating={rating} />

          {/* Starting price */}
          <h5 className="text-[15px] lg:text-base mt-0.5 lg:mt-1">
            {typeof startPrice === "string" ? (
              <span className="font-bold text-lg lg:text-xl">
                {startPrice}
              </span>
            ) : (
              <>
                Mulai dari{" "}
                <span className="font-bold text-lg lg:text-xl">
                  {formattedCurrency(startPrice)}
                </span>
              </>
            )}
          </h5>
        </div>
      </div>
    </>
  );
};

// Export the CafeList component as the default export
export default CafeList;
