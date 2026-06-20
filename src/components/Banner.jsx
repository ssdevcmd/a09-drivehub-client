import Link from "next/link";
import { FaArrowRight, FaCar } from "react-icons/fa";

const Banner = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-slate-950 via-blue-950 to-slate-900 py-5 mx-auto">
      {/* Background Blur */}
      <div className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-blue-600/20 blur-3xl"></div>
      <div className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl"></div>

      <div className="mx-auto flex min-h-[85vh] max-w-7xl flex-col items-center justify-center px-6 text-center">
        {/* Badge */}
        <span className="rounded-full border border-blue-500/40 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-300 flex justify-between gap-1">
          <FaCar color="red" size={18}/> Trusted Car Rental Platform
        </span>

        {/* Title */}
        <h1 className="mt-6 max-w-4xl text-5xl font-extrabold leading-tight text-white md:text-7xl">
          Find Your Perfect Ride with{" "}
          <span className="text-blue-500">DriveHub</span>
        </h1>

        {/* Description */}
        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 md:text-xl">
          Discover a wide range of reliable and affordable rental cars.
          Whether it's a business trip, vacation, or weekend getaway,
          DriveHub helps you hit the road with confidence.
        </p>

        {/* Button */}
        <div className="mt-10">
          <Link
            href="/explore-cars"
            className="inline-flex items-center gap-3 rounded-xl bg-blue-600 px-8 py-4 text-lg font-semibold text-white shadow-lg transition duration-300 hover:scale-105 hover:bg-blue-700"
          >
            Explore Cars
            <FaArrowRight />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;