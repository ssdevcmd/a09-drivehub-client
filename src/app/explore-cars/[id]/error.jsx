"use client";

import Link from "next/link";
import { Button } from "@heroui/react";
import { FaCarCrash } from "react-icons/fa";

export default function Error({ error, reset }) {
    return (
        <div className="flex min-h-[80vh] flex-col items-center justify-center px-6 text-center">
            <FaCarCrash className="mb-6 text-7xl text-red-500" />

            <h1 className="mb-3 text-4xl font-bold">
                Oops! Something went wrong
            </h1>

            <p className="mb-8 max-w-md text-gray-600 dark:text-gray-300">
                We couldn't load the car details. Please try again or go back to explore
                more cars.
            </p>

            <div className="flex gap-4">
                <Button
                    color="primary"
                    onClick={() => reset()}
                    className="rounded-xl"
                >
                    Try Again
                </Button>

                <Link href="/explore-cars">
                    <Button variant="bordered" className="rounded-xl">
                        Explore Cars
                    </Button>
                </Link>
            </div>

        </div>
    );
}