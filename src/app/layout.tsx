import './globals.css'
import { Inter } from 'next/font/google'
import { FireIcon } from '@heroicons/react/24/solid' // Import ikon dari Heroicons

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* --- Bagian Header Mulai --- */}
        <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-slate-200 dark:bg-slate-900/80 dark:border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              
              {/* Logo */}
              <div className="flex items-center gap-2">
                <FireIcon className="h-8 w-8 text-orange-500" />
                <span className="text-xl font-bold tracking-tight text-slate-900 dark text-white">
                  MyProject
                </span>
              </div>

              {/* Navigasi (Desktop) */}
              <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600 dark:text-slate-300">
                <a href="#" className="hover:text-orange-500 transition-colors">Home</a>
                <a href="#" className="hover:text-orange-500 transition-colors">Projects</a>
                <a href="#" className="hover:text-orange-500 transition-colors">About</a>
              </nav>

              {/* Tombol Aksi */}
              <div className="flex items-center gap-4">
                <button className="px-4 py-2 text-sm font-semibold text-white bg-slate-900 rounded-lg hover:bg-slate-700 dark:bg-orange-600 dark:hover:bg-orange-500 transition-all">
                  Get Started
                </button>
              </div>

            </div>
          </div>
        </header>
        {/* --- Bagian Header Selesai --- */}

        <main>
          {children}
        </main>
      </body>
    </html>
  )
}