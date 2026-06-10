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

  // --- CATEGORIA: VÍDEOS CURTOS (GEMINI) ---
  {
    "id": 11,
    "title": "Roteiro de Retenção Extrema (Efeito Loop)",
    "category": "Vídeos Curtos (Gemini)",
    "prompt": "Crie o roteiro de um vídeo de [30/60] segundos sobre [tema] focado no nicho de [mercado]. O texto deve aplicar a técnica do loop perfeito, onde a última frase falada se conecta sem emendas com o gancho inicial. Estruture em: [Visual da Cena], [Locução] e [Efeito Sonoro]."
  },
  {
    "id": 12,
    "title": "Gancho Magnético nos Primeiros 3 Segundos",
    "category": "Vídeos Curtos (Gemini)",
    "prompt": "Gere 5 variações de ganchos (hooks) iniciais disruptivos para um vídeo curto sobre [assunto]. Escreva as opções focando em diferentes gatilhos mentais: 1) Curiosidade cega, 2) Polêmica de mercado, 3) Quebra de expectativa, 4) Dor oculta, 5) Benefício imediato."
  },
  {
    "id": 13,
    "title": "Roteiro VSL Curto (Método P.A.S.)",
    "category": "Vídeos Curtos (Gemini)",
    "prompt": "Escreva o roteiro de um Short de conversão focado em apresentar o produto [nome do produto]. Siga rigidamente a fórmula PAS: apresente o [Problema da operação] nos primeiros 5 segundos, faça a [Agitação da dor] até os 25 segundos, e entregue a [Solução + CTA para clique no link] no final."
  },
  {
    "id": 14,
    "title": "Storytelling de Erro com Conexão Humana",
    "category": "Vídeos Curtos (Gemini)",
    "prompt": "Desenvolva o roteiro para um Reels narrado em primeira pessoa focado em autoridade. O tema é 'Como eu errei ao [descreva a falha ou decisão errada de negócios] e o que aprendi'. O tom deve ser transparente, eliminando formalidades e gerando identificação imediata com o espectador profissional."
  },
  {
    "id": 15,
    "title": "Tutorial Técnico de Tela: Passo a Passo Rápido",
    "category": "Vídeos Curtos (Gemini)",
    "prompt": "Estruture o esqueleto dinâmico de um vídeo tutorial de 45 segundos ensinando como fazer [tarefa técnica/automação]. Forneça indicações explícitas de quando exibir o clique na tela, quais os comandos de atalho usar e adicione uma legenda fluida para facilitar a leitura sem áudio."
  },
  {
    "id": 16,
    "title": "Cópia de Anúncio de Alcance Geo-Localizado",
    "category": "Vídeos Curtos (Gemini)",
    "prompt": "Redija o script falado de um criativo em vídeo para Meta Ads focado em atrair o público empresarial da região de [inserir cidade/bairro]. Use um elemento visual marcante da localidade nos primeiros seconds como gancho de proximidade regional e finalize direcionando para o WhatsApp Business."
  },

  // --- CATEGORIA: IA VISUAL ---
  {
    "id": 17,
    "title": "Transformar Desenho ou Rascunho em Imagem 3D",
    "category": "IA Visual",
    "prompt": "Atue como um artista de CGI. Converta o rascunho de linhas simples deste [desenho/layout de produto/logotipo] em um render 3D hiper-realista. Aplique uma textura premium de [metal escovado/fibra de carbono/plástico fosco], configure uma iluminação de estúdio com sombras suaves e utilize o plano de fundo na cor [inserir cor]."
  },
  {
    "id": 18,
    "title": "Lookbook: Alterar Roupas em Fotos de Pessoas",
    "category": "IA Visual",
    "prompt": "Utilize a técnica de preenchimento generativo (inpainting) para modifier as roupas do sujeito nesta foto. Substitua o traje atual por um conjunto de moda [executiva sob medida/casual elegante/streetwear premium] nas cores [cor 1] e [cor 2]. Mantenha a fisionomia do rosto, a pose e a iluminação originais intactas."
  },
  {
    "id": 19,
    "title": "Modificar Cenário de Fundo mantendo a Pessoa",
    "category": "IA Visual",
    "prompt": "Mantenha a pessoa desta fotografia perfeitamente isolada e idêntica, sem alterar suas feições ou roupas. Substitua todo o plano de fundo atual por um cenário de [escritório moderno de luxo/avenida urbana movimentada ao anoitecer/lounge corporativo] com profundidade de campo rasa criando um efeito bokeh suave."
  },
  {
    "id": 20,
    "title": "Transformar Fotos Reais em Desenhos Artísticos",
    "category": "IA Visual",
    "prompt": "Redija um comando para transformar esta foto real em uma ilustração artística baseada no estilo [mural de grafite urbano/xilogravura rústica/esboço a lápis de carvão]. O resultado deve manter as linhas de expressão e contornos reconhecíveis do sujeito original, aplicando um contraste marcante de sombras e uma paleta de cores baseada em [tons pastéis/cores neon saturadas]."
  },
  {
    "id": 21,
    "title": "Retratos de Animais em Estilo Animação 3D",
    "category": "IA Visual",
    "prompt": "Crie uma imagem no estilo de animação digital 3D da Pixar. O personagem central deve ser um cachorro da raça [Bulldog Francês/descreva a raça] com uma expression facial [confiante/curiosa]. Adicione acessórios como [um pequeno terno executivo/óculos escuros de sol] e posicione-o em um cenário limpo e minimalista."
  },
  {
    "id": 22,
    "title": "Retrato de Animal Realista com Luz Macro",
    "category": "IA Visual",
    "prompt": "Gere uma fotografia macro fotorrealista de um animal da raça [inserir raça, ex: Bulldog Francês]. O foco deve estar cravado de forma cirúrgica nos olhos do bicho, revelando o reflexo da luz ambiente. Destaque detalhadamente a textura dos [pelos/pele no focinho] com iluminação cinematográfica de estúdio e fundo escuro desfocado."
  },

  // --- CATEGORIA: CRIE SUAS IMAGENS DE FIGURINHAS DA COPA ---
  {
    "id": 23,
    "title": "Figurinha da Copa: Card Dinâmico de Jogador",
    "category": "Crie suas imagens de figurinhas da Copa",
    "prompt": "Desenvolva o design de um card colecionável oficial para o álbum da Copa do Mundo. O jogador [nome do craque ou descrição física] deve estar em uma pose de ação dinâmica de jogo no centro da figurinha. Adicione as bordas geométricas padrão, o brasão da seleção do [país] e a ficha técnica com a posição de [inserir posição]."
  },
  {
    "id": 24,
    "title": "Figurinha da Copa: Fundo Brilhante Holográfico Raro",
    "category": "Crie suas imagens de figurinhas da Copa",
    "prompt": "Gere uma arte vetorial focada em criar o plano de fundo de uma figurinha estilo 'Legend' ultra rara para a Copa do Mundo. O cenário do card deve conter texturas metálicas em alto-relevo [dourado/prateado], efeitos de prisma tridimensionais que simulam refração de luz e brilhos holográficos reflexivos de alta fidelidade."
  },
  {
    "id": 25,
    "title": "Figurinha da Copa: Estilo Retrô Vintage Analógico",
    "category": "Crie suas imagens de figurinhas da Copa",
    "prompt": "Gere uma imagem simulando um card de futebol colecionável antigo da Copa do Mundo dos anos [70/80]. O layout deve aplicar uma paleta de cores analógicas ligeiramente lavadas, grão de filme sutil, cantos levemente desgastados e uma textura de papel envelhecido que reforce a estética vintage."
  },

  // --- CATEGORIA: COPA DO MUNDO 2026 ---
  {
    "id": 2
