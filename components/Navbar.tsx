'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, Home, MapPin, Lightbulb, BookOpen, Phone } from 'lucide-react'

const links = [
  { href: '/', label: 'Início', Icon: Home },
  { href: '/destinos', label: 'Destinos', Icon: MapPin },
  { href: '/dicas', label: 'Dicas', Icon: Lightbulb },
  { href: '/historias', label: 'Histórias', Icon: BookOpen },
  { href: '/contato', label: 'Contato', Icon: Phone },
]

export function Navbar() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  return (
    <nav className="bg-blue-600" aria-label="Navegação principal">
      <div className="max-w-6xl mx-auto px-4">
        {/* Botão hamburguer — apenas mobile */}
        <div className="flex items-center justify-end md:hidden py-2">
          <button
            onClick={() => setOpen(!open)}
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={open}
            className="p-2 rounded-lg text-white hover:bg-blue-700 transition-colors
                       focus:outline-none focus:ring-2 focus:ring-white"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Links de navegação */}
        <ul
          className={`${
            open ? 'flex' : 'hidden'
          } md:flex flex-col md:flex-row md:justify-center md:items-center
            gap-1 pb-2 md:py-2`}
        >
          {links.map(({ href, label, Icon }) => {
            const isActive = pathname === href
            return (
              <li key={href}>
                <Link
                  href={href}
                  onClick={() => setOpen(false)}
                  aria-current={isActive ? 'page' : undefined}
                  className={`flex items-center gap-2 px-4 py-3 rounded-lg text-white
                    text-sm md:text-base transition-colors
                    focus:outline-none focus:ring-2 focus:ring-white focus:ring-inset
                    ${isActive ? 'bg-blue-800 font-semibold' : 'hover:bg-blue-700'}`}
                >
                  <Icon size={16} aria-hidden="true" />
                  {label}
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}
