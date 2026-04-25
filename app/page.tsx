import type { Metadata } from 'next'
import Link from 'next/link'
import { Carousel } from '@/components/Carousel'
import { SearchBar } from '@/components/SearchBar'
import { WhatsAppButton } from '@/components/WhatsAppButton'
import {
  ShieldCheck,
  Tag,
  Headphones,
  CreditCard,
  Star,
  TrendingDown,
  Clock,
  Users,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Início',
  description:
    'Compre passagens aéreas com os melhores preços. Destinos nacionais e internacionais com garantia de menor preço.',
}

const promos = [
  {
    destino: 'Paris',
    pais: 'França',
    preco: 'R$ 2.890',
    precoAntigo: 'R$ 4.200',
    desconto: '31% OFF',
    vagas: 4,
    img: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=600&q=80',
    urgente: true,
  },
  {
    destino: 'Tóquio',
    pais: 'Japão',
    preco: 'R$ 3.490',
    precoAntigo: 'R$ 5.800',
    desconto: '40% OFF',
    vagas: 6,
    img: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=600&q=80',
    urgente: false,
  },
  {
    destino: 'Santorini',
    pais: 'Grécia',
    preco: 'R$ 3.190',
    precoAntigo: 'R$ 4.900',
    desconto: '35% OFF',
    vagas: 3,
    img: 'https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=600&q=80',
    urgente: true,
  },
]

const beneficios = [
  {
    Icon: TrendingDown,
    titulo: 'Menor preço garantido',
    desc: 'Encontrou mais barato? Igualamos o preço e ainda te damos R$ 50 de desconto.',
  },
  {
    Icon: ShieldCheck,
    titulo: 'Compra 100% segura',
    desc: 'Seus dados protegidos com criptografia SSL e pagamento via gateway certificado.',
  },
  {
    Icon: Headphones,
    titulo: 'Suporte 24 horas',
    desc: 'Nossa equipe está disponível a qualquer hora para resolver qualquer imprevisto.',
  },
  {
    Icon: CreditCard,
    titulo: 'Parcele sem juros',
    desc: 'Pague em até 12x sem juros no cartão de crédito das principais bandeiras.',
  },
]

const depoimentos = [
  {
    nome: 'Ana Silva',
    cidade: 'São Paulo, SP',
    texto:
      'Comprei minha passagem para Paris em menos de 5 minutos. Preço incrível, muito abaixo do que encontrei em outros sites!',
    estrelas: 5,
  },
  {
    nome: 'Carlos Rodrigues',
    cidade: 'Belo Horizonte, MG',
    texto:
      'Economizei R$ 800 na minha viagem para o Japão. O suporte me ajudou com toda a documentação. Super recomendo!',
    estrelas: 5,
  },
  {
    nome: 'Mariana Costa',
    cidade: 'Rio de Janeiro, RJ',
    texto:
      'Já comprei 3 passagens pelo site e todas as viagens saíram perfeitas. Confiança total e atendimento nota 10.',
    estrelas: 5,
  },
]

