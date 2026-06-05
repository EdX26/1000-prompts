export interface Prompt {
  id: number
  title: string
  prompt: string
  category: string
}

export const prompts: Prompt[] = [
  // --- CATEGORIA: NEGÓCIOS & PRODUTIVIDADE B2B ---
  { 
    "id": 1, 
    "title": "Metodologia DMAIC: Auditoria de Processos", 
    "category": "Negócios", 
    "prompt": "Atue como um Master Black Belt em Lean Six Sigma. Aplique as etapas do framework DMAIC (Definir, Medir, Analisar, Incrementar, Controlar) para realizar uma auditoria profunda em uma operação de logística fracionada. Identifique gargalos ocultos, proponha KPIs de controle e desenhe um plano de ação para reduzir o retrabalho operacional em 30%, documentando o memorial descritivo completo." 
  },
  { 
    "id": 2, 
    "title": "SPIN Selling: Roteiro para Contas Premium", 
    "category": "Negócios", 
    "prompt": "Desenvolva um playbook estruturado de vendas consultivas complexas utilizando a metodologia SPIN Selling. Crie uma matriz com perguntas exatas de Situação, Problema, Implicação e Necessidade de Solução, desenhada especificamente para qualificar e converter leads corporativos de alto padrão no mercado B2B, incluindo scripts de contorno para a objeção de custo de implementação." 
  },
  { 
    "id": 3, 
    "title": "Mapeamento de Processos: Jornada Onboarding B2B", 
    "category": "Negócios", 
    "prompt": "Atue como um analista de RevOps (Operações de Receita). Desenhe o mapeamento textual de fluxo de processos (As-Is e To-Be) para a jornada de integração de um novo cliente corporativo high-ticket. Destaque os pontos de atrito mais comuns que geram cancelamentos precoces (churn) e estabeleça automações e SLAs rígidos para garantir o sucesso do projeto nos primeiros 90 dias." 
  },

  // --- CATEGORIA: MERCADO FINANCEIRO & INVESTIMENTOS ---
  { 
    "id": 4, 
    "title": "Valuation DCF: Fluxo de Caixa Descontado", 
    "category": "Investimentos", 
    "prompt": "Atue como um analista financeiro de fusões e aquisições (M&A). Forneça o passo a passo matemático detalhado e as premissas conceituais para realizar um Valuation por Fluxo de Caixa Descontado (DCF) de 5 anos para uma empresa de capital aberto na B3. Explique detalhadamente como calcular o custo médio ponderado de capital (WACC) e a taxa de perpetuidade, simulando o impacto de variações na taxa Selic no valor final da firma." 
  },
  { 
    "id": 5, 
    "title": "Hedge Estratégico: Proteção de Portfólio na B3", 
    "category": "Investimentos", 
    "prompt": "Desenvolva uma estratégia avançada de proteção de carteira (hedge) utilizando derivativos (opções e contratos futuros) listados na B3. O cenário deve considerar um portfólio exposto à alta volatilidade macroeconômica. Forneça o cálculo de travas usando a compra de Puts e explique como o rebalanceamento dinâmico protege o capital sem neutralizar os ganhos com dividendos a longo prazo." 
  },
  { 
    "id": 6, 
    "title": "Análise Fundamentalista: Red Flags Corporativos", 
    "category": "Investimentos", 
    "prompt": "Crie uma checklist técnica de auditoria fundamentalista para investidores minoritários analisarem balanços de empresas listadas na bolsa. Enumere 10 'red flags' (alertas de risco) ocultos em relatórios contábeis, como manipulação de capital de giro, divergências no EBITDA regulatório, crescimento desproporcional de estoques e riscos de governança corporativa." 
  },

  // --- CATEGORIA: IA VISUAL & DESIGN CINEMATOGRÁFICO ---
  { 
    "id": 7, 
    "title": "Fotorrealismo Avançado: Retrato Editorial Forbes", 
    "category": "IA Visual", 
    "prompt": "Gere uma instrução avançada para o Midjourney v6 focada em um retrato profissional de alto nível. Especifique os seguintes modificadores técnicos: fotografia editorial estilo revista Forbes, lente de 85mm, abertura f/1.8, profundidade de campo rasa com efeito bokeh suave, iluminação de estúdio difusa (rembrandt lighting), texturas de pele ultra-detalhadas, gradação de cores em tons sóbrios, resolução 8k, proporção --ar 16:9, nitidez cirúrgica." 
  },
  { 
    "id": 8, 
    "title": "Render Publicitário: Vidro e Líquido em Splash", 
    "category": "IA Visual", 
    "prompt": "Crie um prompt técnico para fotografia comercial de produtos de luxo por IA. Uma garrafa de vidro fosco minimalista sendo atingida por um fluxo dinâmico de líquido cristalino com borrifos congelados no ar. Especifique velocidade de obturador ultra-rápida (1/8000s), iluminação de estúdio lateral de alto contraste, reflexos e refrações físicas reais sobre uma superfície de mármore escuro polido, hiper-realista." 
  },
  { 
    "id": 9, 
    "title": "Concept Art: Arquitetura Brutalista Futurista", 
    "category": "IA Visual", 
    "prompt": "Desenvolva um prompt conceitual para renderização arquitetônica no Midjourney. Retrate uma estrutura monumental de arquitetura brutalista futurista integrada de forma sustentável com jardins verticais suspensos e elementos de vidro curvo. A cena deve ser ambientada durante o início da noite (blue hour), com a iluminação interna quente do edifício se refletindo em uma superfície de água perfeitamente calma, clima cinematográfico, --v 6.0." 
  },
  { 
    "id": 10, 
    "title": "Prompt Sora: Drone Shot FPV Cinemático", 
    "category": "IA Visual", 
    "prompt": "Estruture uma instrução de texto para geradores de vídeo por IA (como Sora ou Runway Gen-3). Descreva um movimento de câmera contínuo em primeira pessoa (FPV drone shot) voando em alta velocidade rentes às paredes de um desfiladeiro rochoso estreito, realizando uma curva fechada fluida que revela uma praia de areia preta vulcânica e ondas pesadas quebrando em câmera lenta sob a luz dourada do entardecer." 
  }
];

export const categories = [...new Set(prompts.map((p) => p.category))].filter(c => c !== "Todos").sort((a, b) => a.localeCompare(b, 'pt-BR'));
