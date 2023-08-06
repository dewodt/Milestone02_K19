import Image from "next/image";
import Link from "next/link";
import Button from "@/components/button";
import Cards from "@/components/cards";
import type { Metadata } from "next/types";
import type { Place } from "@/types/cms";
import { urlForImage } from "@/sanity/lib/image";
import { clientFetch } from "@/sanity/lib/client";

export const metadata: Metadata = {
  title: "Ganesha Space",
};

const Home = async () => {
  // Fetch datas from CMS
  const places = await clientFetch<Place[]>("*[_type == 'places']");

  // Highest review sorted descending and sliced to 4.
  const mostPopularPlaces = places
    .sort((placeA, placeB) => placeB.reviews - placeA.reviews)
    .slice(0, 4);

  // Highest rating sorted descending sliced to 4
  const mostLovedPlaces = places
    .sort((placeA, placeB) => placeB.rating - placeA.rating)
    .slice(0, 4);

  // Lowest price sorted ascending sliced to 4
  const mostAffordablePlaces = places
    .filter((place) => !isNaN(place.priceStart))
    .sort((placeA, placeB) => placeA.priceStart - placeB.priceStart)
    .slice(0, 4);

  const placeRecommendation = await clientFetch<Place>(
    `*[_type == "placeRecommendation"]{placeRecommendation->}[0].placeRecommendation`
  );

  return (
    <main className="flex-auto bg-custom-soft-black">
      {/* Hero */}
      <section className="relative flex h-[calc(100vh-80px)] w-full items-center p-6 sm:p-10 xl:h-[calc(100vh-90px)] xl:p-20">
        <div className="z-10 flex max-w-4xl flex-col gap-4 xl:gap-7">
          {/* Title */}
          <h1 className="font-poppins text-4xl font-bold tracking-wide text-white xl:text-6xl">
            Yuk <span className="text-custom-blue-green">Nongkrong</span>{" "}
            Bareng!
          </h1>
          {/* Description */}
          <p className="font-inter text-lg font-normal tracking-wider text-white xl:text-xl">
            Disini tersedia informasi mengenai Cafe dan Co-working space di
            sekitar ITB. Pas banget buat kalian yang suka nugas maupun belajar
            dan lagi nyari tempat yang aman, nyaman, dan deket!
          </p>

          {/* Button */}
          <Link href="/cafe&coworking-spaces">
            <Button color="solid-blue-green">Lebih Lengkap!</Button>
          </Link>
        </div>

        {/* BG Image */}
        <Image
          alt="Kolam Intel ITB"
          src="/itb.jpeg"
          fill={true}
          className="z-0 object-cover object-top opacity-50"
          sizes="100vw"
        />
      </section>

      <div className="flex flex-col gap-8 p-6 sm:p-8 xl:gap-16 xl:p-16">
        {/* Most Popular */}
        <section className="flex flex-col gap-4 xl:gap-8">
          {/* Title */}
          <h2 className="font-poppins text-2xl font-bold text-white xl:text-4xl">
            Most <span className="text-custom-blue-green">Popular</span>
          </h2>

          {/* Grids */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3 xl:grid-cols-4 xl:gap-12">
            {mostPopularPlaces.map((item) => {
              return <Cards key={item._id} _id={item._id} showReviews={true} />;
            })}
          </div>
        </section>

        {/* Highest Rating */}
        <section className="flex flex-col gap-4 xl:gap-8">
          {/* Title */}
          <h2 className="font-poppins text-2xl font-bold text-white xl:text-4xl">
            Most <span className="text-red-500">Loved</span>
          </h2>

          {/* Grids */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3 xl:grid-cols-4 xl:gap-12">
            {mostLovedPlaces.map((item) => {
              return <Cards key={item._id} _id={item._id} showRating={true} />;
            })}
          </div>
        </section>

        {/* Most affordable */}
        <section className="flex flex-col gap-4 xl:gap-8">
          {/* Title */}
          <h2 className="font-poppins text-2xl font-bold text-white xl:text-4xl">
            Most <span className="text-green-400">Affordable</span>
          </h2>

          {/* Grids */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3 xl:grid-cols-4 xl:gap-12">
            {mostAffordablePlaces.map((item) => {
              return (
                <Cards key={item._id} _id={item._id} showPriceStart={true} />
              );
            })}
          </div>
        </section>

        {/* Our Recommendation */}
        <section className="flex flex-col gap-4 xl:gap-8">
          <h2 className="font-poppins text-2xl font-bold text-white xl:text-4xl">
            Our <span className="text-orange-500">Recommendation</span>
          </h2>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-8 xl:gap-12">
            <Image
              className="aspect-video w-full rounded-lg object-cover object-center sm:max-w-sm lg:max-w-md xl:max-w-lg 2xl:max-w-xl"
              src={urlForImage(placeRecommendation.images[0]).url()}
              alt={placeRecommendation.images[0].alt}
              width={300}
              height={150}
            />
            <div className="flex w-full flex-col gap-4">
              <h3 className="font-poppins text-xl font-bold text-white xl:text-2xl">
                {placeRecommendation.name}
              </h3>
              <p className="text text-justify font-inter text-base text-white xl:text-lg">
                {`Dari hasil survey mengenai Cafe & Co-working Space yang ada di
                deket ITB, kami merekomendasikan ${placeRecommendation.name} sebagai
                Cafe & Co-working Space terbaik. ${placeRecommendation.name} berada di lokasi yang
                strategis, menawarkan makanan dan minuman, serta menyediakan
                tempat coworking space bagi mahasiswa yang ingin mengerjakan
                tugas. Selain itu, harga dan kualitas yang ditawarkan sangat
                cocok dan pas untuk mahasiswa.`}
              </p>
              <Link
                href={`/cafe&coworking-spaces/${placeRecommendation._id}`}
                className="self-center sm:self-start"
              >
                <Button color="solid-blue-green">Lihat Lebih Detail</Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Home;
