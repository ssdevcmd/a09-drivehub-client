import Link from "next/link";
import { Button } from "@heroui/react";
import { FaCarCrash } from "react-icons/fa";

export default function NotFound() {
    return (
        <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-100 to-blue-100 px-6 dark:from-slate-900 dark:to-slate-800">
            <div className="max-w-xl text-center">
                <FaCarCrash className="mx-auto mb-6 text-7xl text-red-500" />

                <h1 className="mb-2 text-6xl font-extrabold text-gray-900 dark:text-white">
                    404
                </h1>

                <h2 className="mb-4 text-3xl font-bold text-gray-800 dark:text-gray-100">
                    Page Not Found
                </h2>

                <p className="mb-8 text-gray-600 dark:text-gray-300">
                    Oops! The page you're looking for doesn't exist or may have been
                    moved. Let's get you back on the road.
                </p>

                <div className="flex justify-center gap-4">
                    <Link href="/">
                        <Button
                            color="primary"
                            className="rounded-xl px-6"
                        >
                            Go Home
                        </Button>
                    </Link>

                    <Link href="/explore-cars">
                        <Button
                            variant="bordered"
                            className="rounded-xl px-6"
                        >
                            Explore Cars
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}