"use client"

import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { ArrowRight } from "lucide-react"

interface ViewDetailsButtonProps {
  href: string
  label?: string
}

export function ViewDetailsButton({ href, label = "View Details" }: ViewDetailsButtonProps) {
  const router = useRouter()

  return (
    <Button
      variant="outline"
      size="sm"
      className="flex items-center gap-1 text-sm font-medium"
      onClick={() => router.push(href)}
    >
      {label}
      <ArrowRight className="w-4 h-4" />
    </Button>
  )
}
