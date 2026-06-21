import Image from "next/image";
import Link from "next/link";
import { FaArrowRight, FaCar } from "react-icons/fa";

const Banner = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-slate-950 via-blue-950 to-slate-900">
      {/* Background Blur */}
      <div className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-blue-600/20 blur-3xl"></div>
      <div className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl"></div>

      <div className="mx-auto grid min-h-[90vh] max-w-7xl items-center gap-10 px-6 py-10 lg:grid-cols-2">
        {/* Left Content */}
        <div className="text-center lg:text-left">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/40 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-300">
            <FaCar className="text-blue-500" />
            Trusted Car Rental Platform
          </div>

          <h1 className="mt-6 text-4xl font-extrabold leading-tight text-white md:text-5xl lg:text-7xl">
            Find Your Perfect Ride with{" "}
            <span className="text-blue-500">DriveHub</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg text-muted">
            Discover a wide range of reliable and affordable rental cars.
            Whether it's a business trip, vacation, or weekend getaway,
            DriveHub helps you hit the road with confidence.
          </p>

          <div className="mt-10">
            <Link
              href="/explore-cars"
              className="inline-flex items-center gap-3 rounded-xl bg-blue-600 px-8 py-4 text-lg font-semibold text-white transition hover:scale-105 hover:bg-blue-700"
            >
              Explore Cars
              <FaArrowRight />
            </Link>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center">
           <div className="overflow-hidden rounded-[22px] border-8 border-gray-800">
          <Image
            src="/assets/Banner6.jpg"
            alt="DriveHub Car"
            width={900}
            height={700}
            className="w-full h-full object-cover"
          />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;