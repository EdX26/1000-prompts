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
    "prompt": "Uma empresa de capital aberto anunciou um [grupamento/desdobramento] na proporção de [X] para [Y]. Monte um relatório explicando como esse processo afeta a liquidez diária do ativo na B3, o preço adjusted por lote padrão de 100 ações e a percepção psicológica do investidor de varejo."
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
    "prompt": "Crie uma imagem no estilo de animação digital 3D da Pixar. O personagem central deve ser um cachorro da raça [Bulldog Francês/descreva a raça] com uma expressão facial [confiante/curiosa]. Adicione acessórios como [um pequeno terno executivo/óculos escuros de sol] e posicione-o em um cenário limpo e minimalista."
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
    "id": 26,
    "title": "Estrutura Completa de Bolão Corporativo Integrado",
    "category": "Copa do Mundo 2026",
    "prompt": "Atue como especialista em Endomarketing. Desenhe o regulamento de um Bolão interno da Copa do Mundo 2026 para uma empresa de [X] colaboradores. Inclua: critérios matemáticos de pontuação (placar exato, saldo, vencedor), regras rígidas de desempate, cronograma de palpites e ideias de prêmios corporativos que sigam as normas de compliance."
  },
  {
    "id": 27,
    "title": "Marketing de Oportunidade: Campanhas de Real-Time",
    "category": "Copa do Mundo 2026",
    "prompt": "Atue como Copywriter Sênior. Crie uma matriz de conteúdo dinâmico para redes sociais focada no marketing de oportunidade durante a Copa do Mundo 2026 para uma marca de [nicho]. Escreva 3 variações de posts rápidos e ganchos de engajamento para os cenários imediatos pós-jogo: 1) Vitória esmagadora, 2) Empate tenso/Disputa de pênaltis, 3) Derrota ou zebra em campo."
  },
  {
    "id": 28,
    "title": "Mockup Visual: Brindes e Envelopamento Corporativo",
    "category": "Copa do Mundo 2026",
    "prompt": "Gere uma engenharia de prompt detalhada para o Midjourney v6 focado em design de produto. O objetivo é criar o design de uma linha premium de brindes corporativos para a Copa do Mundo 2026. Os itens devem incluir [copo térmico/garrafa de alumínio/jaqueta corta-vento] em estilo minimalista de luxo, aplicando as cores da seleção nacional de forma harmônica e espaço para aplicação de logo em alto-relevo fosco."
  },
  {
    "id": 29,
    "title": "Análise Preditiva e Probabilidade de Confrontos",
    "category": "Copa do Mundo 2026",
    "prompt": "Atue como um cientista de dados focado em estatísticas esportivas. Com base no histórico recente de confrontos das seleções do Grupo [X] e no cruzamento de dados de performance ofensiva/defensiva atualizados, monte um modelo lógico de previsão de resultados para a fase de grupos. Aponte estatisticamente onde estão as maiores chances de 'zebra' no campeonato."
  },
  {
    "id": 30,
    "title": "Gamificação de Vendas com Temática da Copa",
    "category": "Copa do Mundo 2026",
    "prompt": "Escreva um plano estratégico de gamificação comercial para uma equipe de vendas B2B bater metas durante os meses da Copa do Mundo 2026. Transforme o pipeline de vendas em um 'campo de jogo': abertura de contas equivale a assistências, fechamento de contratos são gols, e o atingimento do teto da meta confere o título de campeão. Inclua gatilhos de aceleração em dias de jogos da seleção."
  },
  {
    "id": 31,
    "title": "Ganchos de Engajamento Pós-Jogo da Seleção e Impacto no Bolão",
    "category": "Copa do Mundo 2026",
    "prompt": "Atue como Social Media Sênior especialista em viralização. Redija uma matriz de 3 templates de mensagens de alto engajamento para disparar nas redes/comunidades 10 minutos após o apito final do jogo da Seleção Brasileira. Estruture os textos variando o tom emocional para os seguintes cenários de resultados e impacto no Bolão: 1) O Brasil ganhou e você cravou o placar (euforia e call-to-action para prints), 2) O Brasil ganhou mas o resultado foi uma zebra que quebrou o Bolão de todos (humor focado em identificação), 3) O Brasil empatou/perdeu estragando os pontos da rodada (resiliência e foco em recalcular a rota para o próximo jogo)."
  },

  // --- CATEGORIA: EXCEL-FÓRMULAS-PROCV & PROCX ---
  {
    "id": 51,
    "title": "PROCX com Retorno de Multi-Colunas Não Sequenciais",
    "category": "EXCEL-FÓRMULAS-PROCV & PROCX",
    "prompt": "Preciso usar o PROCX para buscar um ID de funcionário e retornar apenas a 'Coluna B (Nome)' e a 'Coluna E (Salário)', pulando as colunas do meio. Mostre como fazer isso combinando o PROCX com a função ESCOLHER-LINS ou chaves matematicamente estruturadas."
  },
  {
    "id": 52,
    "title": "PROCV Cruzando Duas Planilhas Diferentes",
    "category": "EXCEL-FÓRMULAS-PROCV & PROCX",
    "prompt": "Explique o passo a passo de como fazer um PROCV buscar uma informação que está em um arquivo de Excel totalmente diferente e fechado na minha rede. Mostre como fica a sintaxe do caminho do arquivo dentro da fórmula."
  },
  {
    "id": 53,
    "title": "PROCX para Validação de Cadastros Duplos",
    "category": "EXCEL-FÓRMULAS-PROCV & PROCX",
    "prompt": "Como usar o PROCX para comparar a Lista A (clientes antigos) com a Lista B (clientes novos) e me dizer de forma automática quais nomes da Lista B já estavam cadastrados na Lista A, evitando duplicidade?"
  },
  {
    "id": 54,
    "title": "Unir PROCV com CONCATENAR para Chaves Compostas",
    "category": "EXCEL-FÓRMULAS-PROCV & PROCX",
    "prompt": "O PROCV clássico falha se eu tiver dois funcionários chamados 'João Silva'. Mostre o truque de criar uma coluna de apoio unindo duas informações (ex: Nome + Cargo) usando o símbolo '&' para fazer uma busca infalível."
  },
  {
    "id": 55,
    "title": "PROCX Nativo com Chave Composta",
    "category": "EXCEL-FÓRMULAS-PROCV & PROCX",
    "prompt": "Diferente do PROCV, o PROCX aceita chaves compostas sem precisar criar colunas extras na planilha. Mostre como estruturar a busca usando o caractere '&' direto dentro dos argumentos da fórmula (ex: procurar Nome & Cidade)."
  },
  {
    "id": 56,
    "title": "Converter Números em Texto para Ajustar PROCV",
    "category": "EXCEL-FÓRMULAS-PROCV & PROCX",
    "prompt": "Tenho um relatório onde os códigos de produto vieram formatados como texto (com o triângulo verde no canto), mas a minha tabela oficial usa números reais. Mostre como usar a função TEXTO ou o caractere '&' dentro do PROCV para corrigir isso sem mexer na base."
  },
  {
    "id": 57,
    "title": "PROCX para Achar o Próximo Item Mais Próximo (Abaixo/Acima)",
    "category": "EXCEL-FÓRMULAS-PROCV & PROCX",
    "prompt": "Preciso encontrar a alíquota correta do Imposto de Renda baseada no salário recebido. Explique como usar o argumento 'modo_de_correspondência' do PROCX para localizar o valor exato ou, na ausência dele, o próximo menor elemento da tabela."
  },
  {
    "id": 58,
    "title": "Substituir PROCV por SE+PROCV condicional",
    "category": "EXCEL-FÓRMULAS-PROCV & PROCX",
    "prompt": "Tenho duas tabelas de preços distintas: uma para o 'Ano 2024' e outra para o 'Ano 2025'. Mostre como usar a função SE para decidir qual PROCV deve ser executado com base no ano digitado em uma célula de controle."
  },
  {
    "id": 59,
    "title": "PROCX com Pesquisa Binária (Alta Performance)",
    "category": "EXCEL-FÓRMULAS-PROCV & PROCX",
    "prompt": "Minha planilha do Excel tem mais de 200 mil linhas e o processamento está travando. Explique como ativar o modo de pesquisa binária do PROCX (argumento 2 ou -2) e quais são as regras de ordenação de dados para acelerar a busca em 10x."
  },
  {
    "id": 60,
    "title": "PROCV Dinâmico puxando a Coluna via Célula",
    "category": "EXCEL-FÓRMULAS-PROCV & PROCX",
    "prompt": "Em vez de deixar fixo o número do índice da coluna no PROCV, quero que ele mude sozinho conforme o número que eu digitar na célula A1. Mostre como fazer esse vínculo direto de forma simples."
  },
  {
    "id": 61,
    "title": "Análise de Metas Descoladas com MAIOR e MENOR",
    "category": "EXCEL-FÓRMULAS-PROCV & PROCX",
    "prompt": "Como usar as funções MAIOR e MENOR combinadas com buscas para identificar e extrair automaticamente da planilha quais foram os 3 maiores faturamentos do mês e os nomes dos respectivos vendedores."
  },
  {
    "id": 62,
    "title": "PROCX com Filtro Avançado em Matrizes Dinâmicas",
    "category": "EXCEL-FÓRMULAS-PROCV & PROCX",
    "prompt": "Mostre a diferença conceitual e prática entre fazer uma busca usando o PROCX e usar a nova função FILTRO do Excel moderno, explicando quando vale a pena usar uma ou outra para extrair dados corporativos."
  },
  {
    "id": 63,
    "title": "Evitar Valores Zerados com PROCV + SE",
    "category": "EXCEL-FÓRMULAS-PROCV & PROCX",
    "prompt": "Quando meu PROCV encontra o item, mas a célula de retorno está vazia, o Excel joga o número '0' na tela. Como faço uma regra usando a função SE para que, se o resultado encontrado for vazio, a célula exiba um espaço em branco em vez de zero?"
  },
  {
    "id": 64,
    "title": "A Lógica Complexa da Função E junto ao SE",
    "category": "EXCEL-FÓRMULAS-PROCV & PROCX",
    "prompt": "Explique como criar uma validação interna de aprovação de crédito: o cliente só ganha o status 'Aprovado' se o faturamento mensal for maior que R$ 50.000 E o tempo de CNPJ for maior que 2 anos. Use SE combinado com a função E."
  },
  {
    "id": 65,
    "title": "A Lógica Flexível da Função OU junto ao SE",
    "category": "EXCEL-FÓRMULAS-PROCV & PROCX",
    "prompt": "Monte uma fórmula usando SE e OU para disparar alertas de estoque: se a quantidade do produto for menor que 10 unidades OU se a data de validade estiver vencida, a célula deve escrever 'REPOR IMEDIATAMENTE'."
  },
  {
    "id": 66,
    "title": "Diferença Crítica entre CONT.NUM e CONT.VALORES",
    "category": "EXCEL-FÓRMULAS-PROCV & PROCX",
    "prompt": "Crie um guia direto explicando por que o CONT.NUM ignora células de texto e como o CONT.VALORES funciona para contar qualquer tipo de preenchimento. Dê exemplos práticos de uso em relatórios de auditoria."
  },
  {
    "id": 67,
    "title": "Achar Último Item Preenchido via PROCX",
    "category": "EXCEL-FÓRMULAS-PROCV & PROCX",
    "prompt": "Preciso localizar o último status lançado na planilha de auditoria para um determinado projeto. Mostre como configurar o PROCX para rodar de baixo para cima na tabela, capturando a atualização mais recente inserida na base."
  },
  {
    "id": 68,
    "title": "Tratando Erros Específicos com SÉNATURAL / SÉERRO",
    "category": "EXCEL-FÓRMULAS-PROCV & PROCX",
    "prompt": "Explique a diferença técnica entre tratar erros com a função SEERRO (que engloba qualquer falha de divisão ou digitação) e usar a função SENÃODISP (IFNA), focada estritamente no erro '#N/D' gerado por buscas vazias."
  },
  {
    "id": 69,
    "title": "PROCV Associado à Função INDIRETO",
    "category": "EXCEL-FÓRMULAS-PROCV & PROCX",
    "prompt": "Tenho abas separadas chamadas 'SãoPaulo', 'Rio' e 'Santos'. Mostre como usar a função INDIRETO dentro da matriz de busca do PROCV para que ele mude automaticamente de aba de pesquisa baseado no nome da cidade escrito em uma célula."
  },
  {
    "id": 70,
    "title": "PROCX com curingas avançados para e-mails",
    "category": "EXCEL-FÓRMULAS-PROCV & PROCX",
    "prompt": "Preciso encontrar todos os dados cadastrais mapeados de usuários que utilizam o domínio corporativo '@empresa.com'. Mostre como setar o modo de caracteres curinga no PROCX para varrer colunas de contatos textuais parciais."
  }
