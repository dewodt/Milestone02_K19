import Image from "next/image";
import Button from "@/components/button";
import Cards from "@/components/cards";

const Home = () => {
  // Lowest pricestart sorted ascending and sliced to 4.
  const mostAffordable = [
    { id: "1", title: "Bosscha Space", url: "/itb.jpeg", review: 40000 },
    { id: "2", title: "Bosscha Space 2", url: "/itb.jpeg", review: 30000 },
    { id: "3", title: "Bosscha Space 3", url: "/itb.jpeg", review: 20000 },
    { id: "4", title: "Bosscha Space 3", url: "/itb.jpeg", review: 20000 },
  ];

  return (
    <main className="flex-auto bg-custom-soft-black">
      {/* Hero */}
      <section className="relative flex h-[calc(100vh-80px)] w-full items-center p-5 sm:p-10 xl:h-[calc(100vh-90px)] xl:p-20">
        <div className="z-10 flex max-w-4xl flex-col gap-4 xl:gap-7">
          {/* Title */}
          <h1 className="font-poppins text-4xl font-bold text-white xl:text-6xl">
            Yuk <span className="text-custom-blue-green">Nongkrong</span>{" "}
            Bareng!
          </h1>
          {/* Description */}
          <p className="font-inter text-lg font-normal text-white xl:text-xl">
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

      <div className="p-6 lg:p-10 xl:p-16">
        {/* Most Popular */}
        <section className="flex flex-col gap-4">
        </section>

        {/* Highest Rating */}
        <section></section>

        {/* Most affordable */}
        <section></section>

        {/* Our Recommendation */}
        <section></section>

        {/* Complete Package */}
        <section></section>
      </div>
    </main>
  );
};

export default Home;
