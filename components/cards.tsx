import Image from "next/image";
import Link from "next/link";

interface CardsProps {
  id: string;
  title: string;
  url: string;
  rating?: number;
  review?: number;
  priceStart?: number;
}

const Cards = ({ id, title, url, rating, review, priceStart }: CardsProps) => {
  const formattedCurrency = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  }).format(priceStart!);

  const formattedReview = new Intl.NumberFormat("id-ID").format(review!);

  // Create decimal
  const formattedRating = (Math.round(rating! * 10) / 10)
    .toFixed(1)
    .replace(".", ",");

  return (
    <Link href={`/cafe/${id}`}>
      <article className="group flex flex-col gap-2">
        {/* Image */}
        <div className=" overflow-hidden rounded-lg">
          <Image
            className="aspect-video w-full object-cover object-center xl:duration-200 xl:ease-in-out xl:group-hover:scale-105"
            alt={title}
            src={url}
            width={300}
            height={150}
          />
        </div>

        {/* Title */}
        <h4 className="font-poppins text-xl font-bold leading-none text-white xl:text-2xl">
          {title}
        </h4>

        {/* Description */}
        <p className="font-inter text-base font-medium text-white xl:text-lg">
          {`${rating ? `Dinilai ${formattedRating}+ bintang` : ""} ${
            rating && review ? "|" : ""
          } ${review ? `Lebih dari ${formattedReview}+ review` : ""} ${
            review && priceStart ? "|" : ""
          } ${priceStart ? `Mulai dari ${formattedCurrency}` : ""}`}
        </p>
      </article>
    </Link>
  );
};

export default Cards;
