import Image from "next/image";
import Link from "next/link";
import type { Place } from "@/types/cms";
import { clientFetch } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import {
  getFormattedCurrency,
  getFormattedReviews,
  getFormattedRating,
} from "@/lib/utils";

interface CardsProps {
  _id: string;
  showRating: boolean;
  showReviews: boolean;
  showPriceStart: boolean;
}

const Cards = async ({
  _id,
  showRating,
  showReviews,
  showPriceStart,
}: CardsProps) => {
  // Get data from CMS (deduplicated)
  const place = await clientFetch<Place>(
    `*[_type == "places" && _id == "${_id}"][0]`
  );

  // Get formatted values
  const formattedCurrency = getFormattedCurrency(place.priceStart);
  const formattedReview = getFormattedReviews(place.reviews);
  const formattedRating = getFormattedRating(place.rating);

  return (
    <Link href={`/cafe/${_id}`}>
      <article className="group flex flex-col gap-2">
        {/* Image */}
        <div className=" overflow-hidden rounded-lg">
          <Image
            className="aspect-video w-full object-cover object-center xl:duration-200 xl:ease-in-out xl:group-hover:scale-105"
            alt={place.images[0].alt}
            src={urlForImage(place.images[0]).url()}
            width={300}
            height={150}
          />
        </div>

        {/* Title */}
        <h4 className="font-poppins text-xl font-bold leading-none text-white xl:text-2xl">
          {place.name}
        </h4>

        {/* Description */}
        <p className="font-inter text-base font-medium text-white xl:text-lg">
          {`${showRating ? `Dinilai ${formattedRating}+ bintang` : ""} ${
            showRating && showReviews ? "|" : ""
          } ${showReviews ? `Lebih dari ${formattedReview}+ review` : ""} ${
            showReviews && showPriceStart ? "|" : ""
          } ${showPriceStart ? `Mulai dari ${formattedCurrency}` : ""}`}
        </p>
      </article>
    </Link>
  );
};

Cards.defaultProps = {
  showRating: false,
  showReviews: false,
  showPriceStart: false,
};

export default Cards;
