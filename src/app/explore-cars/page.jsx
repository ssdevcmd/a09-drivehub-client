import CarCard from '@/components/CarCard';
import React from 'react';

const ExploreCarsPage = async () => {
    const res = await fetch('http://localhost:5000/explore-cars')
    const cars = await res.json()
    console.log(cars);
    return (
        <div>
            <h1 className='text-5xl font-bold m-10'>All cars</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {
                  cars.map(car => <CarCard key={car._id} car={car}></CarCard>)  
                }
            </div>
        </div>
    );
};

export default ExploreCarsPage;