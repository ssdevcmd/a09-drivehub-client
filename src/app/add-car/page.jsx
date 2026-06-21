"use client";
import { FieldError, Input, Label, TextField, Select, ListBox, TextArea, Button, Card } from '@heroui/react';
import React from 'react';

const AddCarPage = () => {
    const onSubmit = async (e) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const car = Object.fromEntries(formData.entries())

        console.log(car, 'car info');

        const res = await fetch('http://localhost:5000/car', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(car)
        });

        const data = await res.json()

    }

    
    return (
        <div className='p-5 max-w-7xl mx-auto'>
            <h1 className='text-4xl font-bold'>Add car</h1>
            <Card className="mx-auto w-full max-w-5xl rounded-3xl p-8 shadow-xl">
                <form
                onSubmit={onSubmit} 
                className="space-y-8">
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                        {/* Car Model */}
                        <TextField name="carModel" isRequired>
                            <Label>Car Model</Label>
                            <Input
                                placeholder="Tesla Model 3"
                                className="rounded-2xl"
                            />
                            <FieldError />
                        </TextField>

                        {/* Brand */}
                        <TextField name="brand" isRequired>
                            <Label>Brand</Label>
                            <Input
                                placeholder="Tesla"
                                className="rounded-2xl"
                            />
                            <FieldError />
                        </TextField>

                        {/* Car Type */}
                        <div>
                            <Select
                                name="carType"
                                isRequired
                                className="w-full"
                                placeholder="Select car type"
                            >
                                <Label>Car Type</Label>

                                <Select.Trigger className="rounded-2xl">
                                    <Select.Value />
                                    <Select.Indicator />
                                </Select.Trigger>

                                <Select.Popover>
                                    <ListBox>
                                        <ListBox.Item id="SUV" textValue="SUV">
                                            SUV
                                            <ListBox.ItemIndicator />
                                        </ListBox.Item>

                                        <ListBox.Item id="Sedan" textValue="Sedan">
                                            Sedan
                                            <ListBox.ItemIndicator />
                                        </ListBox.Item>

                                        <ListBox.Item id="Luxury" textValue="Luxury">
                                            Luxury
                                            <ListBox.ItemIndicator />
                                        </ListBox.Item>

                                        <ListBox.Item id="Sports" textValue="Sports">
                                            Sports
                                            <ListBox.ItemIndicator />
                                        </ListBox.Item>

                                        <ListBox.Item id="Pickup" textValue="Pickup">
                                            Pickup
                                            <ListBox.ItemIndicator />
                                        </ListBox.Item>

                                        <ListBox.Item id="Van" textValue="Van">
                                            Van
                                            <ListBox.ItemIndicator />
                                        </ListBox.Item>
                                    </ListBox>
                                </Select.Popover>
                            </Select>
                        </div>

                        {/* Daily Rental Price */}
                        <TextField name="dailyRentalPrice" type="number" isRequired>
                            <Label>Daily Rental Price ($)</Label>
                            <Input
                                type="number"
                                placeholder="120"
                                className="rounded-2xl"
                            />
                            <FieldError />
                        </TextField>

                        {/* Availability */}
                        <div>
                            <Select
                                name="availability"
                                isRequired
                                className="w-full"
                                placeholder="Availability"
                            >
                                <Label>Availability</Label>

                                <Select.Trigger className="rounded-2xl">
                                    <Select.Value />
                                    <Select.Indicator />
                                </Select.Trigger>

                                <Select.Popover>
                                    <ListBox>
                                        <ListBox.Item id="Available" textValue="Available">
                                            Available
                                            <ListBox.ItemIndicator />
                                        </ListBox.Item>

                                        <ListBox.Item id="Unavailable" textValue="Unavailable">
                                            Unavailable
                                            <ListBox.ItemIndicator />
                                        </ListBox.Item>
                                    </ListBox>
                                </Select.Popover>
                            </Select>
                        </div>

                        {/* Location */}
                        <TextField name="pickup location" isRequired>
                            <Label>Pickup Location</Label>
                            <Input
                                placeholder="Dhaka, Bangladesh"
                                className="rounded-2xl"
                            />
                            <FieldError />
                        </TextField>

                        {/* Registration Number */}
                        <TextField name="registrationNumber" isRequired>
                            <Label>Registration Number</Label>
                            <Input
                                placeholder="DHAKA-METRO-GA-123456"
                                className="rounded-2xl"
                            />
                            <FieldError />
                        </TextField>

                        {/* Seating Capacity */}
                        <TextField name="seats" type="number" isRequired>
                            <Label>Seating Capacity</Label>
                            <Input
                                type="number"
                                placeholder="5"
                                className="rounded-2xl"
                            />
                            <FieldError />
                        </TextField>

                        {/* Fuel Type */}
                        <div>
                            <Select
                                name="fuelType"
                                isRequired
                                className="w-full"
                                placeholder="Fuel Type"
                            >
                                <Label>Fuel Type</Label>

                                <Select.Trigger className="rounded-2xl">
                                    <Select.Value />
                                    <Select.Indicator />
                                </Select.Trigger>

                                <Select.Popover>
                                    <ListBox>
                                        <ListBox.Item id="Petrol" textValue="Petrol">
                                            Petrol
                                            <ListBox.ItemIndicator />
                                        </ListBox.Item>

                                        <ListBox.Item id="Diesel" textValue="Diesel">
                                            Diesel
                                            <ListBox.ItemIndicator />
                                        </ListBox.Item>

                                        <ListBox.Item id="Electric" textValue="Electric">
                                            Electric
                                            <ListBox.ItemIndicator />
                                        </ListBox.Item>

                                        <ListBox.Item id="Hybrid" textValue="Hybrid">
                                            Hybrid
                                            <ListBox.ItemIndicator />
                                        </ListBox.Item>
                                    </ListBox>
                                </Select.Popover>
                            </Select>
                        </div>

                        {/* Departure Date */}
                        <div className="md:col-span-2">
                            <TextField name="pickupDate" type="date" isRequired>
                                <Label>Pickup Date</Label>
                                <Input type="date" className="rounded-2xl" />
                                <FieldError />
                            </TextField>
                        </div>

                        {/* Image URL */}
                        <div className="md:col-span-2">
                            <TextField name="image" isRequired>
                                <Label>Car Image URL</Label>
                                <Input
                                    type="url"
                                    placeholder="https://example.com/car.jpg"
                                    className="rounded-2xl"
                                />
                                <FieldError />
                            </TextField>
                        </div>


                        {/* Description */}
                        <div className="md:col-span-2">
                            <TextField name="description" isRequired>
                                <Label>Description</Label>
                                <TextArea
                                    placeholder="Write a detailed description about the car..."
                                    className="rounded-3xl"
                                />
                                <FieldError />
                            </TextField>
                        </div>
                    </div>

                    <Button
                        type="submit"
                        className="w-full rounded-2xl bg-blue-600 py-6 text-lg font-semibold text-white hover:bg-blue-700"
                    >
                        Add Car
                    </Button>
                </form>
            </Card>
        </div>
    );
};

export default AddCarPage;