import { Metadata } from "next";
import PlacesList from "./places-list";
import { clientFetch } from "@/sanity/lib/client";
import type { Place } from "@/types/cms";

const CafeCoworkingSpaces = async () => {
  const places = await clientFetch<Place[]>("*[_type == 'places']");

  return (
    <div className="flex min-h-screen w-full flex-col gap-8 px-8 py-7 lg:gap-10 lg:px-16 lg:py-10">
      {/* Title */}
      <h1 className="font-poppins text-xl font-bold text-white lg:text-3xl">
        Rekomendasi <span className="text-custom-orange">Cafe</span> &{" "}
        <span className="text-custom-orange"> Co-working Space</span> di Sekitar
        ITB
      </h1>
      {/* Mapping data cafe */}
      <PlacesList places={places} />
    </div>
  );
};

export default CafeCoworkingSpaces;

export const metadata: Metadata = {
  title: "Cafe & Coworking Spaces | Ganesha Space",
  description:
    "Memperlihatkan list semua cafe & coworking space yang tersedia dengan jarak 3 km dari ITB yang menurut kami bagus dan sesuai untuk kebutuhan mahasiswa.",
  generator: "Next.js",
  applicationName: "Ganesha Space",
  colorScheme: "dark",
  openGraph: {
    title: "Ganesha Space",
    description:
      "Memperlihatkan list semua cafe & coworking space yang tersedia dengan jarak 3 km dari ITB yang menurut kami bagus dan sesuai untuk kebutuhan mahasiswa.",
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
    title: "Ganesha Space",
    description:
      "Memperlihatkan list semua cafe & coworking space yang tersedia dengan jarak 3 km dari ITB yang menurut kami bagus dan sesuai untuk kebutuhan mahasiswa.",
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