export default function HomePage() {
  return (
    <div className="space-y-4">

      {/* ── HERO ── */}
      <section className="bg-white rounded-2xl shadow-sm overflow-hidden">
        <div className="px-6 pt-8 pb-4 md:px-10 md:pt-10 text-center">
          <span className="inline-block bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-wide">
            🔥 Promoções por tempo limitado
          </span>
          <h2 className="text-2xl md:text-4xl font-extrabold text-gray-900 leading-tight mb-3">
            Sua próxima aventura começa aqui.
            <span className="text-blue-600"> Passagens com até 40% OFF.</span>
          </h2>
          <p className="text-gray-500 text-base md:text-lg max-w-2xl mx-auto mb-8">
            Mais de 50.000 viajantes já compraram com a gente. Garanta o seu lugar antes que os preços subam.
          </p>
        </div>

        <div className="px-4 md:px-8 pb-4">
          <Carousel />
        </div>

        <div className="px-4 md:px-8 py-6">
          <SearchBar />
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="bg-blue-600 rounded-2xl shadow-sm px-6 py-6 md:px-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-white">
          <div>
            <p className="text-2xl md:text-3xl font-extrabold">50.000+</p>
            <p className="text-blue-200 text-sm mt-1">Viajantes satisfeitos</p>
          </div>
          <div>
            <p className="text-2xl md:text-3xl font-extrabold">R$ 199</p>
            <p className="text-blue-200 text-sm mt-1">Passagens a partir de</p>
          </div>
          <div>
            <p className="text-2xl md:text-3xl font-extrabold">200+</p>
            <p className="text-blue-200 text-sm mt-1">Destinos disponíveis</p>
          </div>
          <div>
            <p className="text-2xl md:text-3xl font-extrabold">4,9 ⭐</p>
            <p className="text-blue-200 text-sm mt-1">Avaliação dos clientes</p>
          </div>
        </div>
      </section>

      {/* ── PROMOÇÕES ── */}
      <section className="bg-white rounded-2xl shadow-sm px-6 py-8 md:px-10">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-gray-900">
              Promoções imperdíveis
            </h3>
            <p className="text-gray-500 text-sm mt-1">Vagas limitadas — compre agora e garanta o melhor preço</p>
          </div>
          <span className="hidden sm:flex items-center gap-1 text-red-500 text-sm font-semibold animate-pulse">
            <Clock size={14} />
            Oferta por tempo limitado
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {promos.map((p) => (
            <article
              key={p.destino}
              className="border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col"
            >
              <div className="relative">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={p.img}
                  alt={`Vista de ${p.destino}`}
                  className="w-full h-44 object-cover"
                />
                <span className="absolute top-3 left-3 bg-green-500 text-white text-xs font-bold px-2.5 py-1 rounded-full">
                  {p.desconto}
                </span>
                {p.urgente && (
                  <span className="absolute top-3 right-3 bg-red-500 text-white text-xs font-semibold px-2.5 py-1 rounded-full">
                    🔥 Quase esgotado
                  </span>
                )}
              </div>

              <div className="p-4 flex flex-col flex-1">
                <h4 className="text-lg font-bold text-gray-900">{p.destino}</h4>
                <p className="text-sm text-gray-400 mb-3">{p.pais}</p>

                <div className="flex items-end gap-2 mb-1">
                  <span className="text-2xl font-extrabold text-blue-600">{p.preco}</span>
                </div>
                <p className="text-xs text-gray-400 line-through mb-1">{p.precoAntigo}</p>
                <p className="text-xs text-red-500 font-semibold mb-4">
                  <Users size={11} className="inline mr-1" />
                  Restam apenas {p.vagas} vagas neste preço!
                </p>

                <Link
                  href="/contato"
                  className="btn-primary text-sm text-center mt-auto"
                >
                  Garantir minha passagem
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-6">
          <Link href="/destinos" className="text-blue-600 font-semibold text-sm hover:underline">
            Ver todos os destinos →
          </Link>
        </div>
      </section>

      {/* ── BENEFÍCIOS ── */}
      <section className="bg-blue-50 rounded-2xl px-6 py-8 md:px-10">
        <h3 className="text-xl md:text-2xl font-bold text-gray-900 text-center mb-2">
          Por que comprar com a Viagem Sem Fim?
        </h3>
        <p className="text-gray-500 text-sm text-center mb-8">
          Mais de 10 anos levando brasileiros ao mundo com segurança e o menor preço.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {beneficios.map(({ Icon, titulo, desc }) => (
            <div
              key={titulo}
              className="bg-white rounded-2xl p-5 shadow-sm flex flex-col items-center text-center"
            >
              <div className="bg-blue-100 text-blue-600 rounded-full p-3 mb-3">
                <Icon size={22} aria-hidden="true" />
              </div>
              <h4 className="font-bold text-gray-800 mb-1 text-sm">{titulo}</h4>
              <p className="text-gray-500 text-xs leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── DEPOIMENTOS ── */}
      <section className="bg-white rounded-2xl shadow-sm px-6 py-8 md:px-10">
        <h3 className="text-xl md:text-2xl font-bold text-gray-900 text-center mb-2">
          O que nossos clientes dizem
        </h3>
        <p className="text-gray-500 text-sm text-center mb-8">
          Avaliação média de 4,9/5 com base em mais de 12.000 avaliações verificadas.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {depoimentos.map((d) => (
            <blockquote
              key={d.nome}
              className="border border-gray-100 rounded-2xl p-5 shadow-sm flex flex-col gap-3"
            >
              <div className="flex gap-0.5">
                {Array.from({ length: d.estrelas }).map((_, i) => (
                  <Star key={i} size={14} className="fill-yellow-400 text-yellow-400" aria-hidden="true" />
                ))}
              </div>
              <p className="text-gray-600 text-sm leading-relaxed flex-1">"{d.texto}"</p>
              <footer>
                <p className="font-bold text-gray-800 text-sm">{d.nome}</p>
                <p className="text-gray-400 text-xs">{d.cidade}</p>
              </footer>
            </blockquote>
          ))}
        </div>
      </section>

      {/* ── CTA FINAL ── */}
      <section className="bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl px-6 py-10 md:px-10 text-center text-white shadow-sm">
        <span className="inline-block bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-wide">
          ⏰ Últimas vagas disponíveis
        </span>
        <h3 className="text-2xl md:text-3xl font-extrabold mb-3 leading-tight">
          Não deixe a promoção passar!
        </h3>
        <p className="text-blue-100 text-base max-w-xl mx-auto mb-8">
          Os preços sobem a qualquer momento. Garanta agora sua passagem com desconto e
          realize o sonho de conhecer o mundo.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/destinos"
            className="bg-white text-blue-600 font-bold px-8 py-3 rounded-xl hover:bg-blue-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600"
          >
            Ver promoções agora
          </Link>
          <Link
            href="/contato"
            className="bg-white/15 border border-white/40 text-white font-semibold px-8 py-3 rounded-xl hover:bg-white/25 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white"
          >
            Falar com especialista
          </Link>
        </div>
        <p className="text-blue-200 text-xs mt-6">
          <Tag size={11} className="inline mr-1" />
          Garantia de menor preço • Cancelamento gratuito em 24h • Parcele em 12x sem juros
        </p>
      </section>

      <WhatsAppButton />
    </div>
  )
}
