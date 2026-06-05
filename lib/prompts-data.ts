export interface Prompt {
  id: number
  title: string
  prompt: string
  category: string
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
  {
    "id": 6,
    "title": "Checklist de CAPEX e OPEX para Projetos",
    "category": "Estratégia e Finanças B3",
    "prompt": "Crie uma planilha estruturada em texto para estimativa financeira do projeto [nome do projeto]. Separe de forma rígida os custos de CAPEX (investimento inicial em infraestrutura) e OPEX (manutenção e custo recorrente mensal) para um horizonte de [X] anos."
  },
  {
    "id": 7,
    "title": "Pitch de Viabilidade para Investidores Seed",
    "category": "Estratégia e Finanças B3",
    "prompt": "Escreva o roteiro de slides para um deck de investimento em estágio Seed para o projeto [descreva o negócio]. O foco do pitch deve ser provar matematicamente o tamanho do mercado (TAM, SAM, SOM) e a tração inicial usando um modelo de receita baseado em [SaaS/Assinatura/Transacional]."
  },

  // --- CATEGORIA: MARKETING & VENDAS CORPORATIVAS ---
  {
    "id": 8,
    "title": "Script de Prospecção Cold Mail B2B",
    "category": "Marketing e Vendas Corporativas",
    "prompt": "Escreva uma sequência de [X] e-mails frios de prospecção ativa direcionados a [cargos dos decisores, ex: Diretores Financeiros] de médias empresas do setor de [setor]. Elimine termos prolixos, vá direto ao ponto de dor sobre [problema comum] e finalize focando no ROI."
  },
  {
    "id": 9,
    "title": "Contorno de Objeções de Preço High-Ticket",
    "category": "Marketing e Vendas Corporativas",
    "prompt": "Atue como um gerente de vendas sênior. Crie uma matriz de respostas persuasivas para a objeção 'está muito caro' para um serviço de [descreva o serviço] corporativo que custa R$ [X]. Mude o foco da conversa de custo para custo de oportunidade e ganho de eficiência."
  },
  {
    "id": 10,
    "title": "Abordagem de Social Selling no LinkedIn",
    "category": "Marketing e Vendas Corporativas",
    "prompt": "Desenvolva um roteiro de [X] etapas para interagir e abordar de forma orgânica um tomador de decisão com cargo de [inserir cargo] no LinkedIn. O objetivo é agendar um alinhamento comercial rápido sem parecer invasivo e sem usar jargões excessivamente formais."
  },
  {
    "id": 11,
    "title": "Roteiro de Pitch Baseado em SPIN Selling",
    "category": "Marketing e Vendas Corporativas",
    "prompt": "Crie um roteiro de vendas estruturado na metodologia SPIN. Desenvolva perguntas exatas sobre a [Situação] atual do cliente, o [Problema] invisível na operação, a [Implicação] financeira de não resolver isso e a [Necessidade de Solução] do meu produto: [nome do produto]."
  },
  {
    "id": 12,
    "title": "Proposta Comercial Estruturada em Tópicos",
    "category": "Marketing e Vendas Corporativas",
    "prompt": "Esboce uma proposta comercial profissional para a prestação de serviços de [descreva o serviço]. Divida a estrutura estritamente em: Apresentação Executiva, Diagnóstico do Problema, Escopo da Solução, Cronograma de Entregas, Investimento e Próximos Passos."
  },
  {
    "id": 13,
    "title": "Estratégia de Marketing Digital de Experiência",
    "category": "Marketing e Vendas Corporativas",
    "prompt": "Desenvolva uma campanha de marketing de experiência (Retailtainment) focada no lançamento de [produto/serviço premium]. Planeje ações que misturem atrativos físicos no local com campanhas de anúncios geo-localizados no Instagram e WhatsApp."
  },

  // --- CATEGORIA: TECNOLOGIA & ENGENHARIA DE PROMPT ---
  {
    "id": 14,
    "title": "Midjourney: Fotorrealismo Editorial de Luxo",
    "category": "Tecnologia e Engenharia de Prompt",
    "prompt": "Gere uma string de prompt avançada para o Midjourney v6. O sujeito central deve ser [descreva a cena ou objeto de luxo]. Inclua modificadores técnicos como: estilo fotografia editorial de alta costura, iluminação suave de janela lateral, lente de 85mm f/1.4, profundidade de campo rasa, resolução 8k, --ar 16:9 --style raw."
  },
  {
    "id": 15,
    "title": "DALL-E 3: Criação de Logotipo Vetorial Minimalista",
    "category": "Tecnologia e Engenharia de Prompt",
    "prompt": "Crie um prompt detalhado para gerar um logotipo vetorial em estilo flat design para uma empresa de [nicho de mercado]. O logo deve usar as cores [cor 1] e [cor 2], ser centralizado em um fundo branco sólido, focar na geometria simétrica e não conter textos ou gradientes."
  },
  {
    "id": 16,
    "title": "Sora/Runway: Direção Visual Cinematográfica",
    "category": "Tecnologia e Engenharia de Prompt",
    "prompt": "Escreva um comando de direção de cena para geradores de vídeo por IA. Descreva um plano contínuo de [X] segundos mostrando [descreva a cena urbana ou de infraestrutura]. Inclua instruções de movimento de câmera como [drone shot/panning/zoom out], iluminação de [pôr do sol/neon noturno] e atmosfera cinematográfica."
  },
  {
    "id": 17,
    "title": "System Prompt para Assistente Virtual GPT",
    "category": "Tecnologia e Engenharia de Prompt",
    "prompt": "Desenvolva o 'System Prompt' (instrução mestre) para configurar um chatbot de IA focado no atendimento ao cliente de uma empresa de [nicho]. Defina as regras rígidas de tom de voz [técnico/acessível/premium], limites de atuação e como ele deve responder caso não saiba o preço de um serviço."
  },
  {
    "id": 18,
    "title": "Script Python para Consolidação de Relatórios",
    "category": "Tecnologia e Engenharia de Prompt",
    "prompt": "Escreva um script em Python utilizando a biblioteca Pandas que abra múltiplos arquivos [CSV/Excel] contidos em uma pasta, consolide os dados em um único dataframe e gere um resumo estatístico contendo as métricas de [média/mediana/desvio padrão] salvas em um novo arquivo."
  },
  {
    "id": 19,
    "title": "Automação de API com Autenticação JWT",
    "category": "Tecnologia e Engenharia de Prompt",
    "prompt": "Atue como um arquiteto de software sênior. Crie um template de código limpo em [Node.js/Python] demonstrando como implementar uma camada de segurança de autenticação via tokens JWT em uma API REST, incluindo a verificação de expiração do token no middleware."
  },
  {
    "id": 20,
    "title": "Configuração de Ambiente Dockerfile para Aplicações",
    "category": "Tecnologia e Engenharia de Prompt",
    "prompt": "Escreva um arquivo Dockerfile otimizado para uma aplicação desenvolvida em [Node.js/Python/Go]. Certifique-se de usar uma imagem base leve, expor a porta [inserir porta], configurar as variáveis de ambiente e garantir que o cache de dependências seja aproveitado corretamente no processo de build."
  }
];

export const categories = [...new Set(prompts.map((p) => p.category))].filter(c => c !== "Todos").sort((a, b) => a.localeCompare(b, 'pt-BR'));
