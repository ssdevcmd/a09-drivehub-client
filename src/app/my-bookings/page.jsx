import BookingCancelAlert from '@/components/BookingCancelAlert';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaCarSide, FaMapMarkerAlt } from 'react-icons/fa';
import { SlCalender } from 'react-icons/sl';

const MyBookingPage = async () => {
    const session = await auth.api.getSession({
        headers: await headers() // you need to pass the headers object.
    });

    const { token } = await auth.api.getToken({
      headers: await headers(),
    })

    const user = session?.user
    // console.log(session);
    // console.log(user);

    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/booking/${user?.id}`, {
      headers: {
        authorization: `Bearer ${token}`
      }
    })
    const bookings = await res.json()
    console.log(bookings);


    return (
        <div className='max-w-7xl mx-auto py-5'>
            <h1 className='text-3xl font-bold mb-5'>My Bookings</h1>
            <div className="space-y-6">
  {bookings.length === 0 ? (
    <div className="rounded-2xl border bg-white p-10 text-center shadow">
      <h2 className="text-2xl font-bold text-gray-700">
        No Bookings Found
      </h2>

      <p className="mt-2 text-gray-500">
        You haven't booked any car yet.
      </p>

      
    </div>
  ) : (
    bookings.map((booking) => (
      <div
        key={booking._id}
        className="flex flex-col gap-6 rounded-2xl border bg-white p-5 shadow-md transition hover:shadow-xl md:flex-row"
      >
        {/* Image */}
        <div className="overflow-hidden rounded-xl">
          <Image
            src={booking.image}
            alt={booking.carModel}
            width={280}
            height={200}
            className="h-52 w-full object-cover md:w-72"
          />
        </div>

        {/* Content */}
        <div className="flex flex-1 flex-col justify-between">
          <div>
            <h2 className="text-3xl font-bold">
              {booking.carModel}
            </h2>

            <p className="mt-1 text-gray-500">
              Booking ID: {booking._id}
            </p>

            {/* Location */}
            <div className="mt-4 flex items-center gap-2">
              <FaMapMarkerAlt className="text-blue-600" />
              <span>{booking.location}</span>
            </div>

            {/* Booking Date */}
            <div className="mt-3 flex items-center gap-2">
              <SlCalender className="text-blue-600" />
              <span>
                {new Date(
                  booking.bookingDate
                ).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
            </div>

            {/* Driver Needed */}
            {booking.driverNeeded && (
              <p className="mt-3">
                Driver Needed:
                <span className="ml-2 font-semibold">
                  {booking.driverNeeded}
                </span>
              </p>
            )}

            {/* Special Note */}
            {booking.specialNote && (
              <p className="mt-2 text-gray-600">
                Note: {booking.specialNote}
              </p>
            )}
          </div>

          {/* Bottom */}
          <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm text-gray-500">
                Total Price
              </p>

              <h3 className="text-3xl font-bold text-cyan-500">
                ${booking.dailyRentalPrice}
              </h3>
            </div>


              <BookingCancelAlert
                bookingId={booking._id}
              />
            </div>
          </div>
        </div>
    ))
  )}
</div>
        </div>
    );
};

export default MyBookingPage;