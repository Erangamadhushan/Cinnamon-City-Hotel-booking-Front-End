export default function BenefitGrid({ it, i }) {
    return (
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
    );
}