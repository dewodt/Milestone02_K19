import type { Metadata } from "next/types";

export const metadata: Metadata = {
  title: "About Us | Ganesha Space",
};

const AboutUs = () => {
  return (
    <main className="flex flex-auto justify-center p-5 xl:p-20">
      <section className="flex max-w-3xl flex-col items-center gap-4 xl:gap-6">
        <h1 className="font-poppins text-2xl font-bold text-white xl:text-4xl">
          About <span className="text-orange-500">Us</span>
        </h1>
        <p className="text-justify font-inter text-base text-white xl:text-lg">
          Kami dari kelompok 19 Milestones SPARTA HMIF 2022 mengucapkan terima
          kasih telah mengunjungi website ini. Tujuan kami menciptakan website
          ganeshaspace adalah untuk membantu mahasiswa ITB yang merasakan
          kesulitan untuk mencari tempat makan ataupun coworking space di deket
          ITB. Website ini memberikan list beberapa cafe dengan jarak 3 km dari
          ITB serta rekomendasi cafe yang bagus dan sesuai untuk kebutuhan
          mahasiswa. Selain itu, pembuatan website ini juga ditujukan untuk
          memenuhi tugas milestones SPARTA HMIF 2022. Semoga dengan pembuatan
          website ini diharapkan dapat memberikan manfaat bagi mahasiswa ITB.
        </p>
      </section>
    </main>
  );
};

export default AboutUs;
