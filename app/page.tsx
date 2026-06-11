"use client"

import { useState, useMemo } from "react"
import { SearchBar } from "@/components/search-bar"
import { PromptCard } from "@/components/prompt-card"
import { prompts, uniqueCategories } from "@/lib/prompts-data"
import { Badge } from "@/components/ui/badge"
import { Sparkles } from "lucide-react"

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  // Função auxiliar para normalizar o texto (remove acentos e deixa tudo minúsculo)
  const normalize = (text: string) => 
    text.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();

  // 1. Identifica quais categorias contêm a palavra buscada
  const categoriesWithMatches = useMemo(() => {
    if (!searchQuery.trim()) return new Set();
    const queryNorm = normalize(searchQuery);
    
    const matches = prompts.filter(p =>
      normalize(p.title).includes(queryNorm) ||
      normalize(p.prompt).includes(queryNorm)
    );
    return new Set(matches.map(p => p.category));
  }, [searchQuery]);

  // 2. Filtra os prompts para exibição
  const filteredPrompts = useMemo(() => {
    const queryNorm = normalize(searchQuery);

    return prompts.filter((prompt) => {
      const matchesSearch =
        normalize(prompt.title).includes(queryNorm) ||
        normalize(prompt.prompt).includes(queryNorm) ||
        normalize(prompt.category).includes(queryNorm);

      const matchesCategory = !selectedCategory || prompt.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory])

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-16 md:py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary mb-6">
            <Sparkles className="h-4 w-4 text-foreground" />
            <span className="text-sm font-medium text-foreground">Biblioteca de Prompts</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground mb-4">
            <span className="text-muted-foreground">1000</span> Prompts
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            Encontre o prompt perfeito para ChatGPT, Gemini, Veo, Nano Banana, Claude, Midjourney e outras IAs. 
            Copie com um clique e comece a criar.
          </p>

          <SearchBar value={searchQuery} onChange={setSearchQuery} />
        </div>
      </section>

      {/* Categories Filter */}
      <section className="px-4 pb-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap gap-2 justify-center">
            
            <Badge
              variant={selectedCategory === null ? "default" : "secondary"}
              className="cursor-pointer px-4 py-2 text-sm transition-colors"
              onClick={() => setSelectedCategory(null)}
            >
              Todos
            </Badge>
            
            {uniqueCategories.map((category) => {
              const isMatch = categoriesWithMatches.has(category);
              const isTrend = category.toLowerCase().includes("trend") || category.toLowerCase().includes("tendencia");
              
              // Estilização dinâmica forçada via Inline Style para evitar conflitos do Tailwind/Shadcn
              let badgeStyle = {};
              let variantType: "default" | "secondary" | "outline" = selectedCategory === category ? "default" : "secondary";

              if (isTrend) {
                variantType = "outline"; // Libera o fundo para ser pintado manualmente
                if (selectedCategory === category) {
                  // Estado Selecionado: Verde Seleção + Letras Amarelas Ouro
                  badgeStyle = { 
                    backgroundColor: "#009c3b", 
                    color: "#ffdf00", 
                    borderColor: "#ffdf00",
                    fontWeight: "bold"
                  };
                } else {
                  // Estado Inativo: Fundo Verde Escuro + Texto Verde Claro
                  badgeStyle = { 
                    backgroundColor: "#002f11", 
                    color: "#5cd684", 
                    borderColor: "#005c23" 
                  };
                }
              }

              return (
                <Badge
                  key={category}
                  variant={variantType}
                  style={badgeStyle}
                  className={`cursor-pointer px-4 py-2 text-sm transition-all duration-300 ${
                    isMatch && selectedCategory !== category 
                      ? "ring-2 ring-primary ring-offset-2 ring-offset-background scale-105 shadow-lg" 
                      : ""
                  } ${!isMatch && searchQuery.trim() !== "" ? "opacity-40" : "opacity-100"}`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {isTrend ? (
                    <Sparkles className="h-3 w-3 mr-1 inline text-[#ffdf00] fill-[#ffdf00] animate-pulse" />
                  ) : (
                    isMatch && <Sparkles className="h-3 w-3 mr-1 inline" />
                  )}
                  {category}
                </Badge>
              );
            })}
          </div>
        </div>
      </section>

      {/* Prompts Grid */}
      <section className="px-4 pb-16">
        <div className="max-w-6xl mx-auto">
          {filteredPrompts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredPrompts.map((prompt) => (
                <PromptCard
                  key={prompt.id}
                  title={prompt.title}
                  prompt={prompt.prompt}
                  category={prompt.category}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg">
                Nenhum prompt encontrado para sua busca.
              </p>
              <p className="text-muted-foreground/70 text-sm mt-2">
                Tente usar outras palavras-chave ou remover os filtros.
              </p>
            </div>
          )}
        </div>
      </section>

      <footer className="border-t border-border py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-sm text-muted-foreground">
            1000 Prompts — Sua biblioteca de prompts para IA
          </p>
        </div>
      </footer>
    </main>
  )
}
