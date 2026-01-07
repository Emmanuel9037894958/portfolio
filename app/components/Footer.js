export default function Footer() {
  return (
    <footer className="border-t py-6">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-500">
        <p>
          © {new Date().getFullYear()} Amamchukwu Emmanuel. All rights reserved.
        </p>

        <p className="mt-2 sm:mt-0">
          Built with Next.js & Tailwind CSS
        </p>
      </div>
    </footer>
  );
}
