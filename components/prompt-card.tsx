"use client"

import { useState } from "react"
import { Check, Copy } from "lucide-react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface PromptCardProps {
  title: string
  prompt: string
  category: string
}

export function PromptCard({ title, prompt, category }: PromptCardProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    await navigator.clipboard.writeText(prompt)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <Card className="flex flex-col h-full bg-card border-border hover:border-muted-foreground/30 transition-colors">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between gap-2">
          <CardTitle className="text-base font-medium leading-snug text-card-foreground">
            {title}
          </CardTitle>
          <Badge variant="secondary" className="shrink-0 text-xs">
            {category}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="flex-1 pb-4">
        <p className="text-sm text-muted-foreground line-clamp-4 leading-relaxed">
          {prompt}
        </p>
      </CardContent>
      <CardFooter className="pt-0">
        <Button
          variant="secondary"
          size="sm"
          className="w-full gap-2"
          onClick={handleCopy}
        >
          {copied ? (
            <>
              <Check className="h-4 w-4" />
              Copiado!
            </>
          ) : (
            <>
              <Copy className="h-4 w-4" />
              Copiar Prompt
            </>
          )}
        </Button>
      </CardFooter>
    </Card>
  )
}
