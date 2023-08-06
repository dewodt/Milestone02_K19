export const getFormattedHourMinute = (date: Date) =>
  date.toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: false,
  });

export const getFormattedDistance = (distance: number) => {
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

export const getFormattedCurrency = (price: number) =>
  new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(price);

export const getFormattedReviews = (reviews: number) =>
  new Intl.NumberFormat("id-ID").format(reviews);
