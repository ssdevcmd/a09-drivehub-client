"use client";

import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaGasPump, FaMapMarkerAlt, FaUsers } from "react-icons/fa";
import { motion } from "framer-motion";

const CarCard = ({ car }) => {
    const { _id, carModel, brand, carType, dailyRentalPrice, image, location, fuelType, seats, availability } = car;

    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            whileHover={{
                y: -8,
                scale: 1.03,
            }}
            className="overflow-hidden rounded-3xl border bg-white shadow-md"
        >
            <Image
                src={image}
                alt={carModel || "Car Image"}
                width={400}
                height={400}
                className="h-60 w-full object-cover"
            />

            <div className="p-6">
                <div className="flex items-center justify-between">
                    <h2 className="text-2xl font-bold">{carModel}</h2>

                    <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-600">
                        {carType}
                    </span>
                </div>

                <p className="mt-2 text-gray-500">{brand}</p>

                <div className="mt-5 space-y-2 text-sm text-gray-600">
                    <div className="flex items-center gap-3">
                        <FaMapMarkerAlt className="text-red-600" />
                        <p className="font-semibold">{location}</p>
                    </div>

                    <div className="flex items-center gap-3">
                        <FaGasPump className="text-red-600" />
                        <p className="font-semibold">{fuelType}</p>
                    </div>

                    <div className="flex items-center gap-3">
                        <FaUsers className="text-red-600" />
                        <p className="font-semibold">{seats}</p>
                    </div>

                    <p>
                        Availability: <span className="font-medium">{availability}</span>
                    </p>
                </div>

                <div className="mt-6 flex items-center justify-between">
                    <div>
                        <p className="text-3xl font-bold text-blue-600">
                            ${dailyRentalPrice}
                        </p>
                        <span className="text-sm text-gray-500">/ day</span>
                    </div>

                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Link href={`/explore-cars/${_id}`}>
                            <Button className="rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white">
                                View Details
                            </Button>
                        </Link>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
};

export default CarCard;