import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { app } from './app.js';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const aulasIniciais = [
  {
    "id_modulo": 1,
    "id_aula": 1,
    "ordem": 1,
    "titulo": "Introdução ao xadrez",
    "duracao": "5 min",
    "descricao": "Nesta aula, você vai conhecer o xadrez, entender o objetivo do jogo e descobrir como começar sua jornada para se tornar um jogador melhor.",
    "objetivos": [
      "Conhecer o objetivo principal do xadrez",
      "Entender como funciona uma partida",
      "Identificar os primeiros conceitos do jogo"
    ]
  },
  {
    "id_modulo": 1,
    "id_aula": 2,
    "ordem": 2,
    "titulo": "O tabuleiro e suas casas",
    "duracao": "7 min",
    "descricao": "Aprenda a ler o campo de batalha. Vamos entender as linhas, colunas, diagonais e o sistema de coordenadas (notação) do tabuleiro.",
    "objetivos": [
      "Identificar colunas, fileiras e diagonais",
      "Compreender a orientação correta do tabuleiro",
      "Aprender a nomear cada casa de A1 a H8"
    ]
  },
  {
    "id_modulo": 1,
    "id_aula": 3,
    "ordem": 3,
    "titulo": "Organização das peças",
    "duracao": "6 min",
    "descricao": "Saiba exatamente onde posicionar o seu exército antes de iniciar o combate, evitando os erros mais comuns de iniciantes.",
    "objetivos": [
      "Aprender a posição inicial de cada peça",
      "Entender a regra da cor da casa da Dama",
      "Fixar a distribuição simétrica das forças"
    ]
  },
  {
    "id_modulo": 1,
    "id_aula": 4,
    "ordem": 4,
    "titulo": "Preparando uma partida",
    "duracao": "7 min",
    "descricao": "O protocolo inicial para começar a jogar de forma correta, incluindo quem joga primeiro e a postura no tabuleiro.",
    "objetivos": [
      "Saber qual cor inicia a partida obrigatoriamente",
      "Entender o fluxo de turnos alternados",
      "Preparar o ambiente físico ou digital para o jogo"
    ]
  },
  {
    "id_modulo": 2,
    "id_aula": 5,
    "ordem": 1,
    "titulo": "O Peão e a Captura",
    "duracao": "8 min",
    "descricao": "Entenda a peça mais numerosa do xadrez. Como ela se move para frente, mas captura nas diagonais.",
    "objetivos": [
      "Dominar o avanço duplo opcional no primeiro movimento",
      "Aprender como o peão captura as peças adversárias",
      "Compreender as limitações de bloqueio do peão"
    ]
  },
  {
    "id_modulo": 2,
    "id_aula": 6,
    "ordem": 2,
    "titulo": "Torre e Bispo: Linhas e Diagonais",
    "duracao": "9 min",
    "descricao": "Descubra o movimento retilíneo das torres e o trajeto diagonal de longo alcance dos bispos.",
    "objetivos": [
      "Aprender o movimento e captura da Torre em cruz",
      "Dominar a limitação de cores de casas dos Bispos",
      "Entender como as peças se comportam em linhas abertas"
    ]
  },
  {
    "id_modulo": 2,
    "id_aula": 7,
    "ordem": 3,
    "titulo": "A Dama e o Cavalo",
    "duracao": "10 min",
    "descricao": "Conheça o poder avassalador da peça mais forte do jogo e a movimentação em 'L' do cavalo, a única peça que pula outras.",
    "objetivos": [
      "Combinar os movimentos de Torre e Bispo ao usar a Dama",
      "Dominar o cálculo do movimento geométrico do Cavalo",
      "Aprender a usar a habilidade de salto do Cavalo"
    ]
  },
  {
    "id_modulo": 2,
    "id_aula": 8,
    "ordem": 4,
    "titulo": "O Rei e sua Importância",
    "duracao": "8 min",
    "descricao": "A peça vital que dita o fim do jogo. Aprenda seu movimento limitado a uma casa e como protegê-lo.",
    "objetivos": [
      "Dominar o movimento de passos curtos do Rei",
      "Compreender que o Rei nunca pode se mover para uma casa sob ataque",
      "Entender o papel de alvo principal do jogo"
    ]
  },
  {
    "id_modulo": 3,
    "id_aula": 9,
    "ordem": 1,
    "titulo": "O Roque (Pequeno e Grande)",
    "duracao": "8 min",
    "descricao": "Aprenda a única jogada do xadrez onde você movimenta duas peças no mesmo turno para proteger o seu Rei.",
    "objetivos": [
      "Diferenciar o Roque Pequeno (ala do rei) do Roque Grande (ala da dama)",
      "Aprender as 4 regras fundamentais que impedem o Roque",
      "Praticar a ativação da torre em conjunto com a proteção do rei"
    ]
  },
  {
    "id_modulo": 3,
    "id_aula": 10,
    "ordem": 2,
    "titulo": "Captura En Passant",
    "duracao": "7 min",
    "descricao": "A regra especial de captura mais esquecida e confusa pelos iniciantes. Entenda a captura 'ao passar'.",
    "objetivos": [
      "Identificar o posicionamento exato dos peões para validar o movimento",
      "Compreender que o direito de captura expira no lance imediatamente seguinte",
      "Visualizar a mecânica física da remoção da peça"
    ]
  },
  {
    "id_modulo": 3,
    "id_aula": 11,
    "ordem": 3,
    "titulo": "Promoção do Peão",
    "duracao": "7 min",
    "descricao": "Descubra a recompensa épica do peão que consegue atravessar todo o tabuleiro e chegar à última fileira.",
    "objetivos": [
      "Saber para quais peças um peão pode ser promovido",
      "Entender que você pode ter mais de uma Dama no tabuleiro",
      "Aplicar a promoção como um objetivo estratégico de final de jogo"
    ]
  },
  {
    "id_modulo": 3,
    "id_aula": 12,
    "ordem": 4,
    "titulo": "O Conceito de Xeque",
    "duracao": "8 min",
    "descricao": "O Rei está em perigo! Saiba o que significa o xeque e as três únicas maneiras possíveis de escapar dele.",
    "objetivos": [
      "Reconhecer visualmente quando um Rei está sob ataque",
      "Decorar as três respostas defensivas: Mover, Bloquear ou Capturar (Sinal CPR)",
      "Evitar lances ilegais que mantenham o Rei em xeque"
    ]
  },
  {
    "id_modulo": 4,
    "id_aula": 13,
    "ordem": 1,
    "titulo": "Como Aplicar o Xeque-Mate",
    "duracao": "8 min",
    "descricao": "A vitória definitiva. Aprenda a encurralar o Rei inimigo sem dar rotas de fuga ou defesas possíveis.",
    "objetivos": [
      "Diferenciar um simples xeque do xeque-mate final",
      "Coordenar peças de ataque para cercar o monarca adversário",
      "Finalizar partidas de forma precisa e sem erros"
    ]
  },
  {
    "id_modulo": 4,
    "id_aula": 14,
    "ordem": 2,
    "titulo": "O Mate do Pastor e Como Evitar",
    "duracao": "8 min",
    "descricao": "O truque de 4 lances mais famoso do xadrez. Aprenda como aplicá-lo em iniciantes e como se defender com segurança caso tentem contra você.",
    "objetivos": [
      "Mapear a rota de ataque da Dama e do Bispo na casa vulnerável de f7",
      "Aprender os lances exatos de defesa para punir a saída precoce da Dama",
      "Desenvolver conceitos de segurança na abertura"
    ]
  },
  {
    "id_modulo": 4,
    "id_aula": 15,
    "ordem": 3,
    "titulo": "Empate por Afogamento",
    "duracao": "7 min",
    "descricao": "Cuidado para não entregar a vitória! Entenda o cenário onde o adversário não tem lances legais, mas não está em xeque.",
    "objetivos": [
      "Definir tecnicamente o conceito de rei afogado",
      "Aprender a dar espaço ao rei inimigo quando estiver com vantagem esmagadora",
      "Utilizar o afogamento como recurso de salvação em posições perdidas"
    ]
  },
  {
    "id_modulo": 4,
    "id_aula": 16,
    "ordem": 4,
    "titulo": "Outros Tipos de Empate",
    "duracao": "7 min",
    "descricao": "Nem toda partida termina com um vencedor. Descubra as regras de tripla repetição, insuficiência de material e a regra dos 50 lances.",
    "objetivos": [
      "Identificar materiais insuficientes para mate (ex: Rei e Bispo vs Rei)",
      "Entender o xeque perpétuo e a repetição de posições",
      "Reconhecer o momento de propor ou aceitar um empate amigável"
    ]
  },
  {
    "id_modulo": 5,
    "id_aula": 17,
    "ordem": 1,
    "titulo": "Valor Relativo das Peças",
    "duracao": "7 min",
    "descricao": "Aprenda o sistema de pontos matemáticos das peças para calcular trocas vantajosas durante a partida.",
    "objetivos": [
      "Memorizar a tabela de pontos clássica (Peão=1, Cavalo/Bispo=3, Torre=5, Dama=9)",
      "Avaliar se uma troca material é lucrativa ou prejudicial",
      "Compreender a diferença prática entre peças menores e maiores"
    ]
  },
  {
    "id_modulo": 5,
    "id_aula": 18,
    "ordem": 2,
    "titulo": "Dominando o Centro",
    "duracao": "8 min",
    "descricao": "A regra de ouro da estratégia. Quem controla as quatro casas centrais controla o ritmo espacial do jogo.",
    "objetivos": [
      "Mapear as casas centrais críticas (e4, d4, e5, d5)",
      "Posicionar peões e peças para vigiar o centro na abertura",
      "Restringir a mobilidade do oponente ocupando o espaço central"
    ]
  },
  {
    "id_modulo": 5,
    "id_aula": 19,
    "ordem": 3,
    "titulo": "Segurança do Rei no Início",
    "duracao": "7 min",
    "descricao": "Por que deixar o Rei no centro é um convite ao desastre. Estratégias para esconder o seu líder rapidamente.",
    "objetivos": [
      "Desenvolver peças com foco em liberar o Roque nos primeiros 10 lances",
      "Manter a parede de peões protetores à frente do rei intacta",
      "Identificar ameaças centrais antes de abrir linhas abertas"
    ]
  },
  {
    "id_modulo": 5,
    "id_aula": 20,
    "ordem": 4,
    "titulo": "Análise de uma Partida Completa",
    "duracao": "8 min",
    "descricao": "Unificando todos os conceitos aprendidos até aqui. Uma revisão guiada lance a lance de um confronto real.",
    "objetivos": [
      "Observar a aplicação prática dos conceitos de abertura, meio-jogo e final",
      "Aprender a criticar decisões táticas em partidas reais",
      "Desenvolver mentalidade analítica de enxadrista"
    ]
  },
  {
    "id_modulo": 6,
    "id_aula": 21,
    "ordem": 1,
    "titulo": "O que é Tática no Xadrez",
    "duracao": "10 min",
    "descricao": "O poder dos golpes forçados a curto prazo. Aprenda como a tática decide a maioria esmagadora das partidas casuais.",
    "objetivos": [
      "Diferenciar uma jogada tática pura de lances posicionais",
      "Enxergar combinações de lances forçados (xeques, capturas, ameaças)",
"Treinar o cérebro para buscar padrões geométricos de ganho material"
]
},
{
"id_modulo": 6,
"id_aula": 22,
"ordem": 2,
"titulo": "Diferença entre Tática e Estratégia",
"duracao": "10 min",
"descricao": "Tática é saber o que fazer quando há algo para fazer. Estratégia é saber o que fazer quando não há nada para fazer. Entenda o casamento desses dois pilares.",
"objetivos": [
"Planejar metas de longo prazo (estratégia) usando ferramentas de curto prazo (tática)",
"Reconhecer o momento correto de mudar a postura de jogo",
"Equilibrar planos posicionais com cálculo rigoroso"
]
},
{
"id_modulo": 6,
"id_aula": 23,
"ordem": 3,
"titulo": "Peças Indefesas: O Alvo Principal",
"duracao": "10 min",
"descricao": "Peças soltas e sem proteção são a raiz de todas as tragédias táticas. Aprenda a caçar fraquezas no exército rival.",
"objetivos": [
"Varrer visualmente o tabuleiro procurando peças sem apoio protetor",
"Evitar deixar suas próprias peças vulneráveis no meio-jogo",
"Criar ameaças baseadas no desbalanço defensivo"
]
},
{
"id_modulo": 7,
"id_aula": 24,
"ordem": 1,
"titulo": "O Garfo de Cavalo",
"duracao": "12 min",
"descricao": "O golpe tático duplo mais letal e imprevisível. Ataque duas peças valiosas simultaneamente usando a geometria do cavalo.",
"objetivos": [
"Visualizar os saltos de cavalo em garfos clássicos de Rei e Dama",
"Aproveitar a casa fraca de c7 ou c2 para dar garfos com ganho de torre",
"Aprender a prever o ataque saltado antes que ele aconteça"
]
},
{
"id_modulo": 7,
"id_aula": 25,
"ordem": 2,
"titulo": "Ataques Duplos de Dama e Bispo",
"duracao": "11 min",
"descricao": "Como usar o longo alcance das peças lineares para atingir dois alvos distantes ao mesmo tempo.",
"objetivos": [
"Aprender o poder centralizador da Dama aplicando duplo raio de ação",
"Utilizar os bispos em diagonais abertas para mirar em peças soltas",
"Montar baterias de ataque coordenado"
]
},
{
"id_modulo": 7,
"id_aula": 26,
"ordem": 3,
"titulo": "Garfos de Peão no Meio-Jogo",
"duracao": "12 min",
"descricao": "Barato e mortal. Descubra como usar um simples peão para atacar duas peças de maior valor e obter vantagem material garantida.",
"objetivos": [
"Avançar peões em formato de cunha para bifurcar peças menores",
"Atrair cavalos e bispos adversários para casas propícias ao garfo",
"Utilizar o peão estrutural como arma ofensiva agressiva"
]
},
{
"id_modulo": 8,
"id_aula": 27,
"ordem": 1,
"titulo": "Cravada Absoluta vs Relativa",
"duracao": "10 min",
"descricao": "Paralise as forças inimigas. Entenda a diferença de quando uma peça não pode se mover por lei ou por valor financeiro.",
"objetivos": [
"Definir a cravada absoluta (peça cobrindo o Rei, movimento ilegal)",
"Definir a cravada relativa (peça cobrindo a Dama ou Torre, movimento desaconselhável)",
"Utilizar torres e bispos para congelar a movimentação adversária"
]
},
{
"id_modulo": 8,
"id_aula": 28,
"ordem": 2,
"titulo": "Como Explorar uma Peça Cravada",
"duracao": "10 min",
"descricao": "A regra de ouro da cravada: ataque a peça paralisada repetidamente com seus peões ou unidades de menor valor.",
"objetivos": [
"Adicionar pressão contínua em cima do defensor imóvel",
"Coordenar peões para morder a peça imobilizada",
"Converter a imobilização inimiga em ganho material real"
]
},
{
"id_modulo": 8,
"id_aula": 29,
"ordem": 3,
"titulo": "O Ataque em Raio-X",
"duracao": "10 min",
"descricao": "Atravesse as defesas visualmente. Como golpear ou defender casas cruciais olhando através das peças que estão no caminho.",
"objetivos": [
"Identificar alvos ocultos por trás de barreiras de peças interpostas",
"Montar defesas indiretas usando o alinhamento de torres e damas",
"Executar táticas de perfuração linear"
]
},
{
"id_modulo": 9,
"id_aula": 30,
"ordem": 1,
"titulo": "Mecânica do Xeque Descoberto",
"duracao": "10 min",
"descricao": "Mova uma peça com ameaça e, de brinde, abra caminho para outra peça disparar um xeque devastador pelas costas.",
"objetivos": [
"Compreender o conceito de gatilho por trás do ataque descoberto",
"Utilizar a peça que sai do caminho para capturar algo sem direito a defesa",
"Criar armadilhas em colunas com o Rei adversário alinhado"
]
},
{
"id_modulo": 9,
"id_aula": 31,
"ordem": 2,
"titulo": "O Xeque Duplo Esmagador",
"duracao": "10 min",
"descricao": "O golpe tático mais destrutivo do jogo. Quando dois xeques ocorrem ao mesmo tempo, a única defesa legal é mover o Rei.",
"objetivos": [
"Aprender que o xeque duplo anula bloqueios e capturas defensivas",
"Forçar o Rei oponente a se mover para cantos desfavoráveis do tabuleiro",
"Conectar ataques coordenados de Cavalo e Bispo/Torre"
]
},
{
"id_modulo": 9,
"id_aula": 32,
"ordem": 3,
"titulo": "Combinações com Descobertos",
"duracao": "10 min",
"descricao": "Exercícios práticos interativos combinando ataques ocultos com xeques e capturas em sequência.",
"objetivos": [
"Desenvolver visão combinatória de alta complexidade",
"Calcular sequências forçadas de ganho de peças maiores",
"Identificar setups táticos preventivos"
]
},
{
"id_modulo": 10,
"id_aula": 33,
"ordem": 1,
"titulo": "Forçando o Desvio do Defensor",
"duracao": "11 min",
"descricao": "Se uma peça protege uma casa ou item importante, aprenda a subornar ou ameaçar essa peça para que ela saia do posto de guarda.",
"objetivos": [
"Identificar peças sobrecarregadas com múltiplas tarefas defensivas",
"Sacrificar material menor para afastar defensores vitais",
"Desmantelar bloqueios protetores estruturais"
]
},
{
"id_modulo": 10,
"id_aula": 34,
"ordem": 2,
"titulo": "Atração do Rei para Casas Fatais",
"duracao": "11 min",
"descricao": "O oposto do desvio. Use iscas irresistíveis para arrastar o Rei oponente de uma zona segura direto para uma rede de mate.",
"objetivos": [
"Visualizar sacrifícios forçados de peças pesadas para atração real",
"Expor a monarquia inimiga no meio de linhas abertas",
"Calcular caminhos sem retorno para o monarca sob assédio"
]
},
{
"id_modulo": 10,
"id_aula": 35,
"ordem": 3,
"titulo": "Sacrifícios de Atração",
"duracao": "10 min",
"descricao": "Aprenda a beleza estética do xadrez tático sacrificando torres ou damas com o único intuito de atrair defesas para armadilhas geométricas.",
"objetivos": [
"Superar o medo psicológico de entregar material valioso por um bem maior",
"Validar táticas de quebra absoluta com cálculos matemáticos",
"Executar finais estéticos emblemáticos"
]
},
{
"id_modulo": 11,
"id_aula": 36,
"ordem": 1,
"titulo": "Eliminando o Defensor Chave",
"duracao": "10 min",
"descricao": "Destrua o segurança! Se uma casa de mate ou peça valiosa está guarnecida por um bispo ou cavalo, mate o defensor primeiro.",
"objetivos": [
"Localizar qual peça inimiga sustenta toda a arquitetura protetora deles",
"Trocar peças deliberadamente para remover a resistência",
"Abrir caminhos para invasão limpa pós-eliminação"
]
},
{
"id_modulo": 11,
"id_aula": 37,
"ordem": 2,
"titulo": "Táticas de Bloqueio e Interpolação",
"duracao": "10 min",
"descricao": "Coloque um obstáculo na linha de visão! Interrompa caminhos de proteção enfiando uma peça no meio do fluxo geométrico oponente.",
"objetivos": [
"Cortar conexões de apoio entre Dama e Torres adversárias",
"Utilizar peões passados para interromper raios-X",
"Dominar o tempo intermediário em posições emboladas"
]
},
{
"id_modulo": 11,
"id_aula": 38,
"ordem": 3,
"titulo": "Aproveitando Sobrecargas",
"duracao": "10 min",
"descricao": "Quando uma única peça inimiga precisa defender dois lugares ao mesmo tempo, ela está sobrecarregada. Ataque um lado para vencer no outro.",
"objetivos": [
"Detectar cansaço tático na defesa do rival",
"Criar dilemas insolúveis de dupla proteção para o oponente",
"Punir o acúmulo excessivo de obrigações de uma única unidade"
]
},
{
"id_modulo": 12,
"id_aula": 39,
"ordem": 1,
"titulo": "Como Visualizar Lances Forçados",
"duracao": "11 min",
"descricao": "A técnica para ler o futuro. Como olhar para o tabuleiro mentalmente priorizando sempre Xeques, Capturas e Ameaças (Método XCA).",
"objetivos": [
"Criar filtros mentais eficientes para diminuir o cansaço do cálculo",
"Organizar a ordem correta de lances candidatos",
"Aumentar a profundidade e nitidez da visão mental abstrata"
]
},
{
"id_modulo": 12,
"id_aula": 40,
"ordem": 2,
"titulo": "Árvore de Análise de Variantes",
"duracao": "11 min",
"descricao": "Aprenda a estruturar o pensamento ramificado igual aos grandes mestres e computadores. 'Se eu for ali, ele vai acolá...'.",
"objetivos": [
"Mapear ramificações complexas sem se perder nas variações",
"Identificar o lance de resposta crítica do adversário",
"Cortar caminhos desnecessários da árvore mental de opções"
]
},
{
"id_modulo": 12,
"id_aula": 41,
"ordem": 3,
"titulo": "Evitando Erros de Cálculo",
"duracao": "11 min",
"descricao": "A famosa 'pendurada'. Dicas psicológicas e táticas para parar de perder peças por pura falta de atenção no último segundo.",
"objetivos": [
"Aplicar o 'check de segurança' de dois segundos antes de mover a peça",
"Controlar a ansiedade ao achar que encontrou uma jogada brilhante",
"Identificar recursos ocultos de contra-ataque do oponente"
]
},
{
"id_modulo": 13,
"id_aula": 42,
"ordem": 1,
"titulo": "Mate do Corredor",
"duracao": "12 min",
"descricao": "O erro mais clássico de finais. Punir o Rei inimigo preso atrás de sua própria parede de peões na oitava fileira.",
"objetivos": [
"Identificar a falta de um 'respiro' (luco) na estrutura defensiva de peões",
"Infiltrar torres e damas na última fileira desguarnecida",
"Defender sua própria retaguarda criando saídas de emergência"
]
},
{
"id_modulo": 13,
"id_aula": 43,
"ordem": 2,
"titulo": "Mate de Anastácia e Árabe",
"duracao": "11 min",
"descricao": "Conheça padrões históricos de mate que coordenam Cavalo e Torre para prender o Rei nos cantos do tabuleiro.",
"objetivos": [
"Aprender a geometria de bloqueio de fuga do Cavalo no Mate de Anastácia",
"Utilizar o Cavalo protegendo a Torre no canto do tabuleiro no Mate Árabe",
"Fixar padrões geométricos recorrentes de xeque-mate"
]
},
{
"id_modulo": 13,
"id_aula": 44,
"ordem": 3,
"titulo": "Mate Sufocado",
"duracao": "12 min",
"descricao": "A humilhação máxima enxadrística: quando o Rei inimigo morre asfixiado no canto rodeado por suas próprias peças, cortesia de um pulo de Cavalo.",
"objetivos": [
"Montar o lendário sacrifício de Dama que força o sufocamento do Rei",
"Reconhecer setups de sobrecarga ao redor do monarca",
"Executar o mate de cavalo solo mais icônico da história"
]
},
{
"id_modulo": 14,
"id_aula": 45,
"ordem": 1,
"titulo": "Elements de uma Posição",
"duracao": "13 min",
"descricao": "Iniciando os conceitos estratégicos estratégicos de longo prazo. Como julgar se sua posição é boa ou ruim de forma científica.",
"objetivos": [
"Avaliar a segurança dos reis, estrutura de peões e atividade das peças",
"Ponderar o equilíbrio material contra linhas espaciais dinâmicas",
"Montar diagnósticos precisos antes de elaborar planos de jogo"
]
},
{
"id_modulo": 14,
"id_aula": 46,
"ordem": 2,
"titulo": "Vantagens Estáticas vs Dinâmicas",
"duracao": "13 min",
"descricao": "Entenda a diferença entre vantagens permanentes (estrutura de peões destruída) e vantagens temporárias (iniciativa de ataque rápido).",
"objetivos": [
"Aprender a converter vantagens dinâmicas rápidas em ganhos estáticos sólidos",
"Acumular pequenas debilidades na posição do oponente a longo prazo",
"Saber quando acelerar ou desacelerar o ritmo da partida"
]
},
{
"id_modulo": 14,
"id_aula": 47,
"ordem": 3,
"titulo": "Como Criar um Plano Base",
"duracao": "14 min",
"descricao": "Pare de jogar lances aleatórios sem sentido! Aprenda a formular ideias estratégicas de médio prazo baseando-se nas fraquezas locais.",
"objetivos": [
"Encontrar o foco correto de ataque (Ala do Rei, Ala da Dama ou Centro)",
"Desenhar um trajeto de lances coordenados com propósitos unificados",
"Adaptar planos dinamicamente conforme as defesas do oponente"
]
},
{
"id_modulo": 15,
"id_aula": 48,
"ordem": 1,
"titulo": "Peões Isolados e Dobrados",
"duracao": "14 min",
"descricao": "A anatomia da fragilidade posicional. Saiba como peões sem vizinhos ou empilhados na mesma coluna se tornam alvos fáceis.",
"objetivos": [
"Explorar a casa fraca à frente de um peão isolado",
"Forçar o oponente a dobrar peões para arruinar o final de jogo dele",
"Compensar fraquezas estruturais com atividade agressiva de peças"
]
},
{
"id_modulo": 15,
"id_aula": 49,
"ordem": 2,
"titulo": "Peões Atrasados e Cadeias",
"duracao": "14 min",
"descricao": "Entenda a dinâmica de cadeias de peões sólidas que fecham o tabuleiro e o drama do peão atrasado que não consegue avançar.",
"objetivos": [
"Atacar a base ou a ponta de uma cadeia de peões de forma cirúrgica",
"Fixar e pressionar o peão atrasado em uma coluna semiaberta",
"Criar barreiras espaciais intransponíveis com sua estrutura"
]
},
{
"id_modulo": 15,
"id_aula": 50,
"ordem": 3,
"titulo": "Maiorias de Peões na Ala",
"duracao": "14 min",
"descricao": "Como usar uma vantagem numérica de peões em um lado do tabuleiro para criar um peão passado imparável rumo à promoção.",
"objetivos": [
"Aplicar regras de avanços corretas para criar peões passados",
"Utilizar maiorias no flanco oposto para desviar o rei inimigo",
"Dominar conceitos de conversão de finais geométricos"
]
},
{
"id_modulo": 16,
"id_aula": 51,
"ordem": 1,
"titulo": "Luta por Colunas Abertas",
"duracao": "12 min",
"descricao": "Autoestradas para as torres. Entenda o valor de desimpedir colunas de peões para injetar suas peças pesadas no território inimigo.",
"objetivos": [
"Identificar e abrir colunas estratégicas trocando peões estratégicos",
"Garantir o controle da coluna disputando o espaço com peças pesadas",
"Impedir a contestação rival usando o posicionamento protetor"
]
},
{
"id_modulo": 16,
"id_aula": 52,
"ordem": 2,
"titulo": "Invasão na 7ª e 8ª Fileiras",
"duracao": "13 min",
"descricao": "Torres na sétima fileira são feras famintas. Aprenda a devastar a base de peões e prender o monarca inimigo por meio da infiltração total.",
"objetivos": [
"Dobrar torres na sétima fileira criando pressão máxima absoluta",
"Executar varreduras horizontais automáticas de peões indefesos",
"Coordenar redes de mate de corredor combinando infiltrações"
]
},
{
"id_modulo": 16,
"id_aula": 53,
"ordem": 3,
"titulo": "Postos Avançados para Torres",
"duracao": "13 min",
"descricao": "Como ancorar suas torres de forma protegida bem no meio do tabuleiro inimigo, gerando paralisação posicional.",
"objetivos": [
"Encontrar casas protegidas por peões próprios que não podem ser atacadas",
"Estabelecer bases avançadas estáveis para projetar forças",
"Bloquear contra-ataques centrais dominando o meio de campo"
]
},
{
"id_modulo": 17,
"id_aula": 54,
"ordem": 1,
"titulo": "Identificando Complexos de Casas Fracas",
"duracao": "13 min",
"descricao": "Buracos nas defesas. Entenda como a perda de peões estratégicos deixa conjuntos inteiros de casas pretas ou brancas vulneráveis.",
"objetivos": [
"Identificar falhas estruturais cromáticas nas defesas inimigas",
"Aproveitar a ausência de defensores naturais dessas cores",
"Direcionar o ataque para os pontos vazios da blindagem adversária"
]
},
{
"id_modulo": 17,
"id_aula": 55,
"ordem": 2,
"titulo": "Instalação de Peças em Postos Fortes",
"duracao": "13 min",
"descricao": "Coloque uma peça em uma casa fraca do oponente e assista ela controlar o tabuleiro sem sofrer ameaças de expulsão.",
"objetivos": [
"Instalar cavalos perigosos em postos fortificados na quinta ou sexta fileira",
"Gerar paralisia posicional nas peças vizinhas do oponente",
"Aprender a defender esse posto avançado com garras estruturais"
]
},
{
"id_modulo": 17,
"id_aula": 56,
"ordem": 3,
"titulo": "Provocando Fraquezas no Oponente",
"duracao": "14 min",
"descricao": "O adversário joga bem? Force-o a cometer erros! Técnicas para induzir avanços de peão desnecessários que criam falhas internas.",
"objetivos": [
"Aplicar pressões psicológicas e posicionais indiretas",
"Criar falsas ameaças que induzam o pânico estrutural do oponente",
"Aproveitar os novos buracos abertos pós-avanços desesperados"
]
},
{
"id_modulo": 18,
"id_aula": 57,
"ordem": 1,
"titulo": "A Força Longínqua do Par de Bispos",
"duracao": "13 min",
"descricao": "Por que reter os dois bispos no tabuleiro é considerado uma arma estratégica de Elite em posições abertas.",
"objetivos": [
"Coordenar raios de ação paralelos cortando o tabuleiro de ponta a ponta",
"Dominar ambas as cores de casas anulando estratégias focadas",
"Utilizar o par de bispos para fatiar o espaço do Rei adversário"
]
},
{
"id_modulo": 18,
"id_aula": 58,
"ordem": 2,
"titulo": "Bispo Mau vs Bispo Bom",
"duracao": "13 min",
"descricao": "Aprenda o conceito de Bispo Mau: aquele preso por seus próprios peões nas mesmas cores de casas, agindo como um peão gordo inútil.",
"objetivos": [
"Reconhecer o alinhamento de peões prejudicial ao seu Bispo",
"Trocar seu bispo problemático por uma peça ativa inimiga",
"Fixar os peões adversários nas cores corretas para inutilizar as defesas deles"
]
},
{
"id_modulo": 18,
"id_aula": 59,
"ordem": 3,
"titulo": "Abrindo a Posição para os Bispos",
"duracao": "14 min",
"descricao": "Bispos amam vento e espaço livre. Como forçar liquidações centrais de peões para ativar a potência máxima de suas diagonais.",
"objetivos": [
"Promover quebras de peões centrais libertadoras",
"Limpar congestionamentos físicos de peças",
"Transformar bispos tímidos em franco-atiradores letais"
]
},
{
"id_modulo": 19,
"id_aula": 60,
"ordem": 1,
"titulo": "Rotas de Manobra de Longo Prazo",
"duracao": "14 min",
"descricao": "Cavalos andam devagar. Aprenda a desenhar rotas geométricas de 3 a 4 lances para realocar sua peça em posições ideais.",
"objetivos": [
"Mapear circuitos eficientes de realocação de peças menores",
"Aprender a recuar temporariamente para avançar de forma mais forte depois",
"Manter a calma posicional durante transições lentas"
]
},
{
"id_modulo": 19,
"id_aula": 61,
"ordem": 2,
"titulo": "Cavalos em Posições Fechadas",
"duracao": "13 min",
"descricao": "Quando o tabuleiro vira uma parede de peões congestionada, os bispos choram e os cavalos brilham saltando as trincheiras.",
"objetivos": [
"Manter o tabuleiro fechado estrategicamente ao jogar com Cavalos",
"Explorar a flexibilidade dos saltos em labirintos de peões",
"Sufocar bispos oponentes bloqueados por barreiras fixas"
]
},
{
"id_modulo": 19,
"id_aula": 62,
"ordem": 3,
"titulo": "Estratégia Avançada de Cavalos",
"duracao": "15 min",
"descricao": "Dominando nuances complexas de posicionamento e restrição espacial utilizando os saltos simétricos das suas peças leves.",
"objetivos": [
"Coordenar pares de cavalos em formatos defensivos entrelaçados",
"Controlar de perto o perímetro e as rotas de fuga inimigas",
"Criar táticas de asfixia fina de espaço em finais equilibrados"
]
}
]

