import type { Metadata } from 'next'
import Image from 'next/image'
import { Card } from '@/components/Card'

export const metadata: Metadata = {
  title: 'Destinos',
  description: 'Explore destinos incríveis: Paris, Bali, Rio de Janeiro e muito mais.',
}

const destinos = [
  {
    id: 1,
    title: 'Paris, França',
    description:
      'A cidade do amor, repleta de arte, cultura, gastronomia e monumentos históricos únicos que encantam viajantes do mundo inteiro.',
  },
  {
    id: 2,
    title: 'Bali, Indonésia',
    description:
      'Uma ilha tropical com paisagens de tirar o fôlego, templos ancestrais, campos de arroz e praias paradisíacas.',
  },
  {
    id: 3,
    title: 'Rio de Janeiro, Brasil',
    description:
      'A cidade maravilhosa, com praias icônicas, o Cristo Redentor, o Pão de Açúcar e o melhor carnaval do mundo.',
  },
]

export default function DestinosPage() {
  return (
    <section className="bg-white rounded-2xl shadow-sm p-6 md:p-10">
      <h2 className="text-2xl md:text-3xl font-bold text-blue-600 mb-2 text-center tracking-tight">
        Destinos Incríveis
      </h2>
      <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto leading-relaxed">
        Descubra lugares paradisíacos, cidades históricas e pontos turísticos imperdíveis.
        Aqui estão nossas sugestões de destinos para a sua próxima aventura.
      </p>

      <div className="relative w-full aspect-video rounded-2xl overflow-hidden mb-8 shadow-md">
        <Image
          src="https://oficinadeinverno.com.br/cdn/shop/articles/eiffel-tower-sunrise1.jpg?v=1659494576&width=1300"
          alt="Torre Eiffel ao nascer do sol em Paris"
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {destinos.map((d) => (
          <Card key={d.id} title={d.title} description={d.description} />
        ))}
      </div>
    </section>
  )
}
