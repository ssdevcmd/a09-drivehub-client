"use client";

import { authClient } from "@/lib/auth-client";
import {
  Button,
  Card,
  DateField,
  Label,
} from "@heroui/react";
import { useState } from "react";
import toast from "react-hot-toast";

const BookingCard = ({ car }) => {
  const { data: session } = authClient.useSession();
  const user = session?.user;
  // console.log(user);

  const {
    _id,
    carModel,
    brand,
    dailyRentalPrice,
    image,
    location,
  } = car;

  const [bookingDate, setBookingDate] = useState(null);
  // console.log(new Date(bookingDate));

  const handleBooking = async () => {
    if (!user) {
      toast.error("Please login first.");
      return;
    }

    if (!bookingDate) {
      toast.error("Please select a booking date.");
      return;
    }

    const bookingData = {
      carId: _id,
      carModel,
      brand,
      image,
      location,
      dailyRentalPrice,
      bookingDate: new Date(bookingDate),

      userName: user?.name,
      userEmail: user?.email,
      userImage: user?.image,
    };

    try {
      const res = await fetch("http://localhost:5000/booking", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(bookingData),
      });

      const data = await res.json();
      // console.log(data);

      if (data.insertedId) {
        toast.success("Car booked successfully!");
      } else {
        toast.error("Booking failed.");
      }
    } catch (error) {
      toast.error("Something went wrong.");
      console.log(error);
    }
  };

  return (
    <Card className="space-y-5 rounded-none border p-6 shadow-lg">
      <div>
        <p className="text-sm text-gray-500">Starting from</p>

        <h2 className="text-4xl font-bold text-blue-500">
          ${dailyRentalPrice}
        </h2>

        <p className="text-sm text-gray-500">Per Day</p>
      </div>

      <DateField
        value={bookingDate}
        onChange={setBookingDate}
        className="w-full"
        name="bookingDate"
      >
        <Label>Booking Date</Label>

        <DateField.Group>
          <DateField.Input>
            {(segment) => (
              <DateField.Segment segment={segment} />
            )}
          </DateField.Input>
        </DateField.Group>
      </DateField>

      <Button
        onClick={handleBooking}
        className="w-full rounded-none bg-blue-600 text-white hover:bg-blue-700"
      >
        Book Now
      </Button>
    </Card>
  );
};

export default BookingCard;