const usuariosIniciais = [
  {
    "id_usuario": 1,
    "nome_usuario": "bia_chessmaster",
    "perfil": "adm",
    "email": "beatriz.costa@exemplo.com",
    "nivel_xadrez": "Intermediário",
    "sobre_mim": "Pratico xadrez há um ano. Estou focada em estudar estruturas de peões e melhorar meu cálculo de variantes em finais de partidas.",
    "senha": "$2b$10$k8F29sL0xPqWm9Nv1RzT4uOqK8mP2vL4xN7rQ9wE2uY1zT0sR5vX8",
    "cursos_inscritos": [
      1,
      2
    ],
    "aulas_concluidas": [
      101,
      102,
      103,
      104,
      105,
      106,
      107,
      108
    ]
  },
  {
    "id_usuario": 2,
    "nome_usuario": "rafa_grandmaster",
    "perfil": "usuario",
    "email": "rafael.almeida@exemplo.com",
    "nivel_xadrez": "Avançado",
    "sobre_mim": "Jogador de torneios locais. Busco aprimorar conceitos de profilaxia e refinamento posicional avançado contra defesas semi-abertas.",
    "senha": "$2b$10$e7X9qL2vZ1wM5nP0rT8u3O1kR4vY7xN9rQ2wE5uI0zO3sP6vL8xY1",
    "cursos_inscritos": [
      2,
      3,
      4
    ],
    "aulas_concluidas": [
      201,
      202,
      203,
      204,
      205,
      206,
      207,
      208,
      209,
      210,
      211,
      212,
      213,
      214,
      215
    ]
  },
  {
    "id_usuario": 3,
    "nome_usuario": "lucas_xadrez",
    "email": "lucas.silva@exemplo.com",
    "senha": "$2b$10$Q8aTVyIu/u9mxKstQbJcQuLwS7zSI9qI4Bi0GyxzKUtekiDSMVKl6",
    "perfil": "usuario",
    "nivel_xadrez": "Iniciante",
    "sobre_mim": "",
    "cursos_inscritos": [],
    "aulas_concluidas": []
  }
];

