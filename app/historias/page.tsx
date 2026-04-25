import type { Metadata } from 'next'
import { Card } from '@/components/Card'

export const metadata: Metadata = {
  title: 'Histórias',
  description: 'Histórias inspiradoras de viajantes que exploraram o mundo.',
}

const historias = [
  {
    id: 1,
    title: 'O mochileiro solitário',
    description:
      'Um relato de superação viajando pela América do Sul. Descubra como uma jornada solo pode transformar perspectivas e mudar vidas para sempre.',
    href: '#',
  },
  {
    id: 2,
    title: 'A família aventureira',
    description:
      'Descubra como é viajar com crianças pequenas pelo mundo. Dicas e experiências reais de uma família nômada que trocou o convencional pela aventura.',
    href: '#',
  },
]

export default function HistoriasPage() {
  return (
    <section className="bg-white rounded-2xl shadow-sm p-6 md:p-10">
      <h2 className="text-2xl md:text-3xl font-bold text-blue-600 mb-2 text-center tracking-tight">
        Histórias Inspiradoras
      </h2>
      <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto leading-relaxed">
        Leia relatos de viajantes que exploraram o mundo e viveram aventuras inesquecíveis.
        Deixe-se inspirar para a sua próxima jornada.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
        {historias.map((h) => (
          <Card key={h.id} title={h.title} description={h.description} href={h.href} />
        ))}
      </div>
    </section>
  )
}
