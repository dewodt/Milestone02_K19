import type { Metadata } from "next/types";

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
          ITB yang menurut kami bagus dan sesuai untuk kebutuhan mahasiswa.
          Selain itu, pembuatan website ini juga ditujukan untuk memenuhi tugas
          milestones SPARTA HMIF 2022. Semoga dengan pembuatan website ini
          diharapkan dapat memberikan manfaat bagi mahasiswa ITB.
        </p>
      </section>
    </main>
  );
};

export default AboutUs;

export const metadata: Metadata = {
  title: "About Us | Ganesha Space",
  description:
    "Memperlihatkan informasi mengenai alasan dan tujuan website ganesha space dibuat.",
  generator: "Next.js",
  applicationName: "Ganesha Space",
  colorScheme: "dark",
  openGraph: {
    title: "About Us | Ganesha Space",
    description:
      "Memperlihatkan informasi mengenai alasan dan tujuan website ganesha space dibuat.",
    url: "https://ganesha-space.vercel.app/",
    siteName: "Ganesha Space",
    images: [
      {
        url: "https://ganesha-space.vercel.app/link-preview.png",
        width: 1200,
        height: 630,
        alt: "Ganesha Space Logo",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | Ganesha Space",
    description:
      "Memperlihatkan informasi mengenai alasan dan tujuan website ganesha space dibuat.",
    images: [
      {
        url: "https://ganesha-space.vercel.app/link-preview.png",
        width: 1200,
        height: 630,
        alt: "Ganesha Space Logo",
      },
    ],
  },
};
