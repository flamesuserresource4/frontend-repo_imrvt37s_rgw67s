import Spline from '@splinetool/react-spline';
import { Rocket, Shield } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[78vh] w-full overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-[linear-gradient(135deg,#6EE7B7_0%,#3B82F6_50%,#8B5CF6_100%)] opacity-30 pointer-events-none" />

      {/* Spline 3D */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/OG17yM2eUIs8MUmA/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 grid md:grid-cols-12 gap-8">
        <div className="md:col-span-7">
          <div className="inline-flex items-center gap-2 bg-white/70 backdrop-blur border border-black/10 text-gray-700 rounded-full px-3 py-1.5 text-xs font-medium shadow-sm">
            <Shield className="h-3.5 w-3.5 text-emerald-500" />
            Secure control with HTTPS/WSS & per-device auth
          </div>
          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900">
            Rent or Buy Robots, Drones & IoT — On Demand
          </h1>
          <p className="mt-4 text-base sm:text-lg text-gray-700 max-w-2xl">
            Short-term rentals, one-time purchases, and browser-based control — delivered fast. Explore drones, RC cars, sensors, and DIY kits ready to go.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#catalog" className="inline-flex items-center gap-2 rounded-xl bg-gray-900 text-white px-5 py-3 text-sm font-medium shadow hover:shadow-md transition">
              <Rocket className="h-4 w-4" />
              Browse Devices
            </a>
            <a href="#how" className="inline-flex items-center gap-2 rounded-xl bg-white text-gray-900 px-5 py-3 text-sm font-medium border border-black/10 shadow-sm hover:shadow-md transition">
              How It Works
            </a>
          </div>
        </div>
      </div>

      {/* Overlay (non-blocking) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-transparent to-white" />
    </section>
  );
}
