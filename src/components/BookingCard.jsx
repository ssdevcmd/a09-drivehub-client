"use client";

import { authClient } from "@/lib/auth-client";
import { Button, Card, DateField, Label, Modal } from "@heroui/react";
import { redirect } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import { motion } from "framer-motion";


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
  const [driverNeeded, setDriverNeeded] = useState("No");
  const [specialNote, setSpecialNote] = useState("");
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
      driverNeeded,
      specialNote,

      booking_count: 0,
      userId: user?.id,
      userName: user?.name,
      userEmail: user?.email,
      userImage: user?.image,
    };

    const { data: tokenData } = await authClient.token()
    console.log(tokenData);

    try {
      const res = await fetch("http://localhost:5000/booking", {
        method: "POST",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${tokenData?.token}`
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
    redirect('/my-bookings');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
    >
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


        <Modal>
          <Button
            variant="secondary"
            className="w-full rounded-none bg-blue-600 text-white hover:bg-blue-700"
          >Book Now</Button>
          <Modal.Backdrop>
            <Modal.Container>
              <Modal.Dialog className="sm:max-w-[360px]">
                <Modal.CloseTrigger />
                <Modal.Header>

                  <Modal.Heading className="text-2xl font-bold">{carModel}</Modal.Heading>
                </Modal.Header>
                <Modal.Body>
                  <div>
                    <Label htmlFor="driverNeeded">Driver Needed</Label>

                    <select
                      id="driverNeeded"
                      value={driverNeeded}
                      onChange={(e) => setDriverNeeded(e.target.value)}
                      className="mt-2 w-full rounded-lg border border-gray-300 p-3 focus:border-blue-500 focus:outline-none"
                    >
                      <option value="">Select an option</option>
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
                    </select>
                  </div>


                  <div>
                    <Label>Special Note</Label>

                    <textarea
                      value={specialNote}
                      onChange={(e) => setSpecialNote(e.target.value)}
                      placeholder="Any special requirements..."
                      className="mt-2 w-full rounded-md border p-3"
                      rows={4}
                    />
                  </div>
                </Modal.Body>

                <Modal.Footer>
                  <Button
                    onClick={handleBooking}
                    className="w-full rounded-none bg-blue-600 text-white hover:bg-blue-700" slot="close">
                    Book Now
                  </Button>
                </Modal.Footer>
              </Modal.Dialog>
            </Modal.Container>
          </Modal.Backdrop>
        </Modal>

      </Card >
      </motion.div>
      );
};

      export default BookingCard;