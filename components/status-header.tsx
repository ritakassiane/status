"use client"

import { Circle } from "lucide-react"
import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

export function StatusHeader() {
  const [pulse, setPulse] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setPulse((prev) => !prev)
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex justify-start">
      <div
        className={cn(
          "flex items-center gap-2 px-3 py-1.5 bg-[#00FF87] rounded-full text-black transition-all duration-1000",
          pulse ? "opacity-100" : "opacity-90",
        )}
      >
        <Circle
          className={cn(
            "h-3 w-3 fill-white text-white transition-all duration-1000",
            pulse ? "opacity-100" : "opacity-80",
          )}
        />
        <span className="text-xs font-semibold tracking-wider">ON TRACK</span>
      </div>
    </div>
  )
}

