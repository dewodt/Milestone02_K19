import Image from "next/image";
import Link from "next/link";
import StarRating from "../../../components/star-rating";

const PlacesItem = ({
  id,
  address,
  title,
  type,
  distance,
  rating,
  startPrice,
}: {
  id: number;
  address: string;
  title: string;
  type: string;
  distance: number;
  rating: number;
  startPrice: number | string;
}) => {
  // Function to format the distance based on whether it's in meters or kilometers
  const formatDistance = (distance: number) => {
    if (distance > 999) {
      const km = (distance / 1000).toLocaleString("id-ID", {
        minimumFractionDigits: 1,
        maximumFractionDigits: 1,
      });
      return `${km} km`; // Return the distance in kilometers with 1 decimal point
    } else {
      return `${distance.toLocaleString("id-ID")} m`; // Return the distance in meters
    }
  };

  // Function to format currency
  const formattedCurrency = (price: number) => {
    return (
      new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
        minimumFractionDigits: 0,
      }).format(price!) + ",-"
    );
  };

  return (
    <>
      {/* Horizontal line */}
      <span className="h-0.5 w-full bg-white" />

      {/* Main content */}
      <div
        key={id}
        className="flex w-full animate-blink gap-5 md:gap-8 lg:gap-10"
      >
        {/* Link to the cafe details page */}
        <div className="h-[100px] w-[130px] overflow-hidden rounded-xl sm:h-[140px] sm:w-[180px] md:h-[180px] md:w-[230px] lg:h-[250px] lg:w-[350px]">
          <Link href={`/cafe&coworking-spaces/${id}`}>
            <Image
              height={300}
              width={300}
              src="/upnormal.jpeg"
              alt={title}
              className="h-full w-full object-cover object-center transition-all duration-300 hover:scale-110 hover:opacity-75"
            />
          </Link>
        </div>
        <div className="flex flex-1 flex-col gap-0.5 font-inter font-medium text-white lg:gap-1">
          {/* Cafe address and title */}
          <h3 className="mb-0.5 text-sm lg:mb-1 lg:text-base">{address}</h3>
          <h2 className="text-lg font-extrabold lg:text-2xl">{title}</h2>

          {/* Cafe type and distance from ITB */}
          <div className="flex flex-col gap-[1px] text-sm lg:text-base">
            <h4>{type}</h4>
            <h5>{formatDistance(distance)} from ITB</h5>
          </div>

          {/* Star rating */}
          <StarRating rating={rating} />

          {/* Starting price */}
          <h5 className="mt-0.5 text-[15px] lg:mt-1 lg:text-base">
            {typeof startPrice === "string" ? (
              <span className="text-lg font-bold lg:text-xl">{startPrice}</span>
            ) : (
              <>
                Mulai dari{" "}
                <span className="text-lg font-bold lg:text-xl">
                  {formattedCurrency(startPrice)}
                </span>
              </>
            )}
          </h5>
        </div>
      </div>
    </>
  );
};

// Export the PlacesItem component as the default export
export default PlacesItem;
