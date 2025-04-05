"use client"

import { useEffect, useState } from "react"
import { Flag } from "lucide-react"
import { toast } from "react-toastify"
import { getFases } from "@/lib/project-status"
import { cn } from "@/lib/utils"

type Phase = {
  id: string
  nome: string
  status: "to do" | "in progress" | "dependente" | "complete"
  created_at: string
}

export function ProgressBar() {
  const [phases, setPhases] = useState<Phase[]>([])
  const [hoveredPhase, setHoveredPhase] = useState<string | null>(null)

  useEffect(() => {
    async function fetchPhases() {
      try {
        const data = await getFases()
        if (data) {
          setPhases(data as Phase[])
          toast.success("Fases carregadas com sucesso")
        }
      } catch (error: any) {
        toast.error(`Erro ao carregar fases: ${error.message}`)
      }
    }
    fetchPhases()
  }, [])

  if (phases.length === 0) {
    return (
      <div className="w-full py-4 flex flex-col items-center">
        <div className="mb-2 text-center">Estamos preparando o ambiente...</div>
        <div className="border-4 border-t-[#00FF87] border-gray-800 rounded-full w-8 h-8 animate-spin"></div>
      </div>
    )
  }

  const currentPhaseIndex = phases.findIndex((phase) => phase.status !== "complete")
  const effectiveIndex = currentPhaseIndex === -1 ? phases.length : currentPhaseIndex
  const progress = (effectiveIndex / phases.length) * 100

  return (
    <div className="w-full space-y-2 py-4">
      <div className="relative h-2 bg-gray-800 rounded-full overflow-hidden">
        <div
          className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#00FF87] to-[#22DD77] rounded-full"
          style={{ width: `${progress}%` }}
        >
          <div className="absolute top-0 left-0 w-full h-full bg-white opacity-10 animate-pulse"></div>
        </div>

        {phases.map((phase, index) => {
          const position = (index / (phases.length - 1)) * 100
          return (
            <div
              key={phase.id}
              className="absolute top-1/2 -translate-y-1/2 w-4 h-4 -ml-2 rounded-full border-2 border-[#0F0F0F] transition-all duration-300"
              style={{
                left: `${position}%`,
                backgroundColor: phase.status === "complete" ? "#00FF87" : "rgba(255, 255, 255, 0.2)",
                transform: `translateY(-50%) scale(${hoveredPhase === phase.id ? 1.2 : 1})`,
              }}
              onMouseEnter={() => setHoveredPhase(phase.id)}
              onMouseLeave={() => setHoveredPhase(null)}
            >
              {currentPhaseIndex === index && (
                <div className="absolute -top-8 left-1/2 -translate-x-1/2">
                  <Flag className="h-5 w-5 text-[#00FF87]" />
                </div>
              )}
              {hoveredPhase === phase.id && (
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap bg-gray-800 text-white text-xs py-1 px-2 rounded">
                  {phase.nome}
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
