export function ProjectHeadline() {
  // Format current time for the "last updated" text
  const now = new Date()
  const hours = now.getHours()
  const minutes = now.getMinutes()
  const formattedTime = `${hours}h${minutes.toString().padStart(2, "0")}`

  return (
    <div className="text-center space-y-2">
      <h1 className="text-3xl md:text-4xl font-medium">Status do Projeto</h1>
      <p className="text-[#A1A1A1] text-sm">Última atualização: Hoje às {formattedTime}</p>
    </div>
  )
}

