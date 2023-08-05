import StarHalfIcon from "./icons/star-half-icon copy";
import StarIcon from "./icons/star-icon";

const StarRating = ({ rating }: { rating: number }) => {
  const fullStars = Math.floor(rating); // Take the round figure part of the twig
  const hasHalfStar = rating % 1 !== 0; // Is there a fraction of rating

  const stars = [];
  // Push star full icon based on fullStars variable
  for (let i = 0; i < fullStars; i++) {
    stars.push(
      <StarIcon
        key={i}
        size={25}
        className="aspect-square w-[20px] fill-custom-orange lg:w-[25px]"
      />,
    );
  }
  // Push star half icon based on boolean condition
  if (hasHalfStar) {
    stars.push(
      <StarHalfIcon
        key={fullStars}
        size={25}
        className="aspect-square w-[20px] fill-custom-orange lg:w-[25px]"
      />,
    );
  }

  return <div className="flex gap-1">{stars}</div>;
};
export default StarRating;
