import { Button } from "@heroui/react";
import Image from "next/image";
import React from "react";
import { FaCar, FaGasPump, FaMapMarkerAlt, FaUsers } from "react-icons/fa";

const CarDetailsPage = async ({ params }) => {
    const { id } = await params;


    const res = await fetch(`http://localhost:5000/explore-cars/${id}`);

    const car = await res.json();

    return (
        <div className="mx-auto max-w-7xl px-6 py-12">
            <div className="grid gap-10 lg:grid-cols-2">
                {/* Image */}
                <div className="overflow-hidden rounded-3xl shadow-xl">
                    <Image
                        src={car.image}
                        alt={car.carModel || "Car Image"}
                        width={700}
                        height={500}
                        className="h-full w-full object-cover"
                    />
                </div>

                {/* Details */}
                <div>
                    <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600">
                        {car.carType}
                    </span>

                    <h1 className="mt-4 text-5xl font-bold">{car.carModel}</h1>

                    <p className="mt-2 text-xl text-gray-500">{car.brand}</p>

                    <div className="mt-8 space-y-4">
                        <div className="flex items-center gap-3">
                            <FaMapMarkerAlt className="text-blue-600" />
                            <span>{car.location}</span>
                        </div>

                        <div className="flex items-center gap-3">
                            <FaGasPump className="text-blue-600" />
                            <span>{car.fuelType}</span>
                        </div>

                        <div className="flex items-center gap-3">
                            <FaUsers className="text-blue-600" />
                            <span>{car.seats} Seats</span>
                        </div>

                        <div className="flex items-center gap-3">
                            <FaCar className="text-blue-600" />
                            <span>{car.availability}</span>
                        </div>
                    </div>

                    <div className="mt-8">
                        <h2 className="text-3xl font-bold text-blue-600">
                            ${car.dailyRentalPrice}
                            <span className="text-lg text-gray-500"> / day</span>
                        </h2>
                    </div>

                    <div className="mt-8">
                        <h3 className="text-2xl font-semibold">Overview</h3>

                        <p className="mt-3 leading-8 text-gray-600">
                            {car.description}
                        </p>
                    </div>

                    <Button className="mt-10 rounded-xl bg-blue-600 px-8 py-4 text-lg font-semibold text-white transition hover:bg-blue-700">
                        Book Now
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default CarDetailsPage;