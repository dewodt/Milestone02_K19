import { type SchemaTypeDefinition } from "sanity";
import type { Rule } from "sanity";

const placeRecommendation: SchemaTypeDefinition = {
  name: "placeRecommendation",
  type: "document",
  title: "Place Recommendation",
  fields: [
    {
      name: "placeRecommendation",
      type: "reference",
      title: "Our Recommendation Place",
      validation: (Rule) => Rule.required(),
      to: [{ type: "places" }],
    },
  ],
  validation: (Rule: Rule) => Rule.required(),
};

export default placeRecommendation;
