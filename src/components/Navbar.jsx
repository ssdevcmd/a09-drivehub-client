"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { authClient } from "@/lib/auth-client";
import { Button } from "@heroui/react";
import { LuCarFront, LuScanSearch } from "react-icons/lu";
import { FaBars, FaTimes, FaHome, FaCar, FaPlusCircle, FaCalendarCheck, FaUserCircle, FaSignOutAlt, FaSignInAlt } from "react-icons/fa";
import { RiFileSearchFill } from "react-icons/ri";
import { BiLogOut } from "react-icons/bi";
import { redirect } from "next/navigation";

const Navbar = () => {
  const { data: session } = authClient.useSession();
  const user = session?.user;

  const [mobileOpen, setMobileOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  const handleLogout = async () => {
    await authClient.signOut();
    setProfileOpen(false);
    redirect('/');
  };

  return (
      <div className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="rounded-xl bg-blue-600 p-2 text-white">
              <LuCarFront size={24} />
            </div>

            <h1 className="text-2xl font-bold">
              Drive<span className="text-blue-600">Hub</span>
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-5 lg:flex">

            <Link
              href="/"
              className="flex items-center gap-2 hover:text-blue-600 transition"
            >
              <FaHome />
              Home
            </Link>

            <Link
              href="/explore-cars"
              className="flex items-center gap-2 hover:text-blue-600 transition"
            >
              <RiFileSearchFill />
              Explore Cars
            </Link>

            <Link
              href="/add-car"
              className="flex items-center gap-2 hover:text-blue-600 transition"
            >
              <FaPlusCircle />
              Add Car
            </Link>

            <Link
              href="/my-bookings"
              className="flex items-center gap-2 hover:text-blue-600 transition"
            >
              <FaCalendarCheck />
              My Bookings
            </Link>

          </nav>

          {/* Right Side */}
          <div className="hidden lg:flex items-center gap-4">

            {!user ? (
              <>
                <Link
                  href="/login"
                  className="flex items-center gap-2 rounded-xl px-5 py-2 bg-blue-500 text-black hover:bg-blue-600"
                >
                  <FaSignInAlt />
                  Login
                </Link>

                {/* <Link
                href="/register"
                className="flex items-center gap-2 rounded-xl px-5 py-2 hover:text-blue-700"
              >
                <GiArchiveRegister />
                Register
              </Link> */}
              </>
            ) : (
              <div className="relative">

                <Button
                  isIconOnly
                  onClick={() => setProfileOpen(!profileOpen)}
                  className="flex items-center gap-3"
                >
                  {user.image ? (
                    <Image
                      referrerPolicy="no-referrer"
                      loading="eager"
                      src={user?.image}
                      alt={user?.name || "User"}
                      width={40}
                      height={40}
                      className="rounded-full object-cover border-2 border-blue-500"
                    />
                  ) : (
                    <FaUserCircle
                      size={40}
                      className="text-blue-600"
                    />
                  )}
                </Button>
                {profileOpen && (
                  <div className="absolute right-0 mt-4 w-64 rounded-2xl border bg-white shadow-xl">

                    <div className="border-b p-4">
                      <h3 className="font-semibold text-orange-400">
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
                        <FaPlusCircle />
                        Add Car
                      </Link>

                      <Link
                        href="/my-bookings"
                        className="flex items-center gap-2 rounded-lg px-4 py-3 hover:bg-gray-100"
                      >
                        <FaCalendarCheck />
                        My Bookings
                      </Link>

                      <Link
                        href="/my-added-cars"
                        className="flex items-center gap-2 rounded-lg px-4 py-3 hover:bg-gray-100"
                      >
                        <FaCar />
                        My Added Cars
                      </Link>

                      <Button
                        variant="light"
                        onClick={handleLogout}
                        className="flex w-full items-center gap-2 rounded-lg px-4 py-3 text-red-600 hover:bg-red-50"
                      >
                        <BiLogOut />
                        Logout
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            )}

          </div>

          {/* Mobile Menu Button */}
          <Button
            className="lg:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? (
              <FaTimes size={24} />
            ) : (
              <FaBars size={24} />
            )}
          </Button>

        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="border-t bg-white lg:hidden">

            <div className="space-y-3 p-6 gap-2 grid grid-rows-1 text-center">

              <Link href="/">Home</Link>

              <Link href="/explore-cars">Explore Cars</Link>

              <Link href="/add-car">Add Car</Link>

              <Link href="/my-bookings">My Bookings</Link>

              <Link href="/my-added-cars">My Added Cars</Link>

              {user ? (
                <Button
                  onClick={handleLogout}
                  className="w-full bg-red-500 text-white"
                >
                  Logout
                </Button>
              ) : (
                <>
                  <Link href="/login" className="block">
                    Login
                  </Link>

                </>
              )}

            </div>

          </div>
        )}
      </div>
      );
};

      export default Navbar;