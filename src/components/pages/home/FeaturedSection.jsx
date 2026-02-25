import { Link } from "react-router-dom";

export default function FeaturedSection({ featured, error, loading = false }) {
    return (
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
    );
}