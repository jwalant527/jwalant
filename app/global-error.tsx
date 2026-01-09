'use client';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body>
        <div className="min-h-screen flex items-center justify-center bg-white dark:bg-dark-900">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-dark-900 dark:text-white mb-4">
              Something went wrong!
            </h2>
            <button
              onClick={() => reset()}
              className="px-6 py-3 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors"
            >
              Try again
            </button>
          </div>
        </div>
      </body>
    </html>
  );
}
