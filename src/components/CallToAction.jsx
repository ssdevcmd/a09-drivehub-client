"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { FaArrowRight, FaCar } from "react-icons/fa";
import { authClient } from "@/lib/auth-client";

const CallToAction = () => {
  const reduceMotion = useReducedMotion();
  const { data: session, isPending } = authClient.useSession();
  const isLoggedIn = Boolean(session?.user);

  return (
    <section
      aria-labelledby="cta-heading"
      className="relative overflow-hidden bg-linear-to-r from-slate-950 via-blue-950 to-slate-900"
    >
      {/* Background glow (same language as the Banner) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-20 top-0 h-72 w-72 rounded-full bg-blue-600/20 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl"
      />

      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative mx-auto flex max-w-4xl flex-col items-center px-6 py-20 text-center md:py-24"
      >
        <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/40 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-300">
          <FaCar aria-hidden="true" className="text-blue-500" />
          Your next trip starts here
        </div>

        <h2
          id="cta-heading"
          className="mt-6 text-3xl font-extrabold leading-tight text-white md:text-5xl"
        >
          Ready to Hit the Road with{" "}
          <span className="text-blue-500">DriveHub</span>?
        </h2>

        <p className="mt-5 max-w-2xl text-base text-slate-300 md:text-lg">
          Browse reliable, affordable rental cars, book in minutes, and manage
          all your rentals from one place.
        </p>

        <div className="mt-10 flex w-full flex-col items-center justify-center gap-4 sm:w-auto sm:flex-row">
          <Link
            href="/explore-cars"
            className="inline-flex w-full items-center justify-center gap-3 rounded-xl bg-blue-600 px-8 py-4 text-lg font-semibold text-white transition-colors hover:bg-blue-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400 sm:w-auto"
          >
            Explore Cars
            <FaArrowRight aria-hidden="true" />
          </Link>

          {/* Wait for the session check so the button never flashes the wrong state */}
          {!isPending && (
            <Link
              href={isLoggedIn ? "/my-bookings" : "/register"}
              className="inline-flex w-full items-center justify-center rounded-xl border border-white/20 bg-white/5 px-8 py-4 text-lg font-semibold text-white transition-colors hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400 sm:w-auto"
            >
              {isLoggedIn ? "My Bookings" : "Create Free Account"}
            </Link>
          )}
        </div>
      </motion.div>
    </section>
  );
};

export default CallToAction;