,

  // --- CATEGORIA: TREND PROMPTS DA SEMANA ---
  {
    "id": 71,
    "title": "Ideias e Lista para Churrasco pós-Jogo da Seleção",
    "category": "Trend Prompts da Semana",
    "prompt": "Planeje um churrasco completo para [X] pessoas comemorando a vitória do Brasil na Copa. Monte a lista de compras exata (carnes, acompanhamentos e bebidas) e sugira 3 brincadeiras rápidas de resenha para engajar a galera após o apito final."
  },
  {
    "id": 72,
    "title": "Regras Rápidas para Bolão de Amigos ou Firma",
    "category": "Trend Prompts da Semana",
    "prompt": "Crie um modelo simplificado de Bolão da Copa para rodar no WhatsApp com amigos. Defina uma pontuação clara (placar exato, acertar vencedor, acertar gols) e uma regra de desempate justa que evite brigas no grupo."
  },
  {
    "id": 73,
    "title": "Post de Humor: Minha Seleção Ganhou, mas meu Bolão Perdeu",
    "category": "Trend Prompts da Semana",
    "prompt": "Escreva um roteiro de vídeo curto (Reels/TikTok) de 15 segundos usando o humor sobre a Copa. O tema é a sensação de comemorar a vitória do Brasil, mas perceber que o gol no final destruiu o seu palpite no bolão."
  }
];

