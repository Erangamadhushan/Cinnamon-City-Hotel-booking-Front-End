import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { api } from "../lib/api";
import HotelCard from "../components/cards/HotelCard";
import { BENEFITS } from "../data/benefit.data";

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
        <section className="relative">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
            alt="hero"
            className="w-full h-[500px] object-cover brightness-75"
          />

          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
            <h1 className="text-5xl md:text-6xl font-serif italic">
              Alpine Loft
            </h1>
            <p className="mt-4 text-zinc-300">
              4 guests · 2 bedrooms · Panoramic views
            </p>

            <div className="flex gap-6 mt-6 text-sm tracking-wide">
              <button className="hover:text-gray-300">♡ Save</button>
              <button className="hover:text-gray-300">↗ Share</button>
            </div>
          </div>
        </section>

        {/* INFO BAR */}
        <section className="border-t border-zinc-700 py-6">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between text-sm text-zinc-400 px-6">
            <span>Check in 3:00 PM</span>
            <span>Check out 11:00 AM</span>
            <span>Max guests 12</span>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section className="py-20 px-6 text-center max-w-3xl mx-auto">
          <h2 className="text-4xl font-serif mb-6">Peak Serenity</h2>
          <p className="text-zinc-400 leading-relaxed">
            A sanctuary above the clouds. Alpine Loft redefines mountain luxury.
            Wrapped in panoramic vistas, this exclusive retreat blends
            contemporary design with alpine charm.
          </p>

          <button className="mt-6 text-sm tracking-widest border-b border-zinc-500 hover:border-white">
            FULL DESCRIPTION
          </button>
        </section>

        {/* SLEEPING ARRANGEMENTS */}
        <section className="py-16 px-6 max-w-6xl mx-auto">
          <h3 className="text-xl tracking-widest mb-10 text-zinc-400">
            SLEEPING ARRANGEMENTS
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="border border-zinc-700 p-6">
              <h4 className="text-lg mb-2">Bedroom Area</h4>
              <p className="text-zinc-400 text-sm">
                King-size bed · Designer lounge sofa
              </p>
            </div>

            <div className="border border-zinc-700 p-6">
              <h4 className="text-lg mb-2">Bathroom</h4>
              <p className="text-zinc-400 text-sm">
                Spa-inspired en-suite · Rain shower
              </p>
            </div>
          </div>
        </section>

        {/* FACILITIES & IMAGE SECTION */}
        <section className="py-20 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          {/* Facilities List */}
          <div>
            <h3 className="text-xl tracking-widest mb-8 text-zinc-400">
              FACILITIES & SERVICES
            </h3>

            <ul className="grid grid-cols-2 gap-4 text-zinc-300 text-sm">
              <li>• Panoramic mountain view</li>
              <li>• Movie theater</li>
              <li>• In-room fireplace</li>
              <li>• Luxury minibar</li>
              <li>• High-speed WiFi</li>
              <li>• 24/7 concierge service</li>
              <li>• Climate control</li>
              <li>• Direct ski access</li>
            </ul>
          </div>

          {/* Side Image */}
          <div>
            <img
              src="https://images.unsplash.com/photo-1600566753051-2c3fbdc62c69"
              alt="bathroom"
              className="rounded-lg object-cover w-full h-[400px]"
            />
          </div>
        </section>

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
          <div
            key={i}
            className="rounded-lg border p-4 dark:bg-zinc-900 dark:border-gray-800"
          >
            <div className="mb-2 inline-flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-200">
              {it.icon}
            </div>
            <h3 className="font-medium text-gray-900 dark:text-white">
              {it.t}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">{it.d}</p>
          </div>
        ))}
      </div>

      {/* Featured */}
      <div>
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
            Top picks for you
          </h2>
          <Link
            to="/hotels"
            className="text-indigo-600 hover:underline dark:text-indigo-400"
          >
            View all
          </Link>
        </div>
        {error && <p className="mt-3 text-red-600">{error}</p>}
        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((h) => (
            <HotelCard key={h._id} hotel={h} />
          ))}
          {!loading && featured.length === 0 && !error && (
            <p className="text-gray-600 dark:text-gray-300">
              No featured hotels yet. Check all hotels instead.
            </p>
          )}
        </div>
      </div>

      {/* CTA */}
      <div className="rounded-xl border p-6 text-center dark:bg-zinc-900 dark:border-gray-800">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          Ready to book your next trip?
        </h3>
        <p className="mt-1 text-gray-600 dark:text-gray-300">
          Find exclusive deals across our curated collection.
        </p>
        <Link to="/hotels" className="mt-3 inline-block btn btn-primary">
          Explore Hotels
        </Link>
      </div>
    </section>
  );
};

export default Home;
