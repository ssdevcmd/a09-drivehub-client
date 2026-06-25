import BookingCancelAlert from '@/components/BookingCancelAlert';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import Image from 'next/image';
import React from 'react';
import { FaCarSide, FaMapMarkerAlt } from 'react-icons/fa';
import { SlCalender } from 'react-icons/sl';

const MyBookingPage = async () => {
    const session = await auth.api.getSession({
        headers: await headers() // you need to pass the headers object.
    });

    const user = session?.user
    // console.log(session);
    // console.log(user);

    const res = await fetch(`http://localhost:5000/booking/${user?.id}`)
    const bookings = await res.json()
    console.log(bookings);


    return (
        <div className='max-w-7xl mx-auto py-5'>
            <h1 className='text-3xl font-bold mb-5'>My Bookings</h1>
            <div className="space-y-6">
                {bookings.length === 0 ? (
                    <div className="rounded-2xl border border-dashed py-20 text-center">
                         <FaCarSide className="mx-auto text-6xl text-gray-300" />

                        <h2 className="text-3xl font-bold">
                            No Bookings Yet
                        </h2>

                        <p className="mt-2 text-gray-500">
                            Start exploring and book your favorite car.
                        </p>
                    </div>
                ) : (
                        bookings.map((booking) => (
                            <div
                                key={booking._id}
                                className="flex flex-col md:flex-row gap-6 rounded-2xl border bg-white p-5 shadow-md hover:shadow-xl transition"
                            >
                                {/* Image */}
                                <div className="overflow-hidden rounded-xl">
                                    <Image
                                        src={booking.image}
                                        alt={booking.carModel}
                                        width={250}
                                        height={180}
                                        className="h-48 w-72 object-cover"
                                    />
                                </div>

                                {/* Details */}
                                <div className="flex flex-1 flex-col justify-between">
                                    <div>
                                        <h2 className="text-2xl font-bold text-gray-800">
                                            {booking.carModel}
                                        </h2>

                                        <div className="flex items-center gap-2 mt-2">
                                            <FaMapMarkerAlt className="text-blue-600" />
                                            <span>{booking.location}</span>
                                        </div>

                                        <div className="mt-2 flex items-center gap-2">
                                            <SlCalender
                                                className='text-blue-600' />
                                            <span>
                                                {new Date(booking.bookingDate).toLocaleDateString(
                                                    "en-US",
                                                    {
                                                        year: "numeric",
                                                        month: "long",
                                                        day: "numeric",
                                                    }
                                                )}
                                            </span>
                                        </div>
                                        <p className="mt-2">
                                            Booking ID: {booking._id}
                                        </p>
                                    </div>

                                    {/* Bottom Row */}
                                    <div className="my-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">

                                        <h3 className="text-3xl font-bold text-cyan-500">
                                            ${booking.dailyRentalPrice}<span className='text-sm text-gray-400'>/day</span>
                                        </h3>




                                    </div>
                                    <BookingCancelAlert bookingId={booking._id} />

                                </div>
                            </div>
                        ))
                    )}
            </div>
        </div>
    );
};

export default MyBookingPage;