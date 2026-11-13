const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
  {
    enunciado: "Você acorda confuso no asfalto de uma cidade totalmente deserta e em silêncio. O que faz primeiro?",
    alternativas: [
      { texto: "Grito o mais alto que posso por socorro, na esperança de que alguém escute e venha me ajudar.", afirmacao: "Você escolheu o barulho, o que pode ter atraído atenção indesejada." },
      { texto: "Mantenho a calma e começo a explorar os arredores em completo silêncio para não chamar atenção.", afirmacao: "Você preferiu a cautela, movendo-se como uma sombra pela cidade." }
    ]
  },
  {
    enunciado: "O sol está muito forte e você precisa de suprimentos. Para onde vai?",
    alternativas: [
      { texto: " Entro em um shopping abandonado para procurar comida e água pelas lojas vazias.", afirmacao: "No shopping, você encontrou comida, mas o lugar era um labirinto perigoso." },
      { texto: "Tento abrir uma delegacia trancada em busca de abrigo seguro e equipamentos úteis.", afirmacao: "Na delegacia, você achou proteção e ferramentas úteis para sobrevivência." }
    ]
  },
  {
    enunciado: "Você acha um rádio antigo que chia: 'Tem alguém vivo? Venha para o porto!'. A linha cai. Qual a sua decisão?",
    alternativas: [
      { texto: "Decido confiar na mensagem e vou direto para o porto tentar encontrar outros sobreviventes.", afirmacao: "Guiado pela esperança, você seguiu o chamado do rádio rumo ao porto." },
      { texto: "Ignoro o chamado e fico longe de lá, pois desconfio que tudo não passe de uma armadilha.", afirmacao: "Sua desconfiança te manteve longe do porto, preferindo confiar apenas em si mesmo." }
    ]
  },
  {
    enunciado: "O anoitecer chega e você ouve passos arrastados vindo de um prédio próximo. Como reage?",
    alternativas: [
      { texto: " Procuro um lugar para me esconder nas sombras e me preparo para lutar caso algo apareça.", afirmacao: "Quando o perigo espreitou na escuridão, você decidiu lutar para defender sua vida." },
      { texto: "Viro as costas e corro o mais rápido que minhas pernas permitem para bem longe daquele prédio.", afirmacao: "O medo tomou conta e você correu sem olhar para trás, gastando suas energias." }
    ]
  },
  {
    enunciado: "Você chega ao limite da cidade. A estrada está coberta por uma névoa densa, e ao lado há um túnel de metrô escuro. Por onde foge?",
    alternativas: [
      { texto: "Sigo em frente pela estrada aberta, entrando de vez no meio da névoa densa.", afirmacao: "Você desapareceu na névoa da estrada, deixando o passado para trás rumo ao desconhecido." },
      { texto: "Desço as escadas e sigo pelos túneis escuros do metrô para tentar escapar por baixo da terra.", afirmacao: "Você escolheu a escuridão dos trilhos subterrâneos, esperando encontrar uma saída secreta." }
    ]
  }
];

let atual = 0;
let perguntaAtual;
let historiaFinal = ""; 

function mostraPergunta() {
  
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativa = document.createElement("button");
        botaoAlternativa.textContent = alternativa.texto;
        botaoAlternativa.addEventListener("click", function() {
            atual++;
            historiaFinal += alternativa.afirmacao + " "; 
            mostraPergunta();
        });
        caixaAlternativas.appendChild(botaoAlternativa);
    }
}

function mostraResultado() {
    caixaPerguntas.textContent = "Fim da sua jornada...";
    caixaAlternativas.textContent = ""; 
    caixaResultado.classList.remove("hidden"); 
    textoResultado.textContent = historiaFinal; 
}

mostraPergunta();
