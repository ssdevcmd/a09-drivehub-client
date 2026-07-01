import React from 'react';
import CarCard from './CarCard';

const AvailableCars = async () => {

    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/cars`);

    if (!res.ok) {
        throw new Error("Failed to fetch cars");
    }
    const cars = await res.json();
    // console.log('Available cars:....', cars);

    return (
        <div className='max-w-7xl mx-auto px-6 py-20 bg-slate-50'>
            <h2 className="text-4xl font-bold mb-4">Available Cars</h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {cars.map((car) => (

                    <CarCard key={car._id} car={car} />

                ))}
            </div>
        </div>
    );
};

export default AvailableCars;