import { Search, ShoppingCart, User } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-tr from-emerald-400 via-blue-500 to-violet-500" />
          <span className="font-semibold text-gray-900 tracking-tight">RoboRent</span>
        </a>

        <div className="hidden md:flex items-center gap-2 flex-1 mx-6">
          <div className="relative w-full max-w-xl">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              aria-label="Search devices"
              placeholder="Search robots, drones, sensors…"
              className="w-full rounded-xl bg-white/70 border border-black/10 pl-10 pr-4 py-2.5 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500/60 shadow-sm"
            />
          </div>
        </div>

        <nav className="flex items-center gap-3">
          <a href="#catalog" className="text-sm text-gray-700 hover:text-gray-900">Browse</a>
          <a href="#how" className="text-sm text-gray-700 hover:text-gray-900">How it works</a>
          <button aria-label="Open cart" className="relative inline-flex items-center justify-center h-9 w-9 rounded-full bg-white shadow border border-black/10 hover:shadow-md transition">
            <ShoppingCart className="h-4 w-4 text-gray-700" />
          </button>
          <button aria-label="Account" className="inline-flex items-center justify-center h-9 w-9 rounded-full bg-white shadow border border-black/10 hover:shadow-md transition">
            <User className="h-4 w-4 text-gray-700" />
          </button>
        </nav>
      </div>
    </header>
  );
}
