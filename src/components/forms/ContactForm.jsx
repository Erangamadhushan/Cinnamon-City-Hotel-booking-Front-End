
export default function ContactForm({ form, onChange, onSubmit, status }) {
    return (
        <form
            onSubmit={onSubmit}
            className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:bg-zinc-900 dark:border-gray-800"
        >
            <div className="mb-4">
                <label
                    htmlFor="name"
                    className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                    Name
                </label>
                <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={onChange}
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-100"
                />
            </div>
            <div className="mb-4">
                <label
                    htmlFor="email"
                    className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                    Email
                </label>
                <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={onChange}
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-100"
                />
            </div>
            <div className="mb-4">
                <label
                    htmlFor="message"
                    className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                    Message
                </label>
                <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    value={form.message}
                    onChange={onChange}
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-100"
                />
            </div>
            <button
                type="submit"
                className="inline-flex items-center rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500"
            >
                Send message
            </button>
            {status && (
                <div className="mt-3 rounded-md border border-green-200 bg-green-50 p-3 text-sm text-green-700 dark:bg-green-900/20 dark:border-green-900 dark:text-green-300">
                    {status}
                </div>
            )}
        </form>
    );
}