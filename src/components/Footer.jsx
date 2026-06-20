'use client';
import Link from "next/link";
import { LuCarFront } from "react-icons/lu";
import { MdOutlineAttachEmail, MdOutlinePhoneInTalk } from "react-icons/md";
import { FiMapPin } from "react-icons/fi";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-gray-300">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2">
              <div className="rounded-xl bg-blue-600 p-2 text-white">
                <LuCarFront size={22} />
              </div>

              <h2 className="text-2xl font-bold text-white">
                Drive<span className="text-blue-500">Hub</span>
              </h2>
            </Link>

            <p className="mt-5 leading-7 text-gray-400">
              DriveHub makes car rentals simple, affordable, and reliable.
              Find your perfect ride anytime, anywhere.
            </p>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="mb-5 text-xl font-semibold text-white">
              Useful Links
            </h3>

            <ul className="space-y-3">
              <li>
                <Link href="/" className="hover:text-blue-500">
                  Home
                </Link>
              </li>

              <li>
                <Link href="/explore-cars" className="hover:text-blue-500">
                  Explore Cars
                </Link>
              </li>

              <li>
                <Link href="/add-car" className="hover:text-blue-500">
                  Add Car
                </Link>
              </li>

              <li>
                <Link href="/my-bookings" className="hover:text-blue-500">
                  My Bookings
                </Link>
              </li>

              <li>
                <Link href="/about" className="hover:text-blue-500">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="mb-5 text-xl font-semibold text-white">
              Contact Information
            </h3>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <FiMapPin className="mt-1 text-blue-500" size={18} />
                <p>Dhaka, Bangladesh</p>
              </div>

              <div className="flex items-center gap-3">
                <MdOutlinePhoneInTalk className="text-blue-500" size={18} />
                <p>+880 1234-567890</p>
              </div>

              <div className="flex items-center gap-3">
                <MdOutlineAttachEmail className="text-blue-500" size={18} />
                <p>support@drivehub.com</p>
              </div>
            </div>
          </div>

          {/* Social Icons */}
          <div>
            <h3 className="mb-5 text-xl font-semibold text-white">
              Follow Us
            </h3>

            <p className="mb-6 text-gray-400">
              Stay connected with DriveHub on social media.
            </p>

            <div className="flex gap-4">
              <Link
                href="#"
                className="rounded-full bg-slate-800 p-3 transition hover:bg-blue-600"
              >
                <FaFacebook size={20} />
              </Link>

              <Link
                href="#"
                className="rounded-full bg-slate-800 p-3 transition hover:bg-pink-600"
              >
                <FaInstagram size={20} />
              </Link>

              <Link
                href="#"
                className="rounded-full bg-slate-800 p-3 transition hover:bg-sky-500"
              >
                <FaTwitter size={20} />
              </Link>

              <Link
                href="#"
                className="rounded-full bg-slate-800 p-3 transition hover:bg-blue-700"
              >
                <FaLinkedin size={20} />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="mt-12 border-t border-slate-800 pt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()}{" "}
          <span className="font-semibold text-white">DriveHub</span>. All Rights
          Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;