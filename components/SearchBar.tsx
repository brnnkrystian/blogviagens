'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Search, MapPin, Calendar, Users } from 'lucide-react'

export function SearchBar() {
  const router = useRouter()
  const [destino, setDestino] = useState('')

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    router.push('/destinos')
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-2xl shadow-xl p-4 md:p-6 w-full max-w-4xl mx-auto"
    >
      <p className="text-sm font-semibold text-blue-600 mb-3 text-center uppercase tracking-wide">
        Encontre sua passagem com o melhor preço
      </p>

      <div className="flex flex-col md:flex-row gap-3">
        {/* Destino */}
        <div className="flex-1 flex items-center gap-2 border border-gray-200 rounded-xl px-4 py-3 focus-within:ring-2 focus-within:ring-blue-400 focus-within:border-transparent transition">
          <MapPin size={18} className="text-blue-400 shrink-0" aria-hidden="true" />
          <input
            type="text"
            placeholder="Para onde você quer ir?"
            value={destino}
            onChange={(e) => setDestino(e.target.value)}
            className="flex-1 outline-none text-gray-800 placeholder:text-gray-400 text-sm bg-transparent"
            aria-label="Destino"
          />
        </div>

        {/* Data */}
        <div className="flex items-center gap-2 border border-gray-200 rounded-xl px-4 py-3 focus-within:ring-2 focus-within:ring-blue-400 focus-within:border-transparent transition md:w-44">
          <Calendar size={18} className="text-blue-400 shrink-0" aria-hidden="true" />
          <input
            type="date"
            className="flex-1 outline-none text-gray-600 text-sm bg-transparent"
            aria-label="Data de viagem"
          />
        </div>

        {/* Passageiros */}
        <div className="flex items-center gap-2 border border-gray-200 rounded-xl px-4 py-3 md:w-40">
          <Users size={18} className="text-blue-400 shrink-0" aria-hidden="true" />
          <select
            className="flex-1 outline-none text-gray-600 text-sm bg-transparent cursor-pointer"
            aria-label="Número de passageiros"
            defaultValue="1"
          >
            <option value="1">1 passageiro</option>
            <option value="2">2 passageiros</option>
            <option value="3">3 passageiros</option>
            <option value="4">4+ passageiros</option>
          </select>
        </div>

        <button
          type="submit"
          className="btn-primary flex items-center justify-center gap-2 md:px-8 text-sm"
        >
          <Search size={16} aria-hidden="true" />
          Buscar
        </button>
      </div>
    </form>
  )
}
