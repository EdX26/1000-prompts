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
    "prompt": "Utilize a técnica de preenchimento generativo (inpainting) para modificar as roupas do sujeito nesta foto. Substitua o traje atual por um conjunto de moda [executiva sob medida/casual elegante/streetwear premium] nas cores [cor 1] e [cor 2]. Mantenha a fisionomia do rosto, a pose e a iluminação originais intactas."
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
    "prompt": "Crie uma imagem no estilo de animação digital 3D da Pixar. O personagem central deve ser um cachorro da raça [Bulldog Francês/descreva a raça] com uma expressão facial [confiante/curiosa]. Adicione acessórios como [um pequeno terno executivo/óculos escuros de sol] e posicione-o em um cenário limpo e minimalista."
  },
  {
    "id": 22,
    "title": "Retrato de Animal Realista com Luz Macro",
    "category": "IA Visual",
    "prompt": "Gere uma fotografia macro fotorrealista de um animal da raça [inserir raça, ex: Bulldog Francês]. O foco deve estar cravado de forma cirúrgica nos olhos do bicho, revelando o reflexo da luz ambiente. Destaque detalhadamente a textura dos [pelos/pele no focinho] com iluminação cinematográfica de estúdio e fundo escuro desfocado."
  },

  // --- CATEGORIA INDEPENDENTE: FIGURINHAS DA COPA ---
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
// --- CATEGORIA: EXCEL-FÓRMULAS-PROCV & PROCX ---
  {
    "id": 26,
    "title": "PROCV Básico: Busca Vertical Simples",
    "category": "EXCEL-FÓRMULAS-PROCV & PROCX",
    "prompt": "Explique como usar o PROCV para encontrar o preço de um produto usando o 'Código do Produto' como referência. Mostre a estrutura da fórmula, explique o que significa o número do índice da coluna e por que devemos usar o 'FALSO' ou '0' no final para trazer o valor exato."
  },
  {
    "id": 27,
    "title": "PROCX Básico: O Substituto do PROCV",
    "category": "EXCEL-FÓRMULAS-PROCV & PROCX",
    "prompt": "Crie um guia rápido de como usar o PROCX para buscar o e-mail de um funcionário pelo ID. Explique de forma simples as três partes obrigatórias da fórmula (o que procura, onde procurar e o que retornar) e destaque por que ela é mais fácil que o PROCV."
  },
  {
    "id": 28,
    "title": "PROCX: Busca da Direita para a Esquerda",
    "category": "EXCEL-FÓRMULAS-PROCV & PROCX",
    "prompt": "Tenho uma tabela onde o CPF está na última coluna e o Nome do cliente está na primeira coluna. Monte um passo a passo mostrando como o PROCX consegue fazer essa busca para trás (da direita para a esquerda), superando a maior limitação histórica do PROCV."
  },
  {
    "id": 29,
    "title": "Tratamento de Erros: PROCV + SEERRO",
    "category": "EXCEL-FÓRMULAS-PROCV & PROCX",
    "prompt": "Quando meu PROCV não encontra um código, a célula fica com o erro '#N/D'. Mostre como envelopar o PROCV dentro da função SEERRO para que, em vez do erro, apareça uma mensagem personalizada como 'Não Cadastrado' ou fique em branco."
  },
  {
    "id": 30,
    "title": "PROCX Nativo com Se Não Encontrado",
    "category": "EXCEL-FÓRMULAS-PROCV & PROCX",
    "prompt": "Mostre como usar o 4º argumento do PROCX ([se_não_encontrado]) para substituir o famoso erro '#N/D' por um texto customizado ou pelo número 0, sem precisar usar a função SEERRO por fora."
  },
  {
    "id": 31,
    "title": "PROCV Bidirecional (PROCV + CORRESP)",
    "category": "EXCEL-FÓRMULAS-PROCV & PROCX",
    "prompt": "Preciso fazer uma busca onde tanto a linha quanto a coluna mudam (ex: buscar o preço de um produto que varia conforme o mês do ano). Mostre como juntar o PROCV com a função CORRESP na matriz de colunas para automatizar esse processo."
  },
  {
    "id": 32,
    "title": "PROCX Bidirecional (PROCX + PROCX)",
    "category": "EXCEL-FÓRMULAS-PROCV & PROCX",
    "prompt": "Explique como aninhar um PROCX dentro de outro PROCX para criar uma busca em matriz (cruzamento de linha e coluna, ex: Produto vs. Região), dispensando o uso antigo de ÍNDICE e CORRESP."
  },
  {
    "id": 33,
    "title": "PROCV com Caracteres Curinga (Busca Parcial)",
    "category": "EXCEL-FÓRMULAS-PROCV & PROCX",
    "prompt": "Não lembro o nome completo da empresa na busca, só o primeiro nome. Mostre como usar o caractere curinga asterisco '*' junto com o PROCV para encontrar dados digitando apenas uma parte do texto."
  },
  {
    "id": 34,
    "title": "PROCX com Busca de Trás para Frente",
    "category": "EXCEL-FÓRMULAS-PROCV & PROCX",
    "prompt": "Tenho uma lista de compras e o mesmo produto aparece várias vezes com preços diferentes em datas diferentes. Como configurar o PROCX (usando o argumento de modo de pesquisa) para trazer o preço da última compra (de baixo para cima) em vez da primeira?"
  },
  {
    "id": 35,
    "title": "Busca por Faixas de Valores (PROCV Verdadeiro)",
    "category": "EXCEL-FÓRMULAS-PROCV & PROCX",
    "prompt": "Preciso calcular a comissão de vendedores com base em faixas de vendas (ex: até 10k ganha 2%, até 20k ganha 5%). Mostre como usar o PROCV com o argumento final como VERDADEIRO (ou 1) para fazer uma busca por aproximação em intervalos."
  },
  {
    "id": 36,
    "title": "Retornar uma Linha Inteira com PROCX",
    "category": "EXCEL-FÓRMULAS-PROCV & PROCX",
    "prompt": "Ao buscar o ID de um produto, preciso que o Excel preencha automaticamente 4 colunas vizinhas de uma vez só (Nome, Preço, Categoria e Estoque). Mostre como o PROCX consegue retornar uma matriz inteira selecionando várias colunas no retorno."
  },
  {
    "id": 37,
    "title": "SOMA+SE (SOMASE) para Acumular Valores",
    "category": "EXCEL-FÓRMULAS-PROCV & PROCX",
    "prompt": "Diferente do PROCV que só traz o primeiro resultado, eu preciso somar todas as vendas de um vendedor específico. Mostre como estruturar a função SOMASE explicando onde fica o critério e onde fica a coluna dos valores a somar."
  },
  {
    "id": 38,
    "title": "SOMASES com Múltiplos Critérios",
    "category": "EXCEL-FÓRMULAS-PROCV & PROCX",
    "prompt": "Explique como usar a função SOMASES para somar o faturamento total considerando duas condições ao mesmo tempo: o produto deve ser 'Notebook' e a região deve ser 'Sudeste'."
  },
  {
    "id": 39,
    "title": "CONT.SE para Contar Ocorrências",
    "category": "EXCEL-FÓRMULAS-PROCV & PROCX",
    "prompt": "Preciso saber quantas vezes um cliente fez compras na minha loja este mês. Mostre como usar a função CONT.SE para contar a quantidade de vezes que um nome específico aparece em uma lista."
  },
  {
    "id": 40,
    "title": "CONT.SES para Auditoria de Dados",
    "category": "EXCEL-FÓRMULAS-PROCV & PROCX",
    "prompt": "Como usar a função CONT.SES para descobrir quantos chamados de suporte técnico estão com o status 'Aberto' E têm prioridade 'Alta' simultaneamente?"
  },
  {
    "id": 41,
    "title": "A Lógica Dinâmica da Função SE",
    "category": "EXCEL-FÓRMULAS-PROCV & PROCX",
    "prompt": "Crie um guia prático sobre a função SE. Mostre como analisar a nota de um aluno e retornar 'Aprovado' se for maior ou igual a 7, e 'Reprovado' se for menor, explicando a estrutura do teste lógico."
  },
  {
    "id": 42,
    "title": "Função SE Aninhada (Múltiplas Condições)",
    "category": "EXCEL-FÓRMULAS-PROCV & PROCX",
    "prompt": "Como criar uma estrutura com várias funções SE juntas para classificar o desempenho de vendas em 'Ruim' (abaixo de 50), 'Médio' (até 80) ou 'Excelente' (acima de 80) na mesma célula."
  },
  {
    "id": 43,
    "title": "Função SES (A Alternativa Moderna ao SE Aninhado)",
    "category": "EXCEL-FÓRMULAS-PROCV & PROCX",
    "prompt": "Apresente a função SES (IFS) do Excel moderno. Mostre como ela substitui o emaranhado de vários 'SE' colados uns nos outros, tornando o código de múltiplos critérios muito mais limpo e legível."
  },
  {
    "id": 44,
    "title": "PROCH: Busca na Horizontal",
    "category": "EXCEL-FÓRMULAS-PROCV & PROCX",
    "prompt": "Minha tabela de dados está invertida: os meses estão dispostos nas colunas e as metas nas linhas. Mostre como usar o PROCH (Busca Horizontal) para encontrar a meta com base no nome do mês."
  },
  {
    "id": 45,
    "title": "A Combinação Clássica: ÍNDICE + CORRESP",
    "category": "EXCEL-FÓRMULAS-PROCV & PROCX",
    "prompt": "Para usuários que não possuem o PROCX no Excel antigo, mostre como a união das funções ÍNDICE e CORRESP cria um sistema de busca extremamente potente que busca para qualquer direção e não trava a planilha."
  },
  {
    "id": 46,
    "title": "Converter Texto em Número (VALOR)",
    "category": "EXCEL-FÓRMULAS-PROCV & PROCX",
    "prompt": "Meu PROCV está dando erro '#N/D' mesmo o número existindo nas duas tabelas. Descobri que em uma tabela o ID está formatado como texto e na outra como número. Mostre como resolver isso usando a função VALOR."
  },
  {
    "id": 47,
    "title": "Limpar Espaços Invisíveis com ARRUMAR",
    "category": "EXCEL-FÓRMULAS-PROCV & PROCX",
    "prompt": "Muitas vezes o PROCV falha porque o texto buscado veio com um espaço em branco invisível no final (ex: 'João '). Mostre como a função ARRUMAR resolve isso limpando espaços extras antes da busca."
  },
  {
    "id": 48,
    "title": "Extrair Dados de Textos com ESQUERDA e DIREITA",
    "category": "EXCEL-FÓRMULAS-PROCV & PROCX",
    "prompt": "Tenho um código de produto como 'BR-10923-SP' e preciso isolar apenas os números ou a sigla do estado para usar como chave de busca. Mostre como usar as funções ESQUERDA, DIREITA ou EXT.TEXTO para quebrar esse texto."
  },
  {
    "id": 49,
    "title": "MÉDIASE para Análise de Indicadores",
    "category": "EXCEL-FÓRMULAS-PROCV & PROCX",
    "prompt": "Preciso calcular a média de vendas diárias, mas desconsiderando os dias em que a loja ficou fechada (vendas igual a 0). Mostre como usar a função MÉDIASE para aplicar essa condição."
  },
  {
    "id": 50,
    "title": "PROCX com Correspondência de Próximo Item Menor/Maior",
    "category": "EXCEL-FÓRMULAS-PROCV & PROCX",
    "prompt": "Explique como funciona o argumento de modo de correspondência do PROCX quando configurado para '-1' ou '1'. Mostre um exemplo prático de como ele encontra um valor exato ou o próximo item menor/maior disponível na tabela."
  }
];
