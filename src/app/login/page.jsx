"use client";

import { authClient } from '@/lib/auth-client';
import { Button, Card, Description, FieldError, Form, Input, Label, Separator, TextField } from '@heroui/react';
import { redirect } from 'next/navigation';
import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import toast from 'react-hot-toast';
import Link from 'next/link';

const LoginPage = () => {

  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget)
    const user = Object.fromEntries(formData.entries())

    // console.log(user);

    const { data, error } = await authClient.signIn.email({
      email: user.email,
      password: user.password,
    });

    // console.log({data, error});

    if (data) {
      toast.success('Login successful!');
      redirect('/');
    }
    if (error) {
      toast.error(error.message);
    }

  };

  const handleGoogleSignIn = async () => {
    await authClient.signIn.social({
      provider: 'google'
    })
  };


  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center px-6">
      <div className="grid w-full max-w-6xl grid-cols-1 gap-10 lg:grid-cols-2">

        {/* Left Side */}
        <div className="flex flex-col justify-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-gray-500">
            Secure Access
          </p>

          <h1 className="text-5xl font-black leading-none text-black">
            Welcome back
            <br />
            to DriveHub
          </h1>

          <p className="mt-6 max-w-md text-gray-500">
            Manage your bookings, explore available cars, and keep your rental
            history organized in one secure dashboard.
          </p>
        </div>

        {/* Right Side */}
        <div className="rounded-3xl bg-white p-8 shadow-2xl">
          <h2 className="mb-6 text-3xl font-bold">
            Login
          </h2>

          <Form onSubmit={onSubmit} className="space-y-5">

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
              Login
            </Button>

            <Button
              onClick={handleGoogleSignIn}
              variant="bordered"
              className="w-full rounded-xl"
            >
              <FcGoogle className="text-xl" />
              Sign in with Google
            </Button>

            <p className="text-center text-sm text-gray-500">
              New to DriveHub?{" "}
              <Link
                href="/register"
                className="font-semibold text-blue-600 hover:underline"
              >
                Register
              </Link>
            </p>

          </Form>
        </div>

      </div>
    </div>
  );
};

export default LoginPage;