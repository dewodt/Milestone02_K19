import type { Metadata } from "next";
import type { Place } from "@/types/cms";
import Image from "next/image";
import { PortableText, toPlainText } from "@portabletext/react";
import { clientFetch } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import {
  getFormattedCurrency,
  getFormattedDistance,
  getFormattedHourMinute,
  getFormattedReviews,
} from "@/lib/utils";
import StarRating from "@/components/star-rating";
import CarIcon from "@/components/icons/car-icon";
import SmokingIcon from "@/components/icons/smoking-icon";
import UtenilsIcon from "@/components/icons/utenils-icon";
import WifiIcon from "@/components/icons/wifi-icon";

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  // Get id
  const { id } = params;

  //  Get place data
  const place = await clientFetch<Place>(
    `*[_type == "places" && _id == "${id}"][0]`
  );

  return {
    title: `${place.name} | Ganesha Space`,
    description: toPlainText(place.about),
  };
}

// Generate static paths
export const generateStaticParams = async () => {
  const places = await clientFetch<Place[]>("*[_type == 'places']");

  return places.map((place) => {
    return { id: place._id };
  });
};

const CafeCoworkingSpacesDetail = async ({
  params,
}: {
  params: { id: string };
}) => {
  // Get id
  const { id } = params;

  //  Get place data
  const place = await clientFetch<Place>(
    `*[_type == "places" && _id == "${id}"][0]`
  );

  // Get formatted values
  const formattedReview = getFormattedReviews(place.reviews);
  const formattedDistance = getFormattedDistance(place.distanceFromITB);
  const formattedPriceStart = getFormattedCurrency(place.priceStart);
  const formattedPriceEnd = getFormattedCurrency(place.priceEnd!);
  const formattedOpeningHour = getFormattedHourMinute(
    new Date(place.openingHour)
  );
  const formattedClosingHour = getFormattedHourMinute(
    new Date(place.closingHour)
  );

  return (
    <div className="flex min-h-screen w-full flex-col gap-6 px-6 py-6 md:px-12 lg:gap-10 lg:px-16 lg:py-10 2xl:px-48">
      {/* Title */}
      <h1 className=" font-poppins text-2xl font-bold text-white md:text-3xl lg:text-4xl">
        {place.name}
      </h1>

      {/* Ratings and address */}
      <section className="-mt-3 flex w-full gap-7 lg:-mt-6 lg:gap-10">
        {/* Review */}
        <div className="flex flex-col gap-x-5 md:flex-row">
          <StarRating rating={place.rating} />
          <h2 className="text-sm text-white lg:text-lg">
            Lebih dari {formattedReview}+ reviews
          </h2>
        </div>
        {/* Address */}
        <div className="text-sm text-white lg:text-lg">{place.address}</div>
      </section>

      {/* Image container */}
      <section className="flex h-[150px] w-full gap-2 md:h-[280px] md:gap-4 lg:h-[500px] lg:gap-6">
        {/* First Image */}
        {place.images[0] && (
          <Image
            src={urlForImage(place.images[0]).url()}
            width="1920"
            height={1080}
            className={`${
              place.images.length === 1
                ? "w-full"
                : "w-[calc(50%-6px)] md:w-[calc(50%-8px)] lg:w-[calc(50%-12px)]"
            } h-full rounded-xl object-cover object-center`}
            alt={place.images[0].alt}
          />
        )}
        <div className="flex flex-1 flex-col gap-2 md:gap-4 lg:gap-6">
          {/* Container 2nd and 3rd */}
          <div
            className={`flex w-full ${
              place.images.length > 3 ? "flex-row" : "flex-col"
            } gap-2 md:gap-4 lg:gap-6 ${
              place.images.length > 2
                ? "h-[calc(50%-6px)] md:h-[calc(50%-8px)] lg:h-[calc(50%-12px)]"
                : "h-full"
            }`}
          >
            {place.images[1] && (
              <Image
                src={urlForImage(place.images[1]).url()}
                width="1920"
                height={1080}
                className={` h-full rounded-xl object-cover object-center ${
                  place.images.length > 3
                    ? "w-[calc(50%-6px)] md:w-[calc(50%-8px)] lg:w-[calc(50%-12px)]"
                    : "w-full"
                }`}
                alt={place.images[1].alt}
              />
            )}
            {place.images[2] && (
              <Image
                src={urlForImage(place.images[2]).url()}
                width="1920"
                height={1080}
                className={`${
                  place.images.length === 3
                    ? "w-full"
                    : "w-[calc(50%-6px)] md:w-[calc(50%-8px)] lg:w-[calc(50%-12px)]"
                } h-full rounded-xl object-cover object-center`}
                alt={place.images[2].alt}
              />
            )}
          </div>
          {/* Container 4th and 5th */}
          <div className="flex h-[calc(50%-6px)] w-full gap-2 md:h-[calc(50%-8px)] md:gap-4 lg:h-[calc(50%-12px)] lg:gap-6">
            {place.images[3] && (
              <Image
                src={urlForImage(place.images[3]).url()}
                width="1920"
                height={1080}
                className={`${
                  place.images.length === 4
                    ? "w-full"
                    : "w-[calc(50%-6px)] md:w-[calc(50%-8px)] lg:w-[calc(50%-12px)]"
                } h-full rounded-xl object-cover object-center`}
                alt={place.images[3].alt}
              />
            )}
            {place.images[4] && (
              <Image
                src={urlForImage(place.images[4]).url()}
                width="1920"
                height={1080}
                className={`h-full w-[calc(50%-6px)] rounded-xl object-cover object-center md:w-[calc(50%-8px)] lg:w-[calc(50%-12px)]`}
                alt={place.images[4].alt}
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
              {formattedPriceStart}{" "}
              {place.priceEnd && " - " + formattedPriceEnd}
            </span>
          </h3>
        </div>
        {/* Distance */}
        <div className="flex flex-col">
          <p className="text-base lg:text-xl">Jarak dari ITB: </p>
          <h3 className="font-poppins text-lg font-bold md:text-xl lg:text-2xl">
            {formattedDistance}
          </h3>
        </div>
        {/* Opening hours */}
        <div className="flex flex-col">
          <p className="text-base lg:text-xl">Jam Buka </p>
          <h3 className="font-poppins text-lg font-bold md:text-xl lg:text-2xl">
            {place.is24Hours
              ? "24 Hours"
              : `${formattedOpeningHour} - ${formattedClosingHour}`}
          </h3>
        </div>
      </section>

      {/* Horizontal line */}
      <span className="h-0.5 w-full bg-white" />

      {/* Details Facilities */}
      <section className="flex flex-col gap-3 text-white md:gap-4 lg:gap-6">
        {/* Wifi */}
        {place.isFreeWifiAvailable && (
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
        {place.isFoodMenuAvailable && (
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
        {place.isSmokingAreaAvailable && (
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
        {place.isParkingSpaceAvailable && (
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
        <h3 className="font-poppins text-lg font-bold capitalize xl:text-xl">
          Tentang {place.name}
        </h3>
        <PortableText
          value={place.about}
          components={{
            block: {
              normal: ({ children }) => (
                <p className="text-justify font-inter text-base xl:text-lg">
                  {children}
                </p>
              ),
            },
          }}
        />
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
          <iframe className="h-full w-full" src={place.googleMapsURL} />
        </div>
      </section>
      {/* Horizontal line */}
      <span className="h-0.5 w-full bg-white" />
    </div>
  );
};

export default CafeCoworkingSpacesDetail;
