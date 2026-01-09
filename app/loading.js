export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-800">
      <div className="flex flex-col items-center gap-6">
        {/* Spinner */}
        <div className="relative w-16 h-16">
          <div className="absolute inset-0 rounded-full border-2 border-white/20"></div>
          <div className="absolute inset-0 rounded-full border-t-2 border-white animate-spin"></div>
        </div>

        {/* Text */}
        <div className="text-center">
          <p className="text-white text-lg font-medium tracking-wide">
            Amamchukwu Emmanuel
          </p>
          <p className="mt-2 text-sm text-gray-400">
            Crafting refined web experiences…
          </p>
        </div>
      </div>
    </div>
  );
}