const modulosIniciais = [
  {
    "id_curso": 1,
    "id_modulo": 1,
    "ordem": "01",
    "titulo": "Conhecendo o xadrez",
    "aulas_qtd": 4,
    "duracao": "25 minutos",
    "id_aula": [1, 2, 3, 4]
  },
  {
    "id_curso": 1,
    "id_modulo": 2,
    "ordem": "02",
    "titulo": "O Movimento das Peças",
    "aulas_qtd": 4,
    "duracao": "35 minutos",
    "id_aula": [5, 6, 7, 8]
  },
  {
    "id_curso": 1,
    "id_modulo": 3,
    "ordem": "03",
    "titulo": "Regras Especiais e Fundamentais",
    "aulas_qtd": 4,
    "duracao": "30 minutos",
    "id_aula": [9, 10, 11, 12]
  },
  {
    "id_curso": 1,
    "id_modulo": 4,
    "ordem": "04",
    "titulo": "Finalizações de Partida",
    "aulas_qtd": 4,
    "duracao": "30 minutos",
    "id_aula": [13, 14, 15, 16]
  },
  {
    "id_curso": 1,
    "id_modulo": 5,
    "ordem": "05",
    "titulo": "Primeiras Estratégias",
    "aulas_qtd": 4,
    "duracao": "30 minutos",
    "id_aula": [17, 18, 19, 20]
  },
  {
    "id_curso": 2,
    "id_modulo": 6,
    "ordem": "01",
    "titulo": "Introdução ao Olhar Tático",
    "aulas_qtd": 3,
    "duracao": "30 minutos",
    "id_aula": [21, 22, 23]
  },
  {
    "id_curso": 2,
    "id_modulo": 7,
    "ordem": "02",
    "titulo": "Ataques Duplos e Garfos",
    "aulas_qtd": 3,
    "duracao": "35 minutos",
    "id_aula": [24, 25, 26]
  },
  {
    "id_curso": 2,
    "id_modulo": 8,
    "ordem": "03",
    "titulo": "Cravadas e Raios-X",
    "aulas_qtd": 3,
    "duracao": "30 minutos",
    "id_aula": [27, 28, 29]
  },
  {
    "id_curso": 2,
    "id_modulo": 9,
    "ordem": "04",
    "titulo": "Ataques Descobertos",
    "aulas_qtd": 3,
    "duracao": "30 minutos",
    "id_aula": [30, 31, 32]
  },
  {
    "id_curso": 2,
    "id_modulo": 10,
    "ordem": "05",
    "titulo": "Desvios e Atrações",
    "aulas_qtd": 3,
    "duracao": "32 minutos",
    "id_aula": [33, 34, 35]
  },
  {
    "id_curso": 2,
    "id_modulo": 11,
    "ordem": "06",
    "titulo": "Destruição de Defesa e Bloqueio",
    "aulas_qtd": 3,
    "duracao": "30 minutos",
    "id_aula": [36, 37, 38]
  },
  {
    "id_curso": 2,
    "id_modulo": 12,
    "ordem": "07",
    "titulo": "Cálculo de Variantes",
    "aulas_qtd": 3,
    "duracao": "33 minutos",
    "id_aula": [39, 40, 41]
  },
  {
    "id_curso": 2,
    "id_modulo": 13,
    "ordem": "08",
    "titulo": "Padrões de Mate Comuns",
    "aulas_qtd": 3,
    "duracao": "35 minutos",
    "id_aula": [42, 43, 44]
  },
  {
    "id_curso": 3,
    "id_modulo": 14,
    "ordem": "01",
    "titulo": "Avaliação Posicional",
    "aulas_qtd": 3,
    "duracao": "40 minutos",
    "id_aula": [45, 46, 47]
  },
  {
    "id_curso": 3,
    "id_modulo": 15,
    "ordem": "02",
    "titulo": "Estruturas de Peões",
    "aulas_qtd": 3,
    "duracao": "42 minutos",
    "id_aula": [48, 49, 50]
  },
  {
    "id_curso": 3,
    "id_modulo": 16,
    "ordem": "03",
    "titulo": "Controle de Linhas Abertas",
    "aulas_qtd": 3,
    "duracao": "38 minutos",
    "id_aula": [51, 52, 53]
  },
  {
    "id_curso": 3,
    "id_modulo": 17,
    "ordem": "04",
    "titulo": "Casas Fracas e Fortes",
    "aulas_qtd": 3,
    "duracao": "40 minutos",
    "id_aula": [54, 55, 56]
  },
  {
    "id_curso": 3,
    "id_modulo": 18,
    "ordem": "05",
    "titulo": "O Par de Bispos",
    "aulas_qtd": 3,
    "duracao": "40 minutos",
    "id_aula": [57, 58, 59]
  },
  {
    "id_curso": 3,
    "id_modulo": 19,
    "ordem": "06",
    "titulo": "Manobras de Cavalos",
    "aulas_qtd": 3,
    "duracao": "41 minutos",
    "id_aula": [60, 61, 62]
  },
  {
    "id_curso": 3,
    "id_modulo": 20,
    "ordem": "07",
    "titulo": "Vantagem de Espaço",
    "aulas_qtd": 3,
    "duracao": "40 minutos",
    "id_aula": [63, 64, 65]
  },
  {
    "id_curso": 3,
    "id_modulo": 21,
    "ordem": "08",
    "titulo": "Profilaxia",
    "aulas_qtd": 3,
    "duracao": "42 minutos",
    "id_aula": [66, 67, 68]
  },
  {
    "id_curso": 3,
    "id_modulo": 22,
    "ordem": "09",
    "titulo": "A Luta Central",
    "aulas_qtd": 3,
    "duracao": "40 minutos",
    "id_aula": [69, 70, 71]
  },
  {
    "id_curso": 3,
    "id_modulo": 23,
    "ordem": "10",
    "titulo": "Transição para Finais Posicionais",
    "aulas_qtd": 3,
    "duracao": "42 minutos",
    "id_aula": [72, 73, 74]
  },
  {
    "id_curso": 4,
    "id_modulo": 24,
    "ordem": "01",
    "titulo": "Princípios Fundamentais da Abertura",
    "aulas_qtd": 3,
    "duracao": "30 minutos",
    "id_aula": [75, 76, 77]
  },
  {
    "id_curso": 4,
    "id_modulo": 25,
    "ordem": "02",
    "titulo": "A Abertura Italiana",
    "aulas_qtd": 3,
    "duracao": "33 minutos",
    "id_aula": [78, 79, 80]
  },
  {
    "id_curso": 4,
    "id_modulo": 26,
    "ordem": "03",
    "titulo": "A Abertura Ruy Lopez (Espanhola)",
    "aulas_qtd": 3,
    "duracao": "35 minutos",
    "id_aula": [81, 82, 83]
  },
  {
    "id_curso": 4,
    "id_modulo": 27,
    "ordem": "04",
    "titulo": "O Gambito da Dama",
    "aulas_qtd": 3,
    "duracao": "32 minutos",
    "id_aula": [84, 85, 86]
  },
  {
    "id_curso": 4,
    "id_modulo": 28,
    "ordem": "05",
    "titulo": "Defesa Siciliana: Visão Geral",
    "aulas_qtd": 3,
    "duracao": "35 minutos",
    "id_aula": [87, 88, 89]
  },
  {
    "id_curso": 4,
    "id_modulo": 29,
    "ordem": "06",
    "titulo": "Defesas Semi-Abertas (Francesa e Caro-Kann)",
    "aulas_qtd": 3,
    "duracao": "33 minutos",
    "id_aula": [90, 91, 92]
  },
  {
    "id_curso": 4,
    "id_modulo": 30,
    "ordem": "07",
    "titulo": "Construindo seu Repertório",
    "aulas_qtd": 3,
    "duracao": "32 minutos",
    "id_aula": [93, 94, 95]
  }
]

