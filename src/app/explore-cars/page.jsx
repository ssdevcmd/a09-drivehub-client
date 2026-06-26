import CarCard from '@/components/CarCard';
import React from 'react';

const ExploreCarsPage = async ({ searchParams }) => {
    const { search = "", type = "All" } = await searchParams
    const res = await fetch(`http://localhost:5000/explore-cars?search=${search}&type=${type}`);

    const cars = await res.json();
    // console.log('cars:....',cars);
    return (
        <div>
            <div className='flex justify-between m-10'>
                <h1 className='text-5xl font-bold'>All cars</h1>
                <form className="flex gap-4">
                    <input
                        type="text"
                        name="search"
                        placeholder="Search car..."
                        defaultValue={search}
                        className="w-full rounded-lg border p-3"
                    />

                    <select
                        name="type"
                        defaultValue={type}
                        className="rounded-lg border p-3"
                    >
                        <option value="All">All Types</option>
                        <option value="SUV">SUV</option>
                        <option value="Sedan">Sedan</option>
                        <option value="Luxury">Luxury</option>
                        <option value="Sports">Sports</option>
                        <option value="Pickup">Pickup</option>
                        <option value="Van">Van</option>
                    </select>

                    <button
                        type="submit"
                        className="rounded-lg bg-blue-600 px-6 text-white"
                    >
                        Search
                    </button>
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