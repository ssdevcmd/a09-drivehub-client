import BookingCard from "@/components/BookingCard";
import DeleteAlert from "@/components/DeleteAlert";
import EditModal from "@/components/EditModal";
import { Button } from "@heroui/react";
import Image from "next/image";
import { FaCar, FaGasPump, FaMapMarkerAlt, FaUsers, FaCheckCircle, FaStar } from "react-icons/fa";

const CarDetailsPage = async ({ params }) => {
  const { id } = await params;

  const res = await fetch(`http://localhost:5000/explore-cars/${id}`);
  const car = await res.json();

  return (
    <div className="mx-auto max-w-7xl px-6 py-12">
      <div className="grid items-start gap-12 lg:grid-cols-2">
        {/* LEFT SIDE */}
        <div className="overflow-hidden rounded-3xl border bg-white shadow-xl">
          <Image
            src={car.image}
            alt={car.carModel}
            width={700}
            height={500}
            className="h-[500px] w-full object-cover"
          />
        </div>

        {/* RIGHT SIDE */}
        <div>
          {/* Edit & Delete */}
          <div className="mb-6 flex justify-end gap-3">
            <EditModal car={car} />
            <DeleteAlert car={car} />
          </div>

          {/* Rating */}
          <div className="mb-3 flex items-center gap-1 text-yellow-500">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <span className="ml-2 text-sm text-gray-500">(5 Reviews)</span>
          </div>

          {/* Title */}
          <h1 className="text-4xl font-bold">
            {car.brand} {car.carModel}
          </h1>

          {/* Type */}
          <span className="mt-4 inline-block rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600">
            {car.carType}
          </span>

          {/* Price */}
          {/* <div className="mt-8">
            <h2 className="text-5xl font-bold text-blue-600">
              ${car.dailyRentalPrice}
            </h2>

            <p className="text-gray-500">Per Day</p>
          </div> */}

          {/* Availability */}
          <div className="mt-6 flex items-center gap-2">
            <FaCheckCircle
              className={
                car.availability === "Available"
                  ? "text-green-500"
                  : "text-red-500"
              }
            />

            <span className="font-medium">
              {car.availability}
            </span>
          </div>

          {/* Features */}
          <div className="mt-8 grid grid-cols-2 gap-5 rounded-2xl border p-6">

            <div className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-blue-600" />
              <div>
                <p className="text-sm text-gray-500">Location</p>
                <p className="font-semibold">{car.location}</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <FaGasPump className="text-blue-600" />
              <div>
                <p className="text-sm text-gray-500">Fuel</p>
                <p className="font-semibold">{car.fuelType}</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <FaUsers className="text-blue-600" />
              <div>
                <p className="text-sm text-gray-500">Seats</p>
                <p className="font-semibold">{car.seats}</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <FaCar className="text-blue-600" />
              <div>
                <p className="text-sm text-gray-500">Type</p>
                <p className="font-semibold">{car.carType}</p>
              </div>
            </div>

          </div>

          <div className="mt-10 flex flex-col gap-10 lg:flex-row">
            <div className="flex-1">
              <h3 className="mb-3 text-2xl font-bold">
                Description
              </h3>

              <p className="leading-8 text-gray-600">
                {car.description}
              </p>
            </div>

            <div className="w-full lg:w-[350px]">
              <BookingCard car={car} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarDetailsPage;