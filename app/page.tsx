import Image from "next/image";
import Button from "@/components/button";
import Cards from "@/components/cards";
import type { Metadata } from "next/types";

export const metadata: Metadata = {
  title: "Ganesha Space",
};

const Home = () => {
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

  return (
    <main className="flex-auto bg-custom-soft-black">
      {/* Hero */}
      <section className="relative flex h-[calc(100vh-80px)] w-full items-center p-5 sm:p-10 xl:h-[calc(100vh-90px)] xl:p-20">
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
          <Button color="solid-blue-green">Browse Now!</Button>
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
        <section></section>

        {/* Complete Package */}
        <section></section>
      </div>
    </main>
  );
};

export default Home;
