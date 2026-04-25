import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { Toaster } from 'react-hot-toast'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    template: '%s | Viagem Sem Fim',
    default: 'Viagem Sem Fim',
  },
  description:
    'Blog de viagens Viagem Sem Fim: descubra destinos incríveis, dicas práticas e histórias inspiradoras para suas aventuras.',
  keywords: ['viagens', 'destinos', 'dicas', 'histórias', 'aventura'],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2
                     bg-black text-white px-3 py-2 rounded z-50 focus:outline-none
                     focus:ring-2 focus:ring-white"
        >
          Pular para o conteúdo principal
        </a>

        <header className="bg-gradient-to-r from-blue-400 to-cyan-400 text-white shadow-md">
          <div className="max-w-6xl mx-auto px-4 pt-6 pb-4 text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-1 tracking-tight">
              Viagem Sem Fim
            </h1>
            <p className="text-sm md:text-base text-blue-50">
              Descubra destinos incríveis e dicas para sua próxima aventura!
            </p>
          </div>
          <Navbar />
        </header>

        <main id="main" className="max-w-6xl mx-auto px-4 py-6 md:py-10">
          {children}
        </main>

        <Footer />
        <Toaster
          position="bottom-center"
          toastOptions={{
            duration: 4000,
            style: { borderRadius: '12px', padding: '12px 16px' },
          }}
        />
      </body>
    </html>
  )
}
