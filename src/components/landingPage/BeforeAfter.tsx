
import { beforeAfterContent } from "@/constants/data";

export default function BeforeAfter() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-8">
      <h1 className="mb-8 text-center text-3xl font-bold text-gray-800 md:text-4xl">
        {beforeAfterContent.mainTitle}
      </h1>
      <div className="grid gap-6 md:grid-cols-2">
        {/* Without */}
        <div className="rounded-lg border border-red-200 p-6 shadow-lg">
          <h2 className="mb-4 text-xl font-semibold text-red-600">
            {beforeAfterContent.without.title}
          </h2>
          <ul className="space-y-2">
            {beforeAfterContent.without.items.map((item, index) => (
              <li key={index} className="flex items-start">
                <svg
                  className="mr-2 mt-1 h-5 w-5 flex-shrink-0 text-red-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* With  */}
        <div className="rounded-lg border border-green-200 p-6 shadow-lg">
          <h2 className="mb-4 text-xl font-semibold text-green-600">
            {beforeAfterContent.with.title}
          </h2>
          <ul className="space-y-2">
            {beforeAfterContent.with.items.map((item, index) => (
              <li key={index} className="flex items-start">
                <svg
                  className="mr-2 mt-1 h-5 w-5 flex-shrink-0 text-green-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
