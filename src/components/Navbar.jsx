"use client";

import Link from "next/link";
import { useState } from "react";
import {
  FaBars,
  FaTimes,
  FaUserCircle,
  FaHome,
  FaCar,
  FaCalendarCheck,
  FaPlusCircle,
  FaSignOutAlt,
  FaSignInAlt,
} from "react-icons/fa"
import { Button } from "@heroui/react";
import Image from "next/image";
import { LuCarFront } from "react-icons/lu";

const Navbar = () => {
  // Replace with your auth state
  const user = {
    name: "John Doe",
    email: "john@example.com",
    image: "",
  };

  // const user = null;

  const [mobileOpen, setMobileOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur-lg">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="rounded-xl bg-blue-600 p-2 text-white">
            <LuCarFront size={24} />
          </div>

          <h2 className="text-2xl font-bold">
            Drive<span className="text-blue-600">Hub</span>
          </h2>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden items-center gap-8 lg:flex">
          <Link
            href="/"
            className="flex items-center gap-1 font-medium hover:text-blue-600"
          >
            <FaHome size={16} />
            Home
          </Link>

          <Link
            href="/cars"
            className="font-medium hover:text-blue-600"
          >
            Explore Cars
          </Link>

          {user && (
            <>
              <Link
                href="/add-car"
                className="flex items-center gap-1 font-medium hover:text-blue-600"
              >
                <FaPlusCircle size={16} />
                Add Car
              </Link>

              <Link
                href="/my-bookings"
                className="flex items-center gap-1 font-medium hover:text-blue-600"
              >
                <FaCalendarCheck size={16} />
                My Bookings
              </Link>
            </>
          )}
        </nav>

        {/* Right Side */}
        <div className="hidden items-center gap-4 lg:flex">
          {!user ? (
            <>
              <Link
                href="/login"
                className="flex items-center gap-2 font-medium hover:text-blue-600"
              >
                <FaSignInAlt size={16} />
                Login
              </Link>

              <Link
                href="/register"
                className="rounded-xl bg-blue-600 px-5 py-2 font-semibold text-white hover:bg-blue-700"
              >
                Register
              </Link>
            </>
          ) : (
            <div className="relative">
              <Button
                onClick={() => setProfileOpen(!profileOpen)}
                className="flex items-center gap-3 rounded-full"
              >
                {user.image ? (
                  <Image
                    src={user.image}
                    alt=""
                    className="h-10 w-10 rounded-full object-cover"
                  />
                ) : (
                  <FaUserCircle
                    size={40}
                    className="text-blue-600"
                  />
                )}
              </Button>

              {profileOpen && (
                <div className="absolute right-0 mt-3 w-64 rounded-2xl border bg-white shadow-xl">
                  <div className="border-b p-4">
                    <h3 className="font-semibold">
                      {user.name}
                    </h3>
                    <p className="text-sm text-gray-500">
                      {user.email}
                    </p>
                  </div>

                  <div className="p-2">
                    <Link
                      href="/add-car"
                      className="flex items-center gap-2 rounded-lg px-4 py-3 hover:bg-gray-100"
                    >
                      <FaPlusCircle size={16} />
                      Add Car
                    </Link>

                    <Link
                      href="/my-bookings"
                      className="flex items-center gap-2 rounded-lg px-4 py-3 hover:bg-gray-100"
                    >
                      <FaCalendarCheck size={16} />
                      My Bookings
                    </Link>

                    <Link
                      href="/my-added-cars"
                      className="flex items-center gap-2 rounded-lg px-4 py-3 hover:bg-gray-100"
                    >
                      <FaCar size={16} />
                      My Added Cars
                    </Link>

                    <Button className="flex w-full items-center gap-2 rounded-lg px-4 py-3 text-red-500 hover:bg-red-50">
                      <FaSignOutAlt size={16} />
                      Logout
                    </Button>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Mobile Button */}
        <Button
          className="lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
        </Button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="border-t bg-white lg:hidden">
          <div className="space-y-2 p-5">
            <Link href="/" className="block py-2">
              Home
            </Link>

            <Link href="/explore-cars" className="block py-2">
              Explore Cars
            </Link>

            {user ? (
              <>
                <Link href="/add-car" className="block py-2">
                  Add Car
                </Link>

                <Link href="/my-bookings" className="block py-2">
                  My Bookings
                </Link>

                <Link href="/my-added-cars" className="block py-2">
                  My Added Cars
                </Link>

                <button className="mt-2 w-full rounded-xl bg-red-500 py-3 text-white">
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link href="/login" className="block py-2">
                  Login
                </Link>

                <Link
                  href="/register"
                  className="mt-2 block rounded-xl bg-blue-600 py-3 text-center text-white"
                >
                  Register
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;