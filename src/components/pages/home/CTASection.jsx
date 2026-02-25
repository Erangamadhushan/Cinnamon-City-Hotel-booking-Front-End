import { Link } from "react-router-dom";

export default function CTASection() {
    return (
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
    );
}