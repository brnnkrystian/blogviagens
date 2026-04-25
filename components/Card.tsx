import Image from 'next/image'
import Link from 'next/link'

interface CardProps {
  title: string
  description: string
  href?: string
  image?: string
  imageAlt?: string
}

export function Card({ title, description, href, image, imageAlt }: CardProps) {
  return (
    <article
      className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col
                 hover:shadow-xl transition-shadow duration-300"
    >
      {image && (
        <div className="relative aspect-video w-full">
          <Image
            src={image}
            alt={imageAlt ?? ''}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>
      )}
      <div className="p-4 md:p-6 flex flex-col flex-1">
        <h3 className="text-lg font-semibold text-blue-600 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4 flex-1 text-sm md:text-base leading-relaxed">
          {description}
        </p>
        {href && (
          <Link href={href} className="btn-primary self-start text-sm">
            Ler mais
          </Link>
        )}
      </div>
    </article>
  )
}
