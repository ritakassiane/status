"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, Download, ArrowLeft, Clock } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import { MobileMenu } from "@/components/mobile-menu"

export default function CronogramaPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="https://erdeenterprise.com/wp-content/uploads/2023/10/Logo-3.png.webp"
              alt="Erde Logo"
              width={120}
              height={40}
              className="h-8 w-auto"
            />
          </Link>
          <nav className="hidden md:flex gap-8">
            <Link href="/#projeto" className="text-base font-normal text-foreground hover:text-primary relative group">
              O Projeto
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link
              href="/investimento"
              className="text-base font-normal text-foreground hover:text-primary relative group"
            >
              Investimento
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link href="/cronograma" className="text-base font-normal text-primary relative group">
              Cronograma
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary transition-all duration-300"></span>
            </Link>
            <Link href="/sobre-nos" className="text-base font-normal text-foreground hover:text-primary relative group">
              Sobre Nós
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <a
              href="/proposta_erde_cop30.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-2 rounded-full bg-[#1B1B1B] dark:bg-primary text-white px-5 py-2 text-sm font-medium transition-all hover:shadow-md hover:scale-[1.02]"
            >
              <Download className="h-4 w-4" />
              Baixar Proposta
            </a>
            <ThemeToggle />
            <button className="md:hidden" aria-label="Toggle Menu" onClick={() => setIsMobileMenuOpen(true)}>
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </header>

      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />

      <main className="flex-1">
        {/* Introduction Section */}
        <section className="w-full py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="max-w-[800px] mx-auto text-center space-y-4">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold">Cronograma detalhado de execução</h1>
              <p className="text-muted-foreground md:text-lg">
                Acompanhe o planejamento completo do projeto, com todas as fases, entregas e prazos estimados para cada
                etapa do desenvolvimento.
              </p>
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="w-full py-16 md:py-24 bg-[#151515]">
          <div className="container px-4 md:px-6">
            <div className="max-w-[900px] mx-auto">
              <h2 className="text-2xl md:text-3xl font-semibold text-center mb-8 text-white">CRONOGRAMA - BRING</h2>

              <div className="space-y-12">
                {/* SPRINT 1 */}
                <div>
                  <h3 className="text-xl md:text-2xl font-medium text-primary mb-8">SPRINT 1</h3>

                  {/* Fase 1 */}
                  <div className="mb-10">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-primary/20 text-primary px-3 py-1 rounded-full text-sm font-medium">
                        Step 1
                      </div>
                      <div className="text-gray-300">30 dias úteis</div>
                    </div>

                    <div className="space-y-3 mb-6">
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-5 h-5 border border-gray-500 rounded mt-0.5"></div>
                        <span className="text-gray-300">
                          Briefing Bot Mirela: Extração de dados sobre o Bot de Mirela
                        </span>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-5 h-5 border border-gray-500 rounded mt-0.5"></div>
                        <span className="text-gray-300">
                          Criação e testes da Identidade do bot de Mirela (sem funções): Assistente de IA para case
                          Mirela será testado no WhatsApp (ainda sem funções de gerenciar pix, invoca humano - exceto
                          follow up)
                        </span>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-5 h-5 border border-gray-500 rounded mt-0.5"></div>
                        <span className="text-gray-300">
                          Integração e testes de identidade + funções (gerenciar pix, invoca humano - exceto follow up)
                        </span>
                      </div>
                    </div>

                    <div className="bg-[#222] p-4 rounded-lg">
                      <h4 className="text-white font-medium mb-2">O que esse Step entrega?</h4>
                      <p className="text-gray-300">Entrega do Bot Mirela usando API não Oficial</p>
                    </div>
                  </div>

                  {/* Step 2 */}
                  <div className="mb-10">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-primary/20 text-primary px-3 py-1 rounded-full text-sm font-medium">
                        Step 2
                      </div>
                      <div className="text-gray-300">20 dias úteis</div>
                    </div>

                    <div className="space-y-3 mb-6">
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-5 h-5 border border-gray-500 rounded mt-0.5"></div>
                        <span className="text-gray-300">UI/UX com protótipo do sistema web completo</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-5 h-5 border border-gray-500 rounded mt-0.5"></div>
                        <span className="text-gray-300">
                          [Visão da Agência] Desenvolvimento e integração da plataforma com função API não Oficial
                        </span>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-5 h-5 border border-gray-500 rounded mt-0.5"></div>
                        <span className="text-gray-300">Integração de funcionalidades para follow ups</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-5 h-5 border border-gray-500 rounded mt-0.5"></div>
                        <span className="text-gray-300">
                          [Visão do Cliente] Desenvolvimento e integração da plataforma com função API não Oficial
                        </span>
                      </div>
                    </div>

                    <div className="bg-[#222] p-4 rounded-lg">
                      <h4 className="text-white font-medium mb-2">O que esse Step entrega?</h4>
                      <p className="text-gray-300">
                        Plataforma funcional para VISÃO AGÊNCIA e VISÃO CLIENTE para usuários com bots que usam a API
                        Não Oficial do WhatsApp.
                      </p>
                    </div>
                  </div>

                  {/* Step 3 */}
                  <div className="mb-10">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-primary/20 text-primary px-3 py-1 rounded-full text-sm font-medium">
                        Step 3
                      </div>
                      <div className="text-gray-300">30 dias úteis</div>
                    </div>

                    <div className="space-y-3 mb-6">
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-5 h-5 border border-gray-500 rounded mt-0.5"></div>
                        <span className="text-gray-300">
                          [API Oficial] Criação da interface do clone do WhatsApp para versão de API Oficial
                        </span>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-5 h-5 border border-gray-500 rounded mt-0.5"></div>
                        <span className="text-gray-300">
                          Integração do bot com a API Oficial (gerenciar pix, invoca humano e follow ups)
                        </span>
                      </div>
                    </div>

                    <div className="bg-[#222] p-4 rounded-lg">
                      <h4 className="text-white font-medium mb-2">O que esse Step entrega?</h4>
                      <p className="text-gray-300">
                        Plataforma funcional para VISÃO AGÊNCIA e VISÃO CLIENTE contendo a interface de chat para
                        usuários com bots que usam a API Oficial do WhatsApp.
                      </p>
                    </div>
                  </div>

                  {/* Step 4 */}
                  <div className="mb-10">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-primary/20 text-primary px-3 py-1 rounded-full text-sm font-medium">
                        Step 4
                      </div>
                      <div className="text-gray-300">10 dias úteis</div>
                    </div>

                    <div className="space-y-3 mb-6">
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-5 h-5 border border-gray-500 rounded mt-0.5"></div>
                        <span className="text-gray-300">Integração do Bring Bot com a plataforma</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-5 h-5 border border-gray-500 rounded mt-0.5"></div>
                        <span className="text-gray-300">Integração do Bring Bot Briefing com a plataforma</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-5 h-5 border border-gray-500 rounded mt-0.5"></div>
                        <span className="text-gray-300">Adição de recurso Webhooks na plataforma</span>
                      </div>
                    </div>

                    <div className="bg-[#222] p-4 rounded-lg">
                      <h4 className="text-white font-medium mb-2">O que esse Step entrega?</h4>
                      <p className="text-gray-300">
                        Na VISÃO AGÊNCIA, será liberado para configuração e uso a funcionalidade Bring Bot, Bring Bot
                        Briefing e Webhooks.
                      </p>
                    </div>
                  </div>
                </div>

                {/* SPRINT 2 */}
                <div>
                  <h3 className="text-xl md:text-2xl font-medium text-primary mb-8">SPRINT 2</h3>

                  {/* Step 5 */}
                  <div className="mb-10">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-primary/20 text-primary px-3 py-1 rounded-full text-sm font-medium">
                        Step 5
                      </div>
                      <div className="text-gray-300">20 dias úteis</div>
                    </div>

                    <div className="space-y-3 mb-6">
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-5 h-5 border border-gray-500 rounded mt-0.5"></div>
                        <span className="text-gray-300">Testes e Correções Finais</span>
                      </div>
                    </div>

                    <div className="bg-[#222] p-4 rounded-lg">
                      <h4 className="text-white font-medium mb-2">O que esse step entrega?</h4>
                      <p className="text-gray-300">
                        Todos os testes realizados em cada uma das funções, bugs resolvidos, código-fonte e documentação
                        do projeto.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Total */}
                <div className="bg-primary/10 p-6 rounded-lg border border-primary/30">
                  <div className="flex items-center gap-2 mb-2">
                    <Clock className="h-5 w-5 text-primary" />
                    <h3 className="text-lg font-medium text-white">Total: 110 dias úteis</h3>
                  </div>
                  <p className="text-gray-300">
                    90 dias úteis na fase de desenvolvimento e 20 dias úteis na fase de teste
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Back to Main Page Button */}
        <section className="w-full py-16 md:py-24 text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-medium transition-all hover:shadow-md hover:scale-[1.02]"
          >
            <ArrowLeft className="h-5 w-5" />
            Voltar para a proposta completa
          </Link>
        </section>
      </main>
    </div>
  )
} 