import type { Metadata } from 'next'
import { Mail, Phone } from 'lucide-react'
import { ContactForm } from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Contato',
  description: 'Entre em contato com o Viagem Sem Fim para compartilhar histórias ou tirar dúvidas.',
}

export default function ContatoPage() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Informações de contato */}
      <section className="bg-white rounded-2xl shadow-sm p-6 md:p-8">
        <h2 className="text-2xl md:text-3xl font-bold text-blue-600 mb-4 tracking-tight">
          Entre em Contato
        </h2>
        <p className="text-gray-600 mb-8 leading-relaxed">
          Quer compartilhar sua história de viagem ou tem alguma dúvida? Fale conosco! Adoramos
          ouvir sobre as aventuras dos nossos leitores.
        </p>

        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-50 shrink-0">
              <Mail className="text-blue-500" size={20} aria-hidden="true" />
            </div>
            <div>
              <p className="text-xs text-gray-400 font-medium uppercase tracking-wide">E-mail</p>
              <a
                href="mailto:contato@viagemsemfim.com"
                className="text-gray-700 hover:text-blue-600 transition-colors text-sm md:text-base"
              >
                contato@viagemsemfim.com
              </a>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-50 shrink-0">
              <Phone className="text-blue-500" size={20} aria-hidden="true" />
            </div>
            <div>
              <p className="text-xs text-gray-400 font-medium uppercase tracking-wide">Telefone</p>
              <a
                href="tel:+5511987654321"
                className="text-gray-700 hover:text-blue-600 transition-colors text-sm md:text-base"
              >
                (11) 98765-4321
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Formulário */}
      <section className="bg-white rounded-2xl shadow-sm p-6 md:p-8">
        <h2 className="text-xl font-bold text-gray-800 mb-6">Envie uma mensagem</h2>
        <ContactForm />
      </section>
    </div>
  )
}