// Mapeamento automático de categorias únicas em ordem alfabética local (BR)
const rawCategories = [...new Set(prompts.map((p) => p.category))].sort((a, b) => 
  a.localeCompare(b, 'pt-BR')
);

// Exportação blindada que remove qualquer palavra "todos" para não duplicar no front
export const uniqueCategories = rawCategories.filter(
  (category) => category.toLowerCase() !== "todos"
);
{
    id: 74,
    title: "O Analista de Oportunidades de Compra",
    category: "Compras & Consumo Inteligente",
    prompt: "Atue como um analista de compras especialista em e-commerce brasileiro. Quero comprar o produto [NOME DO PRODUTO]. Faça uma varredura nos principais marketplaces confiáveis (como Amazon BR, Mercado Livre e Magalu) e me informe: 1) Onde encontrar o menor preço base atual. 2) Se o preço parece estar em uma alta ou baixa histórica nos últimos meses. 3) Avisos de reputação sobre o vendedor. No final, dê o veredito simples: 'Comprar agora', 'Esperar' ou 'Buscar alternativa'."
  },
  {
    id: 75,
    title: "O Engenheiro de Alternativas de Alto Valor",
    category: "Compras & Consumo Inteligente",
    prompt: "Quero comprar o produto [NOME DO PRODUTO], mas preciso avaliar opções mais baratas que entreguem a mesma especificação técnica central. Analise as funções principais desse item e liste até 3 produtos concorrentes ou marcas alternativas focadas em excelente custo-benefício. Mostre o que muda no hardware/construção e o percentual estimado de economia."
  },
  {
    id: 76,
    title: "O Localizador de Cupons e Benefícios Ativos",
    category: "Achados & Cupons de IA",
    prompt: "Estou prestes a fechar a compra de [NOME DO PRODUTO]. Antes de eu pagar, faça uma busca na internet por cupons de desconto ativos, links de cashback ou promoções do tipo 'leve mais por menos' para este item específico ou para as principais lojas que o vendem. Liste apenas fontes conhecidas e me diga qual é a combinação ideal para maximizar minha economia hoje."
  }

