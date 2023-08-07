"use client";

import Image from "next/image";
import Link from "next/link";
import type { Place } from "@/types/cms";
import { urlForImage } from "@/sanity/lib/image";
import { getFormattedDistance, getFormattedCurrency } from "@/lib/utils";
import StarRating from "../../../components/star-rating";

const PlacesItem = ({ place }: { place: Place }) => {
  // Get formatted values
  const formattedDistance = getFormattedDistance(place.distanceFromITB);
  const formattedPriceStart = getFormattedCurrency(place.priceStart);

  return (
    <>
      {/* Horizontal line */}
      <span className="h-0.5 w-full bg-white" />

      {/* Main content */}
      <Link href={`/cafe&coworking-spaces/${place._id}`}>
        <div className="flex w-full animate-blink gap-5 md:gap-8 lg:gap-10">
          {/* Link to the cafe details page */}
          <div className="h-[100px] w-[130px] overflow-hidden rounded-xl sm:h-[140px] sm:w-[180px] md:h-[180px] md:w-[230px] lg:h-[250px] lg:w-[350px]">
            <Image
              height={300}
              width={300}
              src={urlForImage(place.images[0]).url()}
              alt={place.images[0].alt}
              className="h-full w-full object-cover object-center transition-all duration-300 hover:scale-110 hover:opacity-75"
            />
          </div>
          <div className="flex flex-1 flex-col gap-0.5 font-inter font-medium text-white lg:gap-1">
            {/* Cafe address and title */}
            <h3 className="mb-0.5 text-sm lg:mb-1 lg:text-base">
              {place.address}
            </h3>
            <h2 className="text-lg font-extrabold lg:text-2xl">{place.name}</h2>

            {/* Cafe type and distance from ITB */}
            <div className="flex flex-col gap-[1px] text-sm lg:text-base">
              {/* <h4>{type}</h4> */}
              <h5>{formattedDistance} from ITB</h5>
            </div>

            {/* Star rating */}
            <StarRating rating={place.rating} />

            {/* Starting price */}
            {!isNaN(place.priceStart) && (
              <h5 className="mt-0.5 text-[15px] lg:mt-1 lg:text-base">
                Mulai dari{" "}
                <span className="text-lg font-bold lg:text-xl">
                  {formattedPriceStart}
                </span>
              </h5>
            )}
          </div>
        </div>
      </Link>
    </>
  );
};

export default PlacesItem;
