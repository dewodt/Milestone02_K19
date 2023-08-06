import { Metadata } from "next";
import PlacesList from "./places-list";
import { clientFetch } from "@/sanity/lib/client";
import type { Place } from "@/types/cms";

export const metadata: Metadata = {
  title: "Ganesha Space | Cafe",
  description: "...",
};

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
