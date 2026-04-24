import './globals.css'
import { Inter } from 'next/font/google'
import { Bars3Icon } from "@heroicons/react/24/solid"

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id">
      <body className={inter.className}>
        {/* --- Bagian Header Mulai --- */}
        <header className="sticky top-0 z-50 w-full bg-background backdrop-blur-md border-b border-slate-200 dark:bg-slate-900/80 dark:border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              
              {/* Tombol Menu & Logo */}
              <div className="flex items-center gap-2">
                <Bars3Icon className="h-8 w-8 text-orange-500" />
                <span className="text-xl font-bold tracking-tight text-slate-900 dark text-white">
                  Torishu
                </span>
              </div>

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