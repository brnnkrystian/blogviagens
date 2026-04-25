'use client'

import { useState } from 'react'
import { Send } from 'lucide-react'

export function NewsletterForm() {
  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!email) return
    setSent(true)
    setEmail('')
  }

  if (sent) {
    return (
      <p className="text-green-400 text-sm font-medium">
        ✓ Cadastrado! Em breve você receberá nossas promoções.
      </p>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Seu e-mail"
        aria-label="E-mail para newsletter"
        className="flex-1 min-w-0 bg-gray-700 text-white placeholder:text-gray-500 text-sm px-3 py-2 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 transition"
      />
      <button
        type="submit"
        aria-label="Assinar newsletter"
        className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-lg transition-colors shrink-0"
      >
        <Send size={16} aria-hidden="true" />
      </button>
    </form>
  )
}
