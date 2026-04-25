const PHONE = '5511999999999' // substitua pelo número real (com DDI + DDD, sem espaços)
const MESSAGE = 'Olá! Tenho interesse em comprar uma passagem. Podem me ajudar?'

const whatsappUrl = `https://wa.me/${PHONE}?text=${encodeURIComponent(MESSAGE)}`

export function WhatsAppButton() {
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar pelo WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 group"
    >
      {/* Tooltip */}
      <span
        className="hidden sm:block bg-gray-900 text-white text-xs font-medium px-3 py-1.5
                   rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200
                   whitespace-nowrap pointer-events-none"
      >
        Falar no WhatsApp
      </span>

      {/* Botão */}
      <div className="relative">
        {/* Pulso */}
        <span className="absolute inset-0 rounded-full bg-green-400 opacity-60 animate-ping" />

        <div
          className="relative bg-green-500 hover:bg-green-600 transition-colors duration-200
                     rounded-full w-14 h-14 flex items-center justify-center shadow-lg
                     focus-within:ring-4 focus-within:ring-green-300"
        >
          {/* Ícone WhatsApp (SVG oficial) */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            className="w-7 h-7 fill-white"
            aria-hidden="true"
          >
            <path d="M16 .5C7.44.5.5 7.44.5 16c0 2.76.72 5.44 2.08 7.82L.5 31.5l7.88-2.06A15.42 15.42 0 0 0 16 31.5C24.56 31.5 31.5 24.56 31.5 16S24.56.5 16 .5zm0 28.18a13.6 13.6 0 0 1-6.93-1.9l-.5-.3-4.68 1.23 1.24-4.56-.32-.52A13.6 13.6 0 1 1 16 28.68zm7.46-10.18c-.4-.2-2.38-1.18-2.75-1.31-.37-.14-.64-.2-.9.2s-1.04 1.31-1.27 1.58c-.23.27-.47.3-.87.1a10.97 10.97 0 0 1-3.23-1.99 12.1 12.1 0 0 1-2.23-2.78c-.24-.4-.03-.62.17-.82.18-.18.4-.47.6-.7.2-.23.27-.4.4-.67.13-.27.07-.5-.03-.7-.1-.2-.9-2.18-1.24-2.98-.33-.78-.66-.67-.9-.68h-.77c-.27 0-.7.1-1.07.5-.37.4-1.4 1.37-1.4 3.33s1.43 3.87 1.63 4.13c.2.27 2.82 4.3 6.83 6.03.95.41 1.7.66 2.28.84.96.3 1.83.26 2.52.16.77-.12 2.38-.97 2.72-1.92.33-.94.33-1.75.23-1.92-.1-.17-.37-.27-.77-.47z" />
          </svg>
        </div>
      </div>
    </a>
  )
}
