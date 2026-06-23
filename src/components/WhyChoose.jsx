"use client";

import { FaCarSide, FaMoneyBillWave, FaHeadset, FaShieldAlt } from "react-icons/fa";

const WhyChooseUs = () => {
  return (
    <div className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <h2 className="text-4xl font-bold">
            Why Choose <span className="text-blue-600">DriveHub?</span>
          </h2>

          <p className="mt-4 text-gray-600">
            We provide premium rental cars with affordable prices and trusted
            customer service.
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          <div className="rounded-3xl border bg-white p-8 text-center shadow-sm transition hover:-translate-y-2 hover:shadow-xl">
            <FaCarSide className="mx-auto text-5xl text-blue-600" />
            <h3 className="mt-5 text-xl font-semibold">
              Premium Cars
            </h3>
            <p className="mt-3 text-gray-600">
              Choose from SUVs, Sedans, Sports Cars and Luxury Vehicles.
            </p>
          </div>

          <div className="rounded-3xl border bg-white p-8 text-center shadow-sm transition hover:-translate-y-2 hover:shadow-xl">
            <FaMoneyBillWave className="mx-auto text-5xl text-green-600" />
            <h3 className="mt-5 text-xl font-semibold">
              Best Prices
            </h3>
            <p className="mt-3 text-gray-600">
              Affordable daily rental prices with no hidden charges.
            </p>
          </div>

          <div className="rounded-3xl border bg-white p-8 text-center shadow-sm transition hover:-translate-y-2 hover:shadow-xl">
            <FaHeadset className="mx-auto text-5xl text-orange-500" />
            <h3 className="mt-5 text-xl font-semibold">
              24/7 Support
            </h3>
            <p className="mt-3 text-gray-600">
              Our support team is available anytime you need assistance.
            </p>
          </div>

          <div className="rounded-3xl border bg-white p-8 text-center shadow-sm transition hover:-translate-y-2 hover:shadow-xl">
            <FaShieldAlt className="mx-auto text-5xl text-purple-600" />
            <h3 className="mt-5 text-xl font-semibold">
              Secure Booking
            </h3>
            <p className="mt-3 text-gray-600">
              Fast, secure and trusted booking process for every customer.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;