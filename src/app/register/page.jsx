"use client";

import { authClient } from "@/lib/auth-client";
import { Button, Description, FieldError, Form, Input, Label, Separator, TextField } from "@heroui/react";
import { Card } from '@heroui/react';
import Link from "next/link";
import { redirect } from "next/navigation";
import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";


const RegisterPage = () => {

    const onSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget)
        const user = Object.fromEntries(formData.entries());
        const { data, error } = await authClient.signUp.email({
            email: user.email,
            password: user.password,
            name: user.name,
            image: user.image
        })

        if (data) {
            toast.success('Registration successful!');
            redirect('/login');
        }

        if (error) {
            toast.error(error.message);
        }
        // console.log(user);
        // console.log({data, error});
    }

    const handleGoogleSignIn = async () => {
        await authClient.signIn.social({
            provider: 'google'
        })
    }

    return (

        <div className="min-h-screen bg-slate-50 flex items-center justify-center px-6">
            <div className="grid w-full max-w-7xl items-center gap-10 lg:grid-cols-2">

                {/* Left Side */}
                <div className="hidden lg:flex flex-col justify-center">
                    <p className="uppercase tracking-[0.3em] text-sm font-semibold text-blue-500">
                        Join DriveHub
                    </p>

                    <h1 className="mt-4 text-5xl font-black leading-tight">
                        Create Your
                        <br />
                        Drive Hub Account
                    </h1>

                    <p className="mt-6-4 max-w-md text-lg leading-8 text-gray-600">
                        Sign up to discover premium rental cars, manage your bookings,
                        and enjoy a smooth driving experience with DriveHub.
                    </p>
                </div>

                {/* Right Side */}
                <Card className="rounded-3xl p-10 shadow-2xl">
                    <div className="mb-8 text-center">
                        <h2 className="text-4xl font-bold">
                            Create Account
                        </h2>

                        <p className="mt-2 text-gray-500">
                            Join DriveHub and start your journey today.
                        </p>
                    </div>

                    <Form onSubmit={onSubmit} className="space-y-5">

                        {/* Name */}
                        <TextField
                            name="name"
                            type="text"
                            isRequired>
                            <Label>Name</Label>
                            <Input placeholder="Enter your name" />
                            <FieldError />
                        </TextField>

                        {/* Image */}
                        <TextField name="image">
                            <Label>Image URL</Label>
                            <Input placeholder="Enter a valid image url" />
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
                            <Input placeholder="Enter a valid email address" />
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
                        <Button
                            type="submit"
                            className="w-full rounded-xl bg-blue-500 py-3 font-bold text-black hover:bg-blue-600"
                        >
                            Create Account
                        </Button>
                    </Form>

                    <div className=" flex items-center gap-3">
                        <Separator className="flex-1" />
                        <span className="text-sm text-gray-400">
                            OR
                        </span>
                        <Separator className="flex-1" />
                    </div>

                    <Button
                        onClick={handleGoogleSignIn}
                        variant="bordered"
                        className="w-full rounded-xl"
                    >
                        <FcGoogle className="text-xl" />
                        Continue with Google
                    </Button>

                    <p className="mt-4 text-center text-sm text-gray-500">
                        Already have an account?{" "}
                        <Link
                            href="/login"
                            className="font-semibold text-blue-600 hover:underline"
                        >
                            Login
                        </Link>
                    </p>
                </Card>

            </div>
        </div>
    );
};

export default RegisterPage;