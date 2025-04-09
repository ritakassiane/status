"use client"

import { X } from "lucide-react"
import Link from "next/link"

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <button
          onClick={onClose}
          className="rounded-full p-2 hover:bg-accent hover:text-accent-foreground"
        >
          <X className="h-6 w-6" />
          <span className="sr-only">Fechar menu</span>
        </button>
      </div>
      <nav className="container flex flex-col gap-4 py-8">
        <Link
          href="/#projeto"
          onClick={onClose}
          className="text-lg font-medium text-foreground hover:text-primary"
        >
          O Projeto
        </Link>
        <Link
          href="/investimento"
          onClick={onClose}
          className="text-lg font-medium text-foreground hover:text-primary"
        >
          Investimento
        </Link>
        <Link
          href="/cronograma"
          onClick={onClose}
          className="text-lg font-medium text-primary"
        >
          Cronograma
        </Link>
        <Link
          href="/sobre-nos"
          onClick={onClose}
          className="text-lg font-medium text-foreground hover:text-primary"
        >
          Sobre Nós
        </Link>
        <a
          href="/proposta_erde_cop30.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-[#1B1B1B] dark:bg-primary text-white px-5 py-2 text-sm font-medium transition-all hover:shadow-md hover:scale-[1.02]"
        >
          Baixar Proposta
        </a>
      </nav>
    </div>
  )
} 