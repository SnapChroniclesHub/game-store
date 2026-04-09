import React from 'react';

// Data simulasi untuk layanan
const services = [
  {
    id: 'topup',
    title: 'Top Up Game',
    description: 'Proses cepat untuk Mobile Legends, Free Fire, dan lainnya.',
    icon: '💎',
    color: 'bg-blue-500'
  },
  {
    id: 'joki',
    title: 'Joki Rank',
    description: 'Naikkan rank kamu dengan bantuan pro player kami.',
    icon: '🎮',
    color: 'bg-purple-500'
  },
  {
    id: 'akun',
    title: 'Beli Akun',
    description: 'Akun premium dengan hero dan skin langka.',
    icon: '🔐',
    color: 'bg-green-500'
  }
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans">
      {/* Navbar */}
      <nav className="p-6 border-b border-gray-800 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-yellow-500">GAME SHOP</h1>
        <div className="space-x-6">
          <a href="#" className="hover:text-yellow-500">Beranda</a>
          <a href="#" className="hover:text-yellow-500">Lacak Pesanan</a>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="py-16 px-6 text-center">
        <h2 className="text-4xl md:text-6xl font-extrabold mb-4">
          Solusi Gaming <span className="text-yellow-500">Terpercaya</span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Top up instan, joki amanah, dan jual beli akun game terlengkap hanya di Game Shop.
        </p>
      </header>

      {/* Services Grid */}
      <main className="max-w-6xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="bg-gray-800 border border-gray-700 rounded-2xl p-8 hover:transform hover:-translate-y-2 transition-all duration-300 shadow-xl"
            >
              <div className={`${service.color} w-12 h-12 rounded-lg flex items-center justify-center text-2xl mb-6`}>
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-400 mb-6">{service.description}</p>
              <button className="w-full py-3 bg-yellow-500 text-black font-bold rounded-lg hover:bg-yellow-400 transition-colors">
                Pilih Layanan
              </button>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="py-10 border-t border-gray-800 text-center text-gray-500">
        <p>&copy; 2024 Game Shop - Partner Gaming Kamu.</p>
      </footer>
    </div>
  );
}
