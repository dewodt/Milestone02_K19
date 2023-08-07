import type { Image } from "sanity";
import type { ArbitraryTypedObject } from "@portabletext/types";
import type { PortableTextBlock } from "@portabletext/types";

export interface CustomImage extends Image {
  alt: string;
}

export interface Place {
  _id: string;
  _rev?: string;
  _type?: string;
  _createdAt?: string;
  _updatedAt?: string;
  name: string;
  images: Array<CustomImage>;
  address: string;
  googleMapsURL: string;
  rating: number;
  reviews: number;
  priceStart: number;
  priceEnd?: number;
  distanceFromITB: number;
  is24Hours: boolean;
  openingHour: string;
  closingHour: string;
  isFreeWifiAvailable: boolean;
  isFoodMenuAvailable: boolean;
  isParkingSpaceAvailable: boolean;
  isSmokingAreaAvailable: boolean;
  isErgonomicTableChairAvailable: boolean;
  isACRoomAvailable: boolean;
  isOutdoorAvailable: boolean;
  about: PortableTextBlock | ArbitraryTypedObject[] | PortableTextBlock[];
}
