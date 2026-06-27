"use client";

import React from "react";
import { Button, FieldError, Input, Label, Modal, TextArea, TextField } from "@heroui/react";
import { FaRegEdit } from "react-icons/fa";
import { authClient } from "@/lib/auth-client";

const EditModal = ({ car }) => {
  const {
    _id,
    dailyRentalPrice,
    carType,
    availability,
    location,
    image,
    description,
  } = car;

  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const updatedCar = Object.fromEntries(formData.entries());

    console.log(updatedCar);

    const { data:tokenData } = await authClient.token()

    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/explore-cars/${_id}`, {
            method: "PATCH",
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${tokenData?.token}`
            },
            body: JSON.stringify(updatedCar)
        });

        const data = await res.json()
        console.log(data);


  };

  return (
    <Modal>
      {/* Open Button */}
      <Button
        variant="outline"
        className="rounded-xl border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
      ><FaRegEdit />
        Edit
      </Button>

      <Modal.Backdrop>
        <Modal.Container placement="center">
          <Modal.Dialog className="w-full max-w-2xl rounded-3xl">
            <Modal.CloseTrigger />

            <Modal.Header>
              <Modal.Heading className="text-2xl font-bold">
                Edit Car
              </Modal.Heading>
            </Modal.Header>

            <Modal.Body>
              <form onSubmit={onSubmit} className="space-y-6">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  {/* Daily Rental Price */}
                  <TextField
                    name="dailyRentalPrice"
                    defaultValue={dailyRentalPrice}
                    isRequired
                  >
                    <Label>Daily Rental Price ($)</Label>
                    <Input
                      type="number"
                      placeholder="120"
                      className="rounded-xl"
                    />
                    <FieldError />
                  </TextField>

                  {/* Car Type */}
                  <TextField
                    name="carType"
                    defaultValue={carType}
                    isRequired
                  >
                    <Label>Car Type</Label>
                    <Input
                      placeholder="SUV"
                      className="rounded-xl"
                    />
                    <FieldError />
                  </TextField>

                  {/* Availability */}
                  <TextField
                    name="availability"
                    defaultValue={availability}
                    isRequired
                  >
                    <Label>Availability</Label>
                    <Input
                      placeholder="Available"
                      className="rounded-xl"
                    />
                    <FieldError />
                  </TextField>

                  {/* Location */}
                  <TextField
                    name="location"
                    defaultValue={location}
                    isRequired
                  >
                    <Label>Location</Label>
                    <Input
                      placeholder="Dhaka"
                      className="rounded-xl"
                    />
                    <FieldError />
                  </TextField>

                  {/* Image URL */}
                  <div className="md:col-span-2">
                    <TextField
                      name="image"
                      defaultValue={image}
                      isRequired
                    >
                      <Label>Image URL</Label>
                      <Input
                        type="url"
                        placeholder="https://example.com/car.jpg"
                        className="rounded-xl"
                      />
                      <FieldError />
                    </TextField>
                  </div>

                  {/* Description */}
                  <div className="md:col-span-2">
                    <TextField
                      name="description"
                      defaultValue={description}
                      isRequired
                    >
                      <Label>Description</Label>
                      <TextArea
                        placeholder="Write a description..."
                        className="min-h-32 rounded-2xl"
                      />
                      <FieldError />
                    </TextField>
                  </div>
                </div>

                <Modal.Footer className="flex justify-end gap-3">
                  <Button
                    type="submit"
                    className="w-full rounded-xl bg-blue-600 text-white hover:bg-blue-700"
                  >
                    Update Car
                  </Button>
                </Modal.Footer>
              </form>
            </Modal.Body>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
};

export default EditModal;