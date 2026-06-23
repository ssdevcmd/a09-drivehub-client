"use client";

import { authClient } from "@/lib/auth-client";
import { Button, Description, FieldError, Form, Input, Label, TextField, toast } from "@heroui/react";
import { Card } from '@heroui/react';
import { redirect } from "next/navigation";


const RegisterPage = () => {

    const onSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget)
        const user = Object.fromEntries(formData.entries());
        const {data, error} = await authClient.signUp.email({
            email: user.email,
            password: user.password,
            name: user.name,
            image: user.image
        })

        if(data) {
            redirect('/login');
        }

        if(error) {
            alert('Error')
        }
        // console.log(user);
        // console.log({data, error});
    }
    return (
        <div className="max-w-7xl mx-auto">
            <div className="text-center">
                <h1 className="text-2xl font-bold">Create Account</h1>
                <p>Find your perfect car with DriveHub</p>
            </div>
            <Card className="border rounded-none">
                <Form className="flex w-96 flex-col gap-4" onSubmit={onSubmit}>

                    {/* name */}
                    <TextField
                        isRequired
                        name="name"
                        type="text"
                    >
                        <Label>Name</Label>
                        <Input placeholder="Enter your name" />
                        <FieldError />
                    </TextField>

                    {/* image url */}
                    <TextField
                        name="image"
                        type="url"
                    >
                        <Label>Image URL</Label>
                        <Input placeholder="Enter image url" />
                        <FieldError />
                    </TextField>

                    {/* email */}
                    <TextField
                        isRequired
                        name="email"
                        type="email"
                        validate={(value) => {
                            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                                return "Please enter a valid email address";
                            }
                            return null;
                        }}
                    >
                        <Label>Email</Label>
                        <Input placeholder="john@example.com" />
                        <FieldError />
                    </TextField>

                    {/* password */}
                    <TextField
                        isRequired
                        minLength={6}
                        name="password"
                        type="password"
                        validate={(value) => {
                            if (value.length < 6) {
                                return "Password must be at least 6 characters";
                            }
                            if (!/[A-Z]/.test(value)) {
                                return "Password must contain at least one uppercase letter";
                            }
                            if (!/[a-z]/.test(value)) {
                                return "Password must contain at least one lowercase letter";
                            }
                            return null;
                        }}
                    >
                        <Label>Password</Label>
                        <Input placeholder="Enter your password" />
                        <Description>Must be at least 6 characters with 1 uppercase and 1 lowercase letter</Description>
                        <FieldError />
                    </TextField>
                    <div className="flex justify-center gap-2">
                        <Button
                            type="submit"
                            className="w-full">
                            Register
                        </Button>
                    </div>
                </Form>
            </Card>
        </div>
    );
};

export default RegisterPage;