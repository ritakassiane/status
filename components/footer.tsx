import Image from "next/image"

export function Footer() {
  return (
    <footer className="mt-auto pt-12 flex flex-col items-center space-y-4">
      <div className="flex items-center justify-center gap-8">
        <div className="relative h-10 w-32 opacity-80">
          <Image
            src="https://erdeenterprise.com/wp-content/uploads/2023/10/Logo-3.png.webp"
            alt="Erde Logo"
            fill
            style={{ objectFit: "contain" }}
          />
        </div>
        <div className="h-10 w-32 bg-gray-800 rounded opacity-80 flex items-center justify-center text-xs text-gray-400">
          logo-cliente.svg
        </div>
      </div>
      <p className="text-gray-400 text-xs text-center">
        Plataforma inteligente desenvolvida pela Erde para Bring Marketing
      </p>
    </footer>
  )
}

