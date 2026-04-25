import Link from 'next/link'
import { Phone, Mail, Instagram, Youtube, Facebook } from 'lucide-react'
import { NewsletterForm } from '@/components/NewsletterForm'

const redes = [
  { href: '#', Icon: Instagram, label: 'Instagram' },
  { href: '#', Icon: Facebook, label: 'Facebook' },
  { href: '#', Icon: Youtube, label: 'YouTube' },
]

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-8">

      {/* Grade principal */}
      <div className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 gap-10">

        {/* Coluna 1 — Marca */}
        <div>
          <h2 className="text-white text-xl font-bold mb-3">Viagem Sem Fim</h2>
          <p className="text-sm leading-relaxed mb-5">
            Passagens aéreas com os melhores preços para mais de 200 destinos. Sua aventura começa aqui.
          </p>
          <div className="flex gap-3">
            {redes.map(({ href, Icon, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="bg-gray-700 hover:bg-blue-600 text-gray-300 hover:text-white p-2 rounded-lg transition-colors duration-200"
              >
                <Icon size={18} aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>

        {/* Coluna 2 — Contato + Newsletter */}
        <div>
          <h3 className="text-white font-semibold mb-4">Contato</h3>
          <ul className="space-y-3 text-sm mb-6">
            <li className="flex items-center gap-2">
              <Phone size={14} className="text-blue-400 shrink-0" aria-hidden="true" />
              <span>(11) 4002-8922</span>
            </li>
            <li className="flex items-center gap-2">
              <Mail size={14} className="text-blue-400 shrink-0" aria-hidden="true" />
              <a href="mailto:contato@viagemfim.com" className="hover:text-white transition-colors">
                contato@viagemfim.com
              </a>
            </li>
          </ul>

          <h3 className="text-white font-semibold mb-2 text-sm">Receba promoções</h3>
          <NewsletterForm />
        </div>
      </div>

      {/* Barra inferior */}
      <div className="border-t border-gray-700">
        <div className="max-w-6xl mx-auto px-4 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} Viagem Sem Fim. Todos os direitos reservados.</p>
          <div className="flex gap-4">
            <Link href="#" className="hover:text-gray-300 transition-colors">Política de Privacidade</Link>
            <Link href="#" className="hover:text-gray-300 transition-colors">Termos de Uso</Link>
            <Link href="#" className="hover:text-gray-300 transition-colors">Cancelamentos</Link>
          </div>
        </div>
      </div>

    </footer>
  )
}
