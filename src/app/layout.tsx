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
        <header className="sticky p-2 top-0 w-full border-b border-border">
            <div className="flex justify-between items-center">
              
              {/* Tombol Menu & Logo */}
              <div className="flex items-center gap-2">
                <Bars3Icon className="icons" />
                <span className="text-xl font-bold tracking-tight text-foreground">
                  Torishu
                </span>
              </div>

              {/* Tombol Search & ( Profile || Login / Register ) */}
              <div className="flex items-center gap-2">
                <MagnifyingGlassIcon className="icons" />
                
                <div className="flex items-center gap-2 text-sm font-medium">
                  <button className="hover:text-blue-600 transition-colors">Register</button>
                  <span className="text-slate-300 dark:text-slate-700">|</span>
                  <button className="hover:text-blue-600 transition-colors">Login</button>
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