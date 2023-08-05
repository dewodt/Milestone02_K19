import StarRating from '@/components/StarRatting'
import React from 'react'

const CafeDetailsPage = () => {
    const data = {
        id: 8,
        address: "Jl. Ganesa No.3, Lb. Siliwangi, Kecamatan Coblong, Kota Bandung, Jawa Barat 40132",
        title: "Chill Cafe & Co-working",
        placeType: "Cafe & Co-working Space",
        distance: 700,
        rating: 4.3,
        startPrice: 35000 // Rp35,000
    }
    const review = 8100

    // const formattedRating = (Math.round(rating! * 10) / 10)
    // .toFixed(1)
    // .replace(".", ",");

    const formattedCurrency = (price:number)=> (new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
        minimumFractionDigits: 0,
      }).format(price!));

    const formattedReview = new Intl.NumberFormat("id-ID").format(review!);


    return (
        <div className="min-h-screen w-full flex flex-col gap-8 lg:gap-10 px-8 lg:px-16 py-7 lg:py-10">
            {/* Title */}
            <h1 className="font-poppins font-bold text-2xl lg:text-4xl text-white">One Eighty Coffee and Music</h1>
            {/* Ratings and address */}
            <div className="w-full flex gap-10">
                {/* Review */}
                <div className="flex gap-5">
                    <StarRating rating={data.rating} />
                    <h2 className="text-white lg:text-lg">Lebih dari {formattedReview}+ reviews</h2>
                </div>
                {/* Address */}
                <div className="text-white lg:text-lg">{data.address}</div>
            </div>
            <div className="w-full">

            </div>
            {/* Details */}
            <div className="text-white ml-auto">
                <p className="text-2xl">Kisaran harga menu: </p>
                <h3 className="text-3xl">Mulai dari <span className="text-4xl font-bold">{formattedCurrency(data.startPrice)}</span></h3>

            </div>
        </div>
    )
}

export default CafeDetailsPage
