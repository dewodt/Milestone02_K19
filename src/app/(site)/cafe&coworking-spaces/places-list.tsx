"use client"
import { useState } from "react";
import type { Place } from "@/types/cms";
import PlacesItem from "./places-item";
import Pagination from "../../../components/pagination";
import SearchBar from "@/components/searchbar";

const PlacesList = ({ places }: { places: Place[] }) => {
  const listPerPage = 6; // Number of list per page
  const [currentPage, setCurrentPage] = useState(1); // Current page

  // Handle search action
  const [search, setSearch] = useState("");
  const filteredPlaces = places.filter((place) =>
    place.name.toLowerCase().includes(search.toLowerCase())
  );

  // Calculate the starting and ending indices of list for the current page
  const indexOfLastCard = currentPage * listPerPage;
  const indexOfFirstCard = indexOfLastCard - listPerPage;
  const currentList = filteredPlaces.slice(indexOfFirstCard, indexOfLastCard);


  return (
    <>
      <div className="w-full lg:w-[900px]">
        <SearchBar value={search} setValue={setSearch} placeholder="Search" />
      </div>
      {/* List of places */}
      <section className="flex flex-col gap-5 lg:gap-8">
        {currentList.map((place) => (
          <PlacesItem key={place._id} place={place} />
        ))}
      </section>

      {/* Pagination */}
      {!search && ( // Show pagination only if filteredPlaces has more items than listPerPage
        <section className="flex w-full items-center justify-center gap-2 py-6 lg:gap-4 lg:py-10">
          <Pagination
            numberPage={Math.ceil(filteredPlaces.length / listPerPage)}
            setCurrentNumberPage={setCurrentPage}
            currentNumberPage={currentPage}
          />
        </section>
      )}
    </>
  );
};

export default PlacesList;
