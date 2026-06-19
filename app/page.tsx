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

  // 2. Filtra os prompts para exibição (Sem o card 108, pois ele agora é um aviso fixo no topo)
  const filteredPrompts = useMemo(() => {
    const queryNorm = normalize(searchQuery);

    return prompts.filter((prompt) => {
      // Esconde o card 108 do grid comum para não ficar repetido
      if (prompt.id === 108) return false;

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
      <section className="py-16 md:py-20 px-4 pb-4">
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

      {/* CARD FIXO COR DE OURO (Abaixo da Busca, Acima das Abas) */}
      <section className="px-4 pb-8">
        <div className="max-w-4xl mx-auto">
          <div className="rounded-xl border border-amber-500 bg-amber-500/10 p-5 shadow-[0_0_20px_rgba(245,158,11,0.2)] text-left">
            <div className="flex items-center gap-2 mb-3 text-amber-500 font-bold text-base md:text-lg">
              <Sparkles className="h-5 w-5 fill-amber-500" />
              <h2>💡 DICA IMPORTANTE: Como destravar o limite de vídeos do Gemini</h2>
            </div>
            <div className="text-sm md:text-base text-zinc-200 space-y-3 leading-relaxed">
              <p>Sabe quando você está empolgado criando vídeos no Gemini e de repente aparece essa mensagem?</p>
              <p className="italic bg-amber-500/5 border border-amber-500/20 px-3 py-2 rounded-md text-amber-400 font-medium">
                ‘Desculpe, não posso gerar mais vídeos para você hoje. Volte amanhã para mais criações.’
              </p>
              <p>Se você já passou por isso, tenho uma dica que pode te ajudar.</p>
              <p>
                Clique nos <strong>três pontinhos</strong> do vídeo que você quer continuar ou refazer. Depois, selecione a opção <strong>‘Ramificar em uma nova conversa’</strong>.
              </p>
              <p>
                O Gemini vai abrir uma nova conversa baseada naquele vídeo, permitindo que você continue criando, faça alterações ou adicione novas informações.
              </p>
              <p className="text-amber-400 font-medium text-xs md:text-sm pt-1">
                ✨ Na maioria das vezes será possível gerar mais vídeos usando esse recurso.
              </p>
            </div>
          </div>
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
              
              let badgeStyle = {};
              let variantType: "default" | "secondary" | "outline" = selectedCategory === category ? "default" : "secondary";

              if (isTrend) {
                variantType = "outline";
                if (selectedCategory === category) {
                  badgeStyle = { 
                    backgroundColor: "#009c3b", 
                    color: "#ffdf00", 
                    borderColor: "#ffdf00",
                    fontWeight: "bold"
                  };
                } else {
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
