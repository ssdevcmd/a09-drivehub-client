import CarCard from '@/components/CarCard';
import { Button } from '@heroui/react';
import React from 'react';
import { FiSearch } from 'react-icons/fi';

const ExploreCarsPage = async ({ searchParams }) => {
    const { search = "", type = "All" } = await searchParams
    const res = await fetch(`http://localhost:5000/explore-cars?search=${search}&type=${type}`);

    const cars = await res.json();
    // console.log('cars:....',cars);
    return (
        <div className='pb-10'>
            <div className='flex justify-between items-center my-10'>
                <h1 className='text-5xl font-bold'>All cars</h1>
                <form className="flex flex-col gap-3 sm:flex-row sm:items-center">
                    <div className='relative w-full sm:w-56'>
                        <FiSearch className='absolute left-2 top-1/2 -translate-y-1/2 text-gray-400' />
                        <input
                            type="text"
                            name="search"
                            placeholder="Search car..."
                            defaultValue={search}
                            className="w-full rounded-lg border pl-10 pr-3 py-2 text-sm"
                        />
                    </div>

                    <select
                        name="type"
                        defaultValue={type}
                        className="w-full rounded-lg border px-3 py-2 text-sm sm:w-40"
                    >
                        <option value="All">All Types</option>
                        <option value="SUV">SUV</option>
                        <option value="Sedan">Sedan</option>
                        <option value="Luxury">Luxury</option>
                        <option value="Sports">Sports</option>
                        <option value="Pickup">Pickup</option>
                        <option value="Van">Van</option>
                    </select>

                    <Button
                        type="submit"
                        className="w-full rounded-lg bg-blue-600 px-5 py-2 text-white sm:w-auto"
                    >
                        Search
                    </Button>
                </form>
            </div>

            {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {
                    cars.map(car => <CarCard key={car._id} car={car}></CarCard>)
                }
            </div> */}

            {cars.length > 0 ? (
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {cars.map((car) => (
                        <CarCard key={car._id} car={car} />
                    ))}
                </div>
            ) : (
                <div className="flex flex-col items-center justify-center py-20">
                    <h2 className="text-3xl font-bold text-gray-700">
                        No cars found
                    </h2>

                    <p className="mt-3 text-gray-500">
                        No cars matched your search. Try another car name or filter.
                    </p>
                </div>
            )}
        </div>
    );
};

export default ExploreCarsPage;