export default function Footer() {
  return (
    <footer
      className="
        border-t
        border-gray-200 dark:border-gray-800
        py-6
        bg-white dark:bg-gray-900
        transition-colors duration-300
      "
    >
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center text-sm">
        
        <p className="text-gray-500 dark:text-gray-400 transition-colors">
          © {new Date().getFullYear()} Amamchukwu Emmanuel. All rights reserved.
        </p>

        <p className="mt-2 sm:mt-0 text-gray-500 dark:text-gray-400 transition-colors">
          Built with Next.js & Tailwind CSS
        </p>

      </div>
    </footer>
  );
}
