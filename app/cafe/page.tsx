import CafeClient from '@/components/CafeClient';
import CafeList from '@/components/CafeList';
import React from 'react'

const CafePage = () => {
    const data = [
        {
            id:1,
            address: "123 Main Street",
            title: "Coffee Haven",
            placeType: "Cafe",
            distance: 23440, // in meters
            rating: 4.5,
            startPrice: 25000 // Rp25,000
        },
        {
            id:2,
            address: "456 Park Avenue",
            title: "Workspace Hub",
            placeType: "Co-working Space",
            distance: 999,
            rating: 3.8,
            startPrice: 50000 // Rp50,000
        },
        {
            id:3,
            address: "789 Central Square",
            title: "Chill Cafe & Co-working",
            placeType: "Cafe & Co-working Space",
            distance: 700,
            rating: 4.3,
            startPrice: 35000 // Rp35,000
        },
        {
            id:4,
            address: "789 Central Square",
            title: "Chill Cafe & Co-working",
            placeType: "Cafe & Co-working Space",
            distance: 700,
            rating: 4.3,
            startPrice: 35000 // Rp35,000
        },
        {
            id:5,
            address: "789 Central Square",
            title: "Chill Cafe & Co-working",
            placeType: "Cafe & Co-working Space",
            distance: 700,
            rating: 4.3,
            startPrice: 35000 // Rp35,000
        },
        {
            id:6,
            address: "789 Central Square",
            title: "Chill Cafe & Co-working",
            placeType: "Cafe & Co-working Space",
            distance: 700,
            rating: 4.3,
            startPrice: 35000 // Rp35,000
        },
        {
            id:7,
            address: "789 Central Square",
            title: "Chill Cafe & Co-working",
            placeType: "Cafe & Co-working Space",
            distance: 700,
            rating: 4.3,
            startPrice: 35000 // Rp35,000
        },
        {
            id:8,
            address: "789 Central Square",
            title: "Chill Cafe & Co-working",
            placeType: "Cafe & Co-working Space",
            distance: 700,
            rating: 4.3,
            startPrice: 35000 // Rp35,000
        },
       
        // You can add more objects here if needed
    ];
    

    return (
        <div className="min-h-screen w-full flex flex-col gap-8 lg:gap-10 px-8 lg:px-16 py-7 lg:py-10">
            {/* Title */}
            <h1 className="font-poppins font-bold text-xl lg:text-3xl text-white">Rekomendasi <span className="text-custom-orange">Cafe</span> & <span className="text-custom-orange"> Co-working Space</span> di Sekitar ITB</h1>
            {/* Mapping data cafe */}
            <CafeClient data={data}/>
        </div>
    )
}

export default CafePage
