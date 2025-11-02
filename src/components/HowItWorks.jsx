import { Calendar, Cpu, Shield, Wrench } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      icon: Calendar,
      title: 'Pick dates or purchase',
      desc: 'Choose rent period with live availability or buy outright. Clear pricing and deposits where applicable.',
    },
    {
      icon: Shield,
      title: 'Secure checkout',
      desc: 'Pay with Stripe over HTTPS. Your account protects orders and device access with per-device permissions.',
    },
    {
      icon: Cpu,
      title: 'Control in browser',
      desc: 'For control-enabled devices, use joystick, buttons, and live telemetry/video via low-latency WebSocket/WebRTC.',
    },
    {
      icon: Wrench,
      title: 'Return or extend',
      desc: 'Get return instructions, extend rentals, and report maintenance needs directly from your dashboard.',
    },
  ];

  return (
    <section id="how" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900">How it works</h2>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, idx) => (
            <div key={idx} className="rounded-2xl border border-black/10 bg-white p-5 shadow-sm">
              <div className="h-10 w-10 rounded-xl bg-gradient-to-tr from-emerald-400 via-blue-500 to-violet-500 text-white flex items-center justify-center shadow">
                <s.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-semibold text-gray-900">{s.title}</h3>
              <p className="mt-1 text-sm text-gray-600">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-2xl p-6 bg-gradient-to-tr from-emerald-50 to-blue-50 border border-emerald-200/40">
          <h3 className="font-semibold text-gray-900">Realtime demo mode</h3>
          <p className="mt-1 text-sm text-gray-700">
            The live demo includes a device emulator that responds to commands and streams sample telemetry. Video preview uses a pre-recorded clip to simulate WebRTC.
          </p>
        </div>
      </div>
    </section>
  );
}
