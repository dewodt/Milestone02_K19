import Image from "next/image";
import Link from "next/link";
import Button from "@/components/button";
import Cards from "@/components/cards";
import type { Metadata } from "next/types";

export const metadata: Metadata = {
  title: "Ganesha Space",
};

const Home = () => {
  // Fetch datas from CMS/Google API

  // Highest review sorted descending and sliced to 4.
  const mostPopular = [
    { id: "1", title: "Bosscha Space", url: "/itb.jpeg", review: 40000 },
    { id: "2", title: "Bosscha Space 2", url: "/itb.jpeg", review: 30000 },
    { id: "3", title: "Bosscha Space 3", url: "/itb.jpeg", review: 20000 },
    { id: "4", title: "Bosscha Space 3", url: "/itb.jpeg", review: 20000 },
  ];

  // Highest rating sorted descending sliced to 4
  const mostLoved = [
    { id: "1", title: "Bosscha Space", url: "/itb.jpeg", rating: 4.0 },
    { id: "2", title: "Bosscha Space 2", url: "/itb.jpeg", rating: 4.4 },
    { id: "3", title: "Bosscha Space 3", url: "/itb.jpeg", rating: 4.3 },
    { id: "4", title: "Bosscha Space 3", url: "/itb.jpeg", rating: 4.2 },
  ];

  // Lowest price sorted ascending sliced to 4
  const mostAffordable = [
    { id: "1", title: "Bosscha Space", url: "/itb.jpeg", priceStart: 40000 },
    { id: "2", title: "Bosscha Space 2", url: "/itb.jpeg", priceStart: 45000 },
    { id: "3", title: "Bosscha Space 3", url: "/itb.jpeg", priceStart: 50000 },
    { id: "4", title: "Bosscha Space 3", url: "/itb.jpeg", priceStart: 55000 },
  ];

  const ourRecommendation = {
    id: "1",
    title: "Bosscha Space 1",
    url: "/itb.jpeg",
  };

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
          <Link href="/cafe">
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
            {mostPopular.map((item) => {
              return (
                <Cards
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  url={item.url}
                  review={item.review}
                />
              );
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
            {mostLoved.map((item) => {
              return (
                <Cards
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  url={item.url}
                  rating={item.rating}
                />
              );
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
            {mostAffordable.map((item) => {
              return (
                <Cards
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  url={item.url}
                  priceStart={item.priceStart}
                />
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
              src={ourRecommendation.url}
              alt={ourRecommendation.title}
              width={300}
              height={150}
            />
            <div className="flex w-full flex-col gap-4">
              <h3 className="font-poppins text-xl font-bold text-white xl:text-2xl">
                {ourRecommendation.title}
              </h3>
              <p className="text text-justify font-inter text-base text-white xl:text-lg">
                {`Dari hasil survey mengenai Cafe & Co-working Space yang ada di
                deket ITB, kami merekomendasikan ${ourRecommendation.title} sebagai
                Cafe & Co-working Space terbaik. ${ourRecommendation.title} berada di lokasi yang
                strategis, menawarkan makanan dan minuman, serta menyediakan
                tempat coworking space bagi mahasiswa yang ingin mengerjakan
                tugas. Selain itu, harga dan kualitas yang ditawarkan sangat
                cocok dan pas untuk mahasiswa.`}
              </p>
              <Link
                href={`/cafe/${ourRecommendation.id}`}
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
