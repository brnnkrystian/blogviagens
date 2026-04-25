'use client'

import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'

interface FormData {
  nome: string
  email: string
  mensagem: string
}

export function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>()

  const onSubmit = async (_data: FormData) => {
    await new Promise((r) => setTimeout(r, 1000))
    toast.success('Mensagem enviada com sucesso! Entraremos em contato em breve.')
    reset()
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
      <div>
        <label htmlFor="nome" className="block text-sm font-semibold text-gray-700 mb-1">
          Nome
        </label>
        <input
          id="nome"
          type="text"
          placeholder="Digite seu nome"
          className={`input-field ${errors.nome ? 'border-red-400 ring-1 ring-red-400' : ''}`}
          {...register('nome', { required: 'Nome é obrigatório' })}
        />
        {errors.nome && (
          <p role="alert" className="text-red-500 text-sm mt-1">
            {errors.nome.message}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-1">
          E-mail
        </label>
        <input
          id="email"
          type="email"
          placeholder="Digite seu e-mail"
          className={`input-field ${errors.email ? 'border-red-400 ring-1 ring-red-400' : ''}`}
          {...register('email', {
            required: 'E-mail é obrigatório',
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: 'Formato de e-mail inválido',
            },
          })}
        />
        {errors.email && (
          <p role="alert" className="text-red-500 text-sm mt-1">
            {errors.email.message}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="mensagem" className="block text-sm font-semibold text-gray-700 mb-1">
          Mensagem
        </label>
        <textarea
          id="mensagem"
          placeholder="Escreva sua mensagem..."
          rows={5}
          className={`input-field resize-none ${
            errors.mensagem ? 'border-red-400 ring-1 ring-red-400' : ''
          }`}
          {...register('mensagem', {
            required: 'Mensagem é obrigatória',
            minLength: { value: 10, message: 'Mensagem muito curta (mínimo 10 caracteres)' },
          })}
        />
        {errors.mensagem && (
          <p role="alert" className="text-red-500 text-sm mt-1">
            {errors.mensagem.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="btn-primary w-full disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {isSubmitting ? 'Enviando...' : 'Enviar mensagem'}
      </button>
    </form>
  )
}
