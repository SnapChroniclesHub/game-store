import './globals.css'
import { Inter } from 'next/font/google'
import { Bars3Icon, MagnifyingGlassIcon } from "@heroicons/react/24/solid"

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
        <header className="sticky top-0 z-50 w-full backdrop-blur-md border-b border-slate-200 dark:bg-slate-900/80 dark:border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              
              {/* Tombol Menu & Logo */}
              <div className="flex items-center gap-2">
                <Bars3Icon className="icons" />
                <span className="text-xl font-bold tracking-tight text-slate-900 dark text-white">
                  Torishu
                </span>
              </div>

              {/* Tombol search */}
              <div className="flex items-center gap-4">
                <MagnifyingGlassIcon className="icons" />
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