import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="fixed top-0 w-full z-50 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-tr from-purple-600 to-blue-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-black text-2xl">K</span>
            </div>
            <Link href="/" className="text-2xl font-black tracking-tighter text-white">
              KYLO<span className="text-purple-500">.GG</span>
            </Link>
          </div>

          {/* Navigation - Desktop */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/top-up" className="text-gray-300 hover:text-white font-medium transition-colors">
              Top Up
            </Link>
            <Link href="/joki" className="text-gray-300 hover:text-white font-medium transition-colors">
              Joki Ranked
            </Link>
            <Link href="/beli-akun" className="text-gray-300 hover:text-white font-medium transition-colors">
              Beli Akun
            </Link>
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center gap-4">
            <button className="hidden sm:block text-gray-400 hover:text-white text-sm font-semibold transition-all">
              Masuk
            </button>
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2.5 rounded-full text-sm font-bold shadow-[0_0_20px_rgba(147,51,234,0.3)] transition-all active:scale-95">
              Daftar Sekarang
            </button>
          </div>

        </div>
      </div>
    </header>
  );
};

export default Header;