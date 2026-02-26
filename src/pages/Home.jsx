import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { api } from "../lib/api";
import { BENEFITS } from "../data/benefit.data";

// Home page with hero, info, about, facilities, featured hotels, and CTA sections
import HeroSection from "../components/pages/home/HeroSection.jsx";
import InfoBarSection from "../components/pages/home/InfoBarSection.jsx";
import AboutSection from "../components/pages/home/AboutSection.jsx";
import ArrangementSection from "../components/pages/home/ArrangementSection.jsx";
import FacilitiesSection from "../components/pages/home/FacilitiesSection.jsx";
import FeaturedSection from "../components/pages/home/FeaturedSection.jsx";
import CTASection from "../components/pages/home/CTASection.jsx";

import BenefitGrid from "../components/pages/home/grid/BenefitGrid.jsx";

const Home = () => {
  const navigate = useNavigate();
  const [q, setQ] = useState("");
  const [city, setCity] = useState("");
  const [featured, setFeatured] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  // Hero image rotation (use images different from auth pages)
  const HERO_IMAGES = [
    "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1600&auto=format&fit=crop",
  ];
  const [heroIdx, setHeroIdx] = useState(0);

  useEffect(() => {
    let mounted = true;
    const setPreconditions = () => setLoading(true);
    setPreconditions();
    api
      .listHotels()
      .then((res) => {
        if (!mounted) return;
        const list = (res?.data?.hotels || [])
          .sort((a, b) => Number(b.rating || 0) - Number(a.rating || 0))
          .slice(0, 6);
        setFeatured(list);
      })
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false));
    return () => {
      mounted = false;
    };
  }, []);

  // rotate hero image every 8s
  useEffect(() => {
    const id = setInterval(
      () => setHeroIdx((i) => (i + 1) % HERO_IMAGES.length),
      8000,
    );
    return () => clearInterval(id);
  }, []);

  const submitSearch = (e) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (q) params.set("q", q);
    if (city) params.set("city", city);
    navigate(`/hotels${params.toString() ? `?${params}` : ""}`);
  };

  // Local SVG fallback (subtle dark hero pattern) used if remote image fails
  const FALLBACK_DATA =
    "data:image/svg+xml;utf8," +
    encodeURIComponent(
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900">
        <defs>
          <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stop-color="#1f2937"/>
            <stop offset="1" stop-color="#111827"/>
          </linearGradient>
          <pattern id="p" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M0 40 L40 0 M-10 10 L10 -10 M30 50 L50 30" stroke="#374151" stroke-width="1" opacity="0.25"/>
          </pattern>
        </defs>
        <rect width="1600" height="900" fill="url(#g)"/>
        <rect width="1600" height="900" fill="url(#p)"/>
      </svg>`,
    );

  return (
    <section className="space-y-12">
      <div className="bg-zinc-900 text-white min-h-screen">

        {/* HERO SECTION */}
        <HeroSection />

        {/* INFO BAR */}
        <InfoBarSection />

        {/* ABOUT SECTION */}
        <AboutSection />

        {/* SLEEPING ARRANGEMENTS */}
        <ArrangementSection />

        {/* FACILITIES & IMAGE SECTION */}
        <FacilitiesSection />

      </div>
      <div className="rounded-xl border border-gray-200 bg-white shadow-sm dark:bg-zinc-900 dark:border-gray-800">
        <div className="grid items-center gap-6 p-6 md:grid-cols-2 md:p-8">
          {/* Content */}
          <div>
            <h1 className="text-3xl font-semibold text-gray-900 md:text-4xl dark:text-white">
              Cinnamon City Hotel Booking
            </h1>
            <p className="mt-2 max-w-xl text-gray-600 dark:text-gray-300">
              Discover top-rated hotels, great locations, and the best
              prices—all in one place.
            </p>
            <form
              onSubmit={submitSearch}
              className="mt-6 grid gap-2 rounded-lg border p-2 text-gray-800 shadow-sm sm:grid-cols-[1fr_1fr_auto] dark:bg-zinc-900 dark:border-gray-700 dark:text-gray-100"
            >
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Search hotel name"
                className="rounded-md border px-3 py-2 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-100"
              />
              <input
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="City"
                className="rounded-md border px-3 py-2 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-100"
              />
              <button type="submit" className="btn btn-primary">
                Search
              </button>
            </form>
            <div className="mt-4">
              <Link to="/hotels" className="btn btn-outline">
                Browse all hotels →
              </Link>
            </div>
          </div>
          {/* Image */}
          <div className="relative hidden overflow-hidden rounded-lg border md:block dark:border-gray-800">
            <div className="relative h-64 w-full md:h-[300px]">
              <img
                className="absolute inset-0 h-full w-full object-cover transition-opacity duration-700"
                src={HERO_IMAGES[heroIdx]}
                alt="Hotel highlight"
                crossOrigin="anonymous"
                onError={(e) => {
                  e.currentTarget.src = FALLBACK_DATA;
                }}
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/30 to-black/0" />
              {/* Dots */}
              <div className="absolute bottom-2 right-2 flex gap-1">
                {HERO_IMAGES.map((_, i) => (
                  <span
                    key={i}
                    className={`h-1.5 w-1.5 rounded-full ${i === heroIdx ? "bg-white" : "bg-white/60"}`}
                  ></span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits */}
      <div className="grid gap-4 sm:grid-cols-3">
        {BENEFITS.map((it, i) => (
          <BenefitGrid key={i} it={it} i={i} />
        ))}
      </div>

      {/* Featured */}
      <FeaturedSection featured={featured} error={error} loading={loading} />

      {/* CTA */}
      <CTASection />
    </section>
  );
};

export default Home;
