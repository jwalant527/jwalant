import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-dark-900">
      <div className="text-center">
        <h2 className="text-6xl font-bold text-primary-500 mb-4">404</h2>
        <h3 className="text-2xl font-bold text-dark-900 dark:text-white mb-4">
          Page Not Found
        </h3>
        <p className="text-dark-600 dark:text-dark-400 mb-8">
          Could not find the requested resource
        </p>
        <Link
          href="/"
          className="px-6 py-3 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors inline-block"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}
