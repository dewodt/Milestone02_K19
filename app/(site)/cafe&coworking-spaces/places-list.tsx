"use client";

import { useState } from "react";
import PlacesItem from "./places-item";
import Pagination from "../../../components/pagination";

interface Place {
  id: number;
  address: string;
  title: string;
  type: string;
  distance: number; // in meters
  rating: number;
  startPrice: number | string; // in rupiah
}

const PlacesList = ({ data }: { data: Place[] }) => {
  const listPerPage = 6; // Number of list per page
  const [currentPage, setCurrentPage] = useState(1); // Current page

  // Calculate the starting and ending indices of list for the current page
  const indexOfLastCard = currentPage * listPerPage;
  const indexOfFirstCard = indexOfLastCard - listPerPage;
  const currentList = data.slice(indexOfFirstCard, indexOfLastCard);
  return (
    <>
      {/* List of places */}
      <section className="flex flex-col gap-5 lg:gap-8">
        {currentList.map((item: any) => (
          <PlacesItem
            key={item.id}
            id={item.id}
            address={item.address}
            title={item.title}
            type={item.placeType}
            distance={item.distance}
            rating={item.rating}
            startPrice={item.startPrice}
          />
        ))}
      </section>

      {/* Pagination */}
      <section className="flex w-full items-center justify-center gap-2 py-6 lg:gap-4 lg:py-10">
        <Pagination
          numberPage={Math.ceil(data.length / listPerPage)}
          setCurrentNumberPage={setCurrentPage}
          currentNumberPage={currentPage}
        />
      </section>
    </>
  );
};

export default PlacesList;
