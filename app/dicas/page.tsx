import type { Metadata } from 'next'
import Image from 'next/image'
import { Card } from '@/components/Card'

export const metadata: Metadata = {
  title: 'Dicas',
  description: 'Dicas essenciais para planejar sua viagem com segurança e tranquilidade.',
}

const dicas = [
  {
    id: 1,
    title: 'Planeje com antecedência',
    description:
      'Verifique os documentos necessários, passagens e hospedagem com antecedência para evitar imprevistos e garantir os melhores preços.',
  },
  {
    id: 2,
    title: 'Faça um checklist completo',
    description:
      'Não se esqueça de itens essenciais como carregadores, adaptadores de tomada, medicamentos e cópias dos documentos.',
  },
  {
    id: 3,
    title: 'Esteja preparado para imprevistos',
    description:
      'Contrate um bom seguro viagem, tenha cópias digitais dos documentos e guarde um valor de emergência separado.',
  },
]

export default function DicasPage() {
  return (
    <section className="bg-white rounded-2xl shadow-sm p-6 md:p-10">
      <h2 className="text-2xl md:text-3xl font-bold text-blue-600 mb-2 text-center tracking-tight">
        Dicas Essenciais de Viagem
      </h2>
      <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto leading-relaxed">
        Confira nossas principais dicas para aproveitar sua viagem ao máximo com segurança
        e tranquilidade.
      </p>

      <div className="relative w-full aspect-video rounded-2xl overflow-hidden mb-8 shadow-md">
        <Image
          src="https://blog.getmalas.com.br/wp-content/uploads/2017/08/bagagem-de-mao1.jpg"
          alt="Bagagem de mão organizada para viagem"
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {dicas.map((d) => (
          <Card key={d.id} title={d.title} description={d.description} />
        ))}
      </div>
    </section>
  )
}
