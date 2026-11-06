const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
  {
    enunciado: "Você acorda confuso no asfalto de uma cidade totalmente deserta e em silêncio. O que faz primeiro?",
    alternativas: [
      { texto: "Grito por socorro.", afirmacao: "Você escolheu o barulho, o que pode ter atraído atenção indesejada." },
      { texto: "Exploro em silêncio.", afirmacao: "Você preferiu a cautela, movendo-se como uma sombra pela cidade." }
    ]
  },
  {
    enunciado: "O sol está muito forte e você precisa de suprimentos. Para onde vai?",
    alternativas: [
      { texto: "Para um shopping abandonado.", afirmacao: "No shopping, você encontrou comida, mas o lugar era um labirinto perigoso." },
      { texto: "Para uma delegacia trancada.", afirmacao: "Na delegacia, você achou proteção e ferramentas úteis para sobrevivência." }
    ]
  },
  {
    enunciado: "Você acha um rádio antigo que chia: 'Tem alguém vivo? Venha para o porto!'. A linha cai. Qual a sua decisão?",
    alternativas: [
      { texto: "Vou direto para o porto.", afirmacao: "Guiado pela esperança, você seguiu o chamado do rádio rumo ao porto." },
      { texto: "Ignoro, pode ser uma armadilha.", afirmacao: "Sua desconfiança te manteve longe do porto, preferindo confiar apenas em si mesmo." }
    ]
  },
  {
    enunciado: "O anoitecer chega e você ouve passos arrastados vindo de um prédio próximo. Como reage?",
    alternativas: [
      { texto: "Me escondo e me preparo para lutar.", afirmacao: "Quando o perigo espreitou na escuridão, você decidiu lutar para defender sua vida." },
      { texto: "Corro o mais rápido possível.", afirmacao: "O medo tomou conta e você correu sem olhar para trás, gastando suas energias." }
    ]
  },
  {
    enunciado: "Você chega ao limite da cidade. A estrada está coberta por uma névoa densa, e ao lado há um túnel de metrô escuro. Por onde foge?",
    alternativas: [
      { texto: "Pela estrada na névoa.", afirmacao: "Você desapareceu na névoa da estrada, deixando o passado para trás rumo ao desconhecido." },
      { texto: "Pelos túneis do metrô.", afirmacao: "Você escolheu a escuridão dos trilhos subterrâneos, esperando encontrar uma saída secreta." }
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
