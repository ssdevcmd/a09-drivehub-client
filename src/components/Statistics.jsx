"use client";

import CountUp from "react-countup";
import { FaUsers, FaCarSide, FaMapMarkedAlt, FaSmileBeam } from "react-icons/fa";

const stats = [
  {
    id: 1,
    icon: <FaUsers />,
    end: 10000,
    suffix: "+",
    title: "Happy Customers",
  },
  {
    id: 2,
    icon: <FaCarSide />,
    end: 500,
    suffix: "+",
    title: "Available Cars",
  },
  {
    id: 3,
    icon: <FaMapMarkedAlt />,
    end: 50,
    suffix: "+",
    title: "Cities Covered",
  },
  {
    id: 4,
    icon: <FaSmileBeam />,
    end: 99,
    suffix: "%",
    title: "Customer Satisfaction",
  },
];

const Statistics = () => {
  return (
    <section className="bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 py-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-4xl font-bold text-white">
            DriveHub by the Numbers
          </h2>

          <p className="mt-4 max-w-2xl mx-auto text-gray-300">
            Thousands of customers trust DriveHub for reliable, affordable,
            and premium car rental services across the country.
          </p>
        </div>

        {/* Statistics */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="group rounded-3xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-md transition duration-300 hover:-translate-y-2 hover:border-blue-500 hover:bg-white/10"
            >
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-blue-600 text-4xl text-white transition duration-300 group-hover:rotate-12 group-hover:scale-110">
                {stat.icon}
              </div>

              <h3 className="mt-6 text-5xl font-extrabold text-white">
                <CountUp
                  end={stat.end}
                  duration={3}
                  enableScrollSpy
                  scrollSpyOnce
                />
                {stat.suffix}
              </h3>

              <p className="mt-3 text-lg text-gray-300">
                {stat.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;