import { type SchemaTypeDefinition } from "sanity";
import { PinIcon } from "@sanity/icons";

const places: SchemaTypeDefinition = {
  name: "places",
  type: "document",
  title: "Places",
  icon: PinIcon,
  preview: {
    select: {
      title: "name",
      subtitle: "address",
      media: "images.0.asset",
    },
  },
  fields: [
    {
      name: "name",
      type: "string",
      title: "Name",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "images",
      type: "array",
      of: [
        {
          name: "image",
          type: "image",
          fields: [{ name: "alt", type: "string" }],
        },
      ],
      title: "Place Images",
      validation: (Rule) => Rule.required().max(5),
    },
    {
      name: "address",
      type: "string",
      title: "Address",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "googleMapsURL",
      type: "url",
      title: "Google Maps URL",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "rating",
      type: "number",
      title: "Rating",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "reviews",
      type: "number",
      title: "Reviews",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "priceStart",
      type: "number",
      title: "Price Start",
    },
    {
      name: "priceEnd",
      type: "number",
      title: "Price End",
    },
    {
      name: "distanceFromITB",
      type: "number",
      title: "Distance From ITB (meters)",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "is24Hours",
      type: "boolean",
      title: "24 Hours Open",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "openingHour",
      type: "datetime",
      title: "Opening Hour",
      options: {
        dateFormat: "-",
      },
      hidden: ({ document }) => document?.is24Hours as boolean,
      // When is24Hours is true, openingHour is not required and when its false, openingHour is required
      validation: (Rule) =>
        Rule.custom((field, context) =>
          (context.document?.is24Hours as boolean) === false &&
          field === undefined
            ? "Opening hour is required"
            : true
        ),
    },
    {
      name: "closingHour",
      type: "datetime",
      title: "Closing Hour",
      options: {
        dateFormat: "-",
      },
      hidden: ({ document }) => document?.is24Hours as boolean,
      // When is24Hours is true, closing hour is not required and when its false, closing hour is required
      validation: (Rule) =>
        Rule.custom((field, context) =>
          (context.document?.is24Hours as boolean) === false &&
          field === undefined
            ? "Closing hour is required"
            : true
        ),
    },
    {
      name: "isFreeWifiAvailable",
      type: "boolean",
      title: "Free Wifi",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "isFoodMenuAvailable",
      type: "boolean",
      title: "Food Menu",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "isSmokingAreaAvailable",
      type: "boolean",
      title: "Smoking Area",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "isParkingSpaceAvailable",
      type: "boolean",
      title: "Parking Space",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "isOutdoorAvailable",
      type: "boolean",
      title: "Outdoor",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "isACRoomAvailable",
      type: "boolean",
      title: "AC Rooms",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "isErgonomicTableChairAvailable",
      type: "boolean",
      title: "Ergonomic Tables & Chairs",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "about",
      title: "About",
      type: "array",
      of: [{ type: "block" }],
      validation: (Rule) => Rule.required(),
    },
  ],
};

export default places;
