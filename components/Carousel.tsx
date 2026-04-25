'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const slides = [
  {
    src: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=1280&q=80',
    alt: 'Skyline de Tóquio ao entardecer',
    city: 'Tóquio',
    country: 'Japão',
  },
  {
    src: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1280&q=80',
    alt: 'Torre Eiffel em Paris ao amanhecer',
    city: 'Paris',
    country: 'França',
  },
  {
    src: 'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=1280&q=80',
    alt: 'Vista do Cristo Redentor no Rio de Janeiro',
    city: 'Rio de Janeiro',
    country: 'Brasil',
  },
  {
    src: 'https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=1280&q=80',
    alt: 'Casas brancas de Santorini na beira do mar',
    city: 'Santorini',
    country: 'Grécia',
  },
  {
    src: 'https://images.unsplash.com/photo-1538970272646-f61fabb3b8c0?w=1280&q=80',
    alt: 'Skyline de Nova York à noite',
    city: 'Nova York',
    country: 'Estados Unidos',
  },
]

export function Carousel() {
  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(false)
  const [animating, setAnimating] = useState<'left' | 'right' | null>(null)

  const goTo = useCallback((index: number, direction: 'left' | 'right') => {
    setAnimating(direction)
    setTimeout(() => {
      setCurrent(index)
      setAnimating(null)
    }, 350)
  }, [])

  const prev = useCallback(() => {
    const index = (current - 1 + slides.length) % slides.length
    goTo(index, 'left')
  }, [current, goTo])

  const next = useCallback(() => {
    const index = (current + 1) % slides.length
    goTo(index, 'right')
  }, [current, goTo])

  useEffect(() => {
    if (paused) return
    const id = setInterval(next, 4500)
    return () => clearInterval(id)
  }, [paused, next])

  const slide = slides[current]

  return (
    <div
      className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-lg group"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Imagem */}
      <div
        className={`absolute inset-0 transition-opacity duration-350 ${
          animating ? 'opacity-0' : 'opacity-100'
        }`}
      >
        <Image
          key={current}
          src={slide.src}
          alt={slide.alt}
          fill
          className="object-cover"
          priority={current === 0}
          sizes="(max-width: 768px) 100vw, 1280px"
        />
      </div>

      {/* Gradiente + legenda */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      <div className="absolute bottom-4 left-5 text-white">
        <p className="text-xl md:text-2xl font-bold leading-none">{slide.city}</p>
        <p className="text-sm md:text-base text-white/80">{slide.country}</p>
      </div>

      {/* Seta esquerda */}
      <button
        onClick={prev}
        aria-label="Slide anterior"
        className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/65
                   text-white rounded-full p-2 opacity-0 group-hover:opacity-100
                   transition-all duration-200 focus:opacity-100 focus:outline-none
                   focus:ring-2 focus:ring-white"
      >
        <ChevronLeft size={22} />
      </button>

      {/* Seta direita */}
      <button
        onClick={next}
        aria-label="Próximo slide"
        className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/65
                   text-white rounded-full p-2 opacity-0 group-hover:opacity-100
                   transition-all duration-200 focus:opacity-100 focus:outline-none
                   focus:ring-2 focus:ring-white"
      >
        <ChevronRight size={22} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 right-5 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i, i > current ? 'right' : 'left')}
            aria-label={`Ir para slide ${i + 1}`}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-200 focus:outline-none
              focus:ring-2 focus:ring-white ${
                i === current
                  ? 'bg-white scale-110'
                  : 'bg-white/45 hover:bg-white/70'
              }`}
          />
        ))}
      </div>
    </div>
  )
}