const cursosIniciais = [
  {
    "id_curso": 1,
    "tag": "Iniciante",
    "titulo": "Fundamentos do Xadrez",
    "descricao": "Aprenda as regras, os movimentos das peças e conceitos básicos para começar a jogar com confiança.",
    "modulos": 5,
    "duracao": "2h 30min",
    "aulas": 20,
    "descricao_longa": [
      "Este curso foi desenvolvido para quem deseja aprender xadrez desde o início. Você conhecerá o tabuleiro, os movimentos das peças, as regras fundamentais e os primeiros princípios para desenvolver suas partidas.Ao longo das aulas, você aprenderá a analisar jogadas, proteger suas peças e compreender melhor as possibilidades de cada movimento.",
      "Ao longo das aulas, você aprenderá a analisar jogadas, proteger suas peças e compreender melhor as possibilidades de cada movimento."
    ],
    "resumo_conteudo": [
      "Conhecer o tabuleiro e as peças",
      "Entender os movimentos de cada peça",
      "Aprender as regras fundamentais do jogo",
      "Compreender xeque, xeque-mate e empate",
      "Desenvolver suas primeiras estratégias"
    ],
    "imagem": "/imagens/cursos/fundamentos.jpg"
  },
  {
    "id_curso": 2,
    "tag": "Intermediário",
    "titulo": "Táticas e Combinações",
    "descricao": "Desenvolva seu olhar tático e aprenda as principais combinações para decidir partidas.",
    "modulos": 8,
    "duracao": "4h 15min",
    "aulas": 3,
    "descricao_longa": [
      "Neste curso, você desenvolverá sua capacidade de identificar oportunidades táticas e encontrar combinações que podem mudar o rumo de uma partida. Aprenda a reconhecer padrões como garfos, cravadas, ataques descobertos e desvios, utilizando essas ferramentas para criar ameaças e conquistar vantagens sobre seu adversário.",
      "Ao longo das aulas, você praticará o cálculo de variantes e a análise de diferentes possibilidades antes de realizar uma jogada. Aprenda a identificar erros do oponente, aproveitar peças desprotegidas e construir sequências de lances precisas para transformar oportunidades em vitórias."
    ],
    "resumo_conteudo": [
      "Identificar oportunidades táticas na partida",
      "Reconhecer padrões como garfos, cravadas e ataques descobertos",
      "Praticar o cálculo de variantes e análises prévias",
      "Aproveitar erros e peças desprotegidas do oponente",
      "Construir sequências de lances precisas para a vitória"
    ],
    "imagem": "/imagens/cursos/taticas.jpg"
  },
  {
    "id_curso": 3,
    "tag": "Avançado",
    "titulo": "Estratégia e Posicionamento",
    "descricao": "Entenda os planos estratégicos e como controlar o centro, as colunas e as peças maiores.",
    "modulos": 10,
    "duracao": "6h 45min",
    "aulas": 5,
    "descricao_longa": [
      "Este curso é voltado para quem deseja aprofundar sua compreensão estratégica no xadrez. Aprenda a avaliar posições, controlar casas importantes do tabuleiro e explorar vantagens como espaço, estrutura de peões e atividade das peças. Entenda como o domínio do centro e das colunas abertas pode ajudar na construção de planos eficientes.",
      "Durante o curso, você estudará como coordenar suas peças, identificar pontos fracos na posição adversária e escolher planos de longo prazo de acordo com as características de cada partida. Desenvolva uma visão mais completa do jogo e aprenda a transformar pequenas vantagens posicionais em oportunidades concretas de vitória."
    ],
    "resumo_conteudo": [
      "Avaliar posições e controlar casas estratégicas",
      "Explorar a estrutura de peões e a atividade das peças",
      "Dominar o centro e as colunas abertas do tabuleiro",
      "Coordenar peças e identificar fraquezas do adversário",
      "Desenvolver planos de longo prazo e converter vantagens posicionais"
    ],
    "imagem": "/imagens/cursos/estrategia.jpg"
  },
  {
    "id_curso": 4,
    "tag": "Intermediário",
    "titulo": "Aberturas Clássicas",
    "descricao": "Estude as principais aberturas e aprenda a escolher a melhor opção para o seu estilo de jogo.",
    "modulos": 7,
    "duracao": "3h 50min",
    "aulas": 15,
    "descricao_longa": [
      "Neste curso, você conhecerá as principais aberturas clássicas do xadrez e compreenderá os objetivos por trás dos primeiros lances. Estude sistemas tradicionais, como a Abertura Italiana, a Espanhola e o Gambito da Dama, aprendendo como desenvolver as peças, disputar o centro e garantir a segurança do rei desde o início da partida.",
      "Ao longo das aulas, você aprenderá a reconhecer ideias típicas de cada abertura, evitar erros comuns e identificar as transições para o meio-jogo. Descubra como escolher sistemas compatíveis com seu estilo de jogo e construir uma preparação inicial sólida para enfrentar diferentes adversários com mais confiança."
    ],
    "resumo_conteudo": [
      "Compreender os objetivos dos primeiros lances da partida",
      "Estudar sistemas clássicos (Italiana, Espanhola e Gambito da Dama)",
      "Desenvolver peças com eficiência e proteger o rei",
      "Identificar transições adequadas para o meio-jogo",
      "Escolher aberturas compatíveis com seu estilo de jogo"
    ],
    "imagem": "/imagens/cursos/abertura.jpeg"
  }
];

function reescreverBanco() {
  try {
    fs.writeFileSync(
      path.join(__dirname, 'data/usuarios.json'),
      JSON.stringify(usuariosIniciais, null, 2)
    );
    fs.writeFileSync(
      path.join(__dirname, 'data/cursos.json'),
      JSON.stringify(cursosIniciais, null, 2)
    );
    fs.writeFileSync(
      path.join(__dirname, 'data/aula.json'),
      JSON.stringify(aulasIniciais, null, 2)
    );
    fs.writeFileSync(
      path.join(__dirname, 'data/modulo.json'),
      JSON.stringify(modulosIniciais, null, 2)
    );
    console.log('Banco de dados reescrito para o estado inicial!');
  } catch (erro) {
    console.error('Erro ao reescrever o banco:', erro);
  }
}

process.on('SIGINT', () => {
  reescreverBanco();
  process.exit();
});

process.on('SIGTERM', () => {
  reescreverBanco();
  process.exit();
});

const porta = process.env.PORT || 5000;

app.listen(porta, () => {
  console.log(`Servidor rodando em http://localhost:${porta}`);
});