export default function HeroSection() {
    return (
        <section className="relative">
            <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
                alt="hero"
                className="w-full h-[500px] object-cover brightness-75"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/70 to-black/30" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
                <h1 className="text-5xl md:text-6xl font-serif italic">
                    Cinnamon City Hotel Booking
                </h1>
                <p className="mt-4 text-zinc-300">
                    Discover top-rated hotels, great locations, and the best
                    prices—all in one place.
                </p>
                <div className="flex gap-6 mt-6 text-sm tracking-wide">
                    <button className="hover:text-gray-300">♡ Save</button>
                    <button className="hover:text-gray-300">↗ Share</button>
                </div>
            </div>
        </section>
    );
}