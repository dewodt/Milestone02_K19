import CafeClient from "@/components/CafeClient";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Ganesha Space | Cafe",
  description: "...",
};

const CafePage = () => {
  const data = [
    {
      id: 1,
      address: "Jl. Ganesa No.3, Lb. Siliwangi",
      title: "One Eighty Coffee and Music",
      type: "Cafe & Co-working Space",
      distance: 200, // in meters
      rating: 4.5,
      startPrice: 29000,
    },
    {
      id: 2,
      address: "Jalan Sumur Bandung No. 20, Lb. Siliwangi",
      title: "Warunk Upnormal Sumur Bandung",
      type: "Cafe",
      distance: 550, // in meters
      rating: 4.2,
      startPrice: 16000,
    },
    {
      id: 3,
      address: "Jl. Ir. H. Juanda No. 155, Lb. Siliwangi",
      title: "Caffe Bene Dago",
      type: "Cafe",
      distance: 900, // in meters
      rating: 4.8,
      startPrice: 27000,
    },
    {
      id: 4,
      address: "Jl. Dayang Sumbi No. 10, Lb. Siliwangi",
      title: "Alfa X Dayang Sumbi",
      type: "Cafe & Co-working Space",
      distance: 80, // in meters
      rating: 4.4,
      startPrice: 15000,
    },
    {
      id: 5,
      address: "Jl. Ir. H. Juanda No. 90, Lebakgede",
      title: "Bosscha Space",
      type: "Cafe & Co-working Space",
      distance: 550, // in meters
      rating: 4.6,
      startPrice: 31000,
    },
    // New entries
    {
      id: 6,
      address:
        "Jl. Ir. H. Juanda No.84, Lebakgede, Kecamatan Coblong, Kota Bandung, Jawa Barat 40132",
      title: "Eduplex",
      type: "Co-working Space",
      distance: 800, // in meters
      rating: 4.7,
      startPrice: 60000,
    },
    {
      id: 7,
      address:
        "Jl. Dipati Ukur No.5, Lebakgede, Kecamatan Coblong, Kota Bandung, Jawa Barat 40132",
      title: "CO&CO Space",
      type: "Co-working Space",
      distance: 1100, // in meters
      rating: 4.3,
      startPrice: 50000,
    },
    {
      id: 8,
      address:
        "Jl. Kyai Luhur No.9, Lebakgede, Kecamatan Coblong, Kota Bandung, Jawa Barat 40132",
      title: "BIT Space",
      type: "Co-working Space",
      distance: 1000, // in meters
      rating: 4.9,
      startPrice: 50000,
    },
    {
      id: 9,
      address:
        "Innovation Factory, Jl. Ir. H. Juanda No.108, Lebakgede, Kecamatan Coblong, Kota Bandung, Jawa Barat 40132",
      title: "BLOCK71 Bandung",
      type: "Co-working Space",
      distance: 650, // in meters
      rating: 4.6,
      startPrice: 100000,
    },
    {
      id: 10,
      address:
        "Jl. Ganesha No. 10, Lantai 3 Gedung Labtek IX Kampus Institut Teknologi Bandung (ITB)",
      title: "LPIK ITB",
      type: "Co-working Space",
      distance: 0, // in meters
      rating: 4.9,
      startPrice: "Gratis untuk mahasiswa dan alumni ITB",
    },
  ];

  return (
    <div className="flex min-h-screen w-full flex-col gap-8 px-8 py-7 lg:gap-10 lg:px-16 lg:py-10">
      {/* Title */}
      <h1 className="font-poppins text-xl font-bold text-white lg:text-3xl">
        Rekomendasi <span className="text-custom-orange">Cafe</span> &{" "}
        <span className="text-custom-orange"> Co-working Space</span> di Sekitar
        ITB
      </h1>
      {/* Mapping data cafe */}
      <CafeClient data={data} />
    </div>
  );
};

export default CafePage;
