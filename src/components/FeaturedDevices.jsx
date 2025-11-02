import { Calendar, Battery, Signal, Joystick, Video } from 'lucide-react';

const devices = [
  {
    id: 'drn-001',
    name: 'AeroFly Mini Drone',
    type: 'Drone',
    img: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=1600&auto=format&fit=crop',
    buy: 299,
    rent: 25,
    battery: '22 min',
    range: '1.5 km',
    capabilities: ['telemetry', 'video', 'control'],
  },
  {
    id: 'rc-204',
    name: 'TrailBlazer RC Car',
    type: 'RC Car',
    img: 'https://images.unsplash.com/photo-1604850396147-3ee045ab63b2?q=80&w=1600&auto=format&fit=crop',
    buy: 189,
    rent: 15,
    battery: '40 min',
    range: '800 m',
    capabilities: ['telemetry', 'control'],
  },
  {
    id: 'kit-031',
    name: 'Smart Home Sensor Kit',
    type: 'IoT Kit',
    img: 'https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=1600&auto=format&fit=crop',
    buy: 129,
    rent: 9,
    battery: 'N/A',
    range: 'Wi‑Fi',
    capabilities: ['telemetry'],
  },
  {
    id: 'cam-501',
    name: 'Vision Scout Rover',
    type: 'Rover',
    img: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=1600&auto=format&fit=crop',
    buy: 349,
    rent: 27,
    battery: '55 min',
    range: '2.2 km',
    capabilities: ['telemetry', 'video', 'control'],
  },
];

function CapabilityChip({ icon: Icon, label }) {
  return (
    <span className="inline-flex items-center gap-1.5 text-[11px] font-medium px-2 py-1 rounded-full bg-white border border-black/10 text-gray-700">
      <Icon className="h-3.5 w-3.5" />
      {label}
    </span>
  );
}

function DeviceCard({ device }) {
  return (
    <div className="group rounded-2xl bg-white border border-black/10 shadow-sm hover:shadow-lg transition overflow-hidden">
      <div className="relative aspect-[16/10] overflow-hidden">
        <img src={device.img} alt={device.name} className="h-full w-full object-cover transition group-hover:scale-[1.03]" />
        <div className="absolute left-3 top-3 inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-full bg-white/90 border border-black/10 text-gray-800 shadow-sm">
          <Calendar className="h-3.5 w-3.5 text-blue-600" />
          Rent ${device.rent}/day
        </div>
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="font-semibold text-gray-900">{device.name}</h3>
            <p className="text-xs text-gray-500">{device.type}</p>
          </div>
          <div className="text-right">
            <p className="text-sm text-gray-600">Buy</p>
            <p className="text-base font-semibold text-gray-900">${device.buy}</p>
          </div>
        </div>

        <div className="mt-3 flex items-center gap-4 text-xs text-gray-600">
          <span className="inline-flex items-center gap-1"><Battery className="h-3.5 w-3.5" /> {device.battery}</span>
          <span className="inline-flex items-center gap-1"><Signal className="h-3.5 w-3.5" /> {device.range}</span>
        </div>

        <div className="mt-3 flex flex-wrap gap-2">
          {device.capabilities.includes('control') && (
            <CapabilityChip icon={Joystick} label="Control" />
          )}
          {device.capabilities.includes('video') && (
            <CapabilityChip icon={Video} label="Video" />
          )}
          {device.capabilities.includes('telemetry') && (
            <CapabilityChip icon={Signal} label="Telemetry" />
          )}
        </div>

        <div className="mt-4 grid grid-cols-2 gap-2">
          <button className="inline-flex items-center justify-center rounded-xl bg-gray-900 text-white px-3 py-2 text-sm font-medium hover:shadow-md transition">
            Quick Rent
          </button>
          <button className="inline-flex items-center justify-center rounded-xl bg-white text-gray-900 px-3 py-2 text-sm font-medium border border-black/10 hover:shadow-md transition">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default function FeaturedDevices() {
  return (
    <section id="catalog" className="relative py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900">Featured devices</h2>
            <p className="text-sm text-gray-600 mt-1">Rent by the day or buy outright. Control-ready devices include a web panel.</p>
          </div>
          <a href="#" className="text-sm font-medium text-blue-600 hover:text-blue-700">View all</a>
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {devices.map((d) => (
            <DeviceCard key={d.id} device={d} />
          ))}
        </div>
      </div>
    </section>
  );
}
