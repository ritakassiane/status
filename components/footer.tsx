import Image from "next/image"

export function Footer() {
  return (
    <footer className="mt-auto pt-12 flex flex-col items-center space-y-4">
      <div className="flex items-center justify-center gap-8">
        <div className="relative h-10 w-32 opacity-80">
          <Image
            src="https://erdeenterprise.com/wp-content/uploads/2025/05/Logo-c-Icone-Verde.svg"
            alt="Erde Logo"
            fill
            style={{ objectFit: "contain" }}
          />
        </div>
      </div>
      <p className="text-gray-400 text-xs text-center">
        Plataforma inteligente desenvolvida pela Erde para Bring Marketing
      </p>
    </footer>
  )
}

