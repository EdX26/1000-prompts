export interface Prompt {
  readonly id: number;
  readonly title: string;
  readonly prompt: string;
  readonly category: string;
}

export const prompts: Prompt[] = [
  // --- CATEGORIA: ESTRATÉGIA E FINANÇAS B3 ---
  {
    "id": 1,
    "title": "Análise de Sensibilidade: Impacto da Selic",
    "category": "Estratégia e Finanças B3",
    "prompt": "Atue como um analista macroeconômico sênior. Avalie o impacto de uma [alta/queda] de [X]% na taxa Selic especificamente para o balanço de empresas do setor de [Aviação/Varejo/Energia] listadas na B3. Foque em como isso altera o custo de rolagem da dívida líquida e o valuation por múltiplos."
  },
  {
    "id": 2,
    "title": "Auditoria de Dividend Yield e Payout",
    "category": "Estratégia e Finanças B3",
    "prompt": "Analise o histórico de proventos da empresa [inserir ticker na B3]. Calcule a sustentabilidade do Dividend Yield atual com base no Payout histórico e na geração de Fluxo de Caixa Livre. Aponte se há risco de corte de dividendos nos próximos [X] trimestres."
  },
  {
    "id": 3,
    "title": "Simulação de Inplit / Split de Ações",
    "category": "Estratégia e Finanças B3",
    "prompt": "Uma empresa de capital aberto anunciou um [grupamento/desdobramento] na proporção de [X] para [Y]. Monte um relatório explicando como esse processo afeta a liquidez diária do ativo na B3, o preço ajustado por lote padrão de 100 ações e a percepção psicológica do investidor de varejo."
  },
  {
    "id": 4,
    "title": "Avaliação de Direitos de Subscrição",
    "category": "Estratégia e Finanças B3",
    "prompt": "Atue como consultor financeiro. Recebi o direito de subscrição do ativo [inserir ticker] com preço de exercício de R$ [X], enquanto a ação no mercado está cotada a R$ [Y]. Calcule matematicamente se vale a pena exercer o direito, vender o direito no mercado fracionário ou ignorar a oferta, considerando o custo de oportunidade."
  },
  {
    "id": 5,
    "title": "Modelagem de Holding Familiar e Sucessão",
    "category": "Estratégia e Finanças B3",
    "prompt": "Estruture um plano preliminar de planejamento sucessório e proteção patrimonial através de uma Holding Familiar para um patrimônio avaliado em R$ [X] composto por [imóveis/empresas/ativos financeiros]. Foque na redução legal do ITCMD e na governança de transição de cotas."
  },

  // --- CATEGORIA: MARKETING & VENDAS CORPORATIVAS ---
  {
    "id": 6,
    "title": "Script de Prospecção Cold Mail B2B",
    "category": "Marketing e Vendas Corporativas",
    "prompt": "Escreva uma sequência de [X] e-mails frios de prospecção activa direcionados a [cargos dos decisores, ex: Diretores Financeiros] de médias empresas do setor de [setor]. Elimine termos prolixos, vá direto ao ponto de dor sobre [problema comum] e finalize focando no ROI."
  },
  {
    "id": 7,
    "title": "Contorno de Objeções de Preço High-Ticket",
    "category": "Marketing e Vendas Corporativas",
    "prompt": "Atue como um gerente de vendas sênior. Crie uma matriz de respostas persuasivas para a objeção 'está muito caro' para um serviço de [descreva o serviço] corporativo que custa R$ [X]. Mude o foco da conversa de custo para custo de oportunidade e ganho de eficiência."
  },
  {
    "id": 8,
    "title": "Abordagem de Social Selling no LinkedIn",
    "category": "Marketing e Vendas Corporativas",
    "prompt": "Desenvolva um roteiro de [X] etapas para interagir e abordar de forma orgânica um tomador de decisão com cargo de [inserir cargo] no LinkedIn. O objetivo é agendar um alinhamento comercial rápido sem parecer invasivo e sem usar jargões excessivamente formais."
  },

  // --- CATEGORIA: TECNOLOGIA & ENGENHARIA DE PROMPT ---
  {
    "id": 9,
    "title": "Midjourney: Fotorrealismo Editorial de Luxo",
    "category": "Tecnologia e Engenharia de Prompt",
    "prompt": "Gere uma string de prompt avançada para o Midjourney v6. O sujeito central deve ser [descreva a scene ou objeto de luxo]. Inclua modificadores técnicos como: estilo fotografia editorial de alta costura, iluminação suave de janela lateral, lente de 85mm f/1.4, profundidade de campo rasa, resolution 8k, --ar 16:9 --style raw."
  },
  {
    "id": 10,
    "title": "DALL-E 3: Criação de Logotipo Vetorial Minimalista",
    "category": "Tecnologia e Engenharia de Prompt",
    "prompt": "Crie un prompt detalhado para gerar um logotipo vetorial em estilo flat design para uma empresa de [nicho de mercado]. O logo deve usar as cores [cor 1] e [cor 2], ser centralizado em um fundo branco sólido, focar na geometria simétrica e não conter textos ou gradientes."
  },

  // --- CATEGORIA: VÍDEOS CURTOS ---
  {
    "id": 11,
    "title": "Roteiro de Retenção Extrema (Efeito Loop)",
    "category": "Vídeos Curtos",
    "prompt": "Crie o roteiro de um vídeo de [30/60] segundos sobre [tema] focado no nicho de [mercado]. O texto deve aplicar a técnica do loop perfeito, onde a última frase falada se conecta sem emendas com o gancho inicial. Estruture em: [Visual da Cena], [Locução] e [Efeito Sonoro]."
  },
  {
    "id": 12,
    "title": "Gancho Magnético nos Primeiros 3 Segundos",
    "category": "Vídeos Curtos",
    "prompt": "Gere 5 variações de ganchos (hooks) iniciais disruptivos para um vídeo curto sobre [assunto]. Escreva as opções focando em diferentes gatilhos mentais: 1) Curiosidade cega, 2) Polêmica
