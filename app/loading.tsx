export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-dark-900">
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-primary-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
        <p className="text-dark-600 dark:text-dark-400">Loading...</p>
      </div>
    </div>
  );
}
