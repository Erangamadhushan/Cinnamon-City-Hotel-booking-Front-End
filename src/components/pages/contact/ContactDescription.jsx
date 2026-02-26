
export default function ContactDescription() {
    return (
        <div>
            <h1 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-white">
                Contact us
            </h1>
            <p className="mb-6 text-gray-600 dark:text-gray-300">
                Have questions about bookings, rooms, or special requests? Reach out
                to our team and we'll help you plan the perfect stay.
            </p>

            <div className="space-y-3 text-sm">
                <p>
                    <span className="font-medium text-gray-900 dark:text-white">
                        Phone:
                    </span>{" "}
                    <a
                        className="text-indigo-600 hover:underline dark:text-indigo-400"
                        href="tel:+10000000000"
                    >
                        +1 (000) 000-0000
                    </a>
                </p>
                <p>
                    <span className="font-medium text-gray-900 dark:text-white">
                        Email:
                    </span>{" "}
                    <a
                        className="text-indigo-600 hover:underline dark:text-indigo-400"
                        href="mailto:hello@example.com"
                    >
                        hello@example.com
                    </a>
                </p>
                <p>
                    <span className="font-medium text-gray-900 dark:text-white">
                        Address:
                    </span>{" "}
                    <span className="text-gray-700 dark:text-gray-300">
                        123 Main St, City, Country
                    </span>
                </p>
                <p className="text-gray-500 dark:text-gray-400">
                    We typically respond within 1-2 business days.
                </p>
            </div>
        </div>
    );
}