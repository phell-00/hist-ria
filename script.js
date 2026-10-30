const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
  {
    enunciado:
      "Você acorda confuso no asfalto de uma cidade totalmente deserta e em silêncio. O que faz primeiro?",
    alternativas: [
      {
        texto: "Grito por socorro.",
        afirmação: ""
      },
       {
        texto: "Exploro em silêncio.",
        afirmação: ""
      }
  ]
  },
  {
    enunciado:
      "O sol está muito forte e você precisa de suprimentos. Para onde vai?",
    alternativas: [ "Para um shopping abandonado.",
                  "Para uma delegacia trancada."
]
  },
  {
    enunciado:
     "Você acha um rádio antigo que chia: 'Tem alguém vivo? Venha para o porto!'. A linha cai. Qual a sua decisão?",
    alternativas: [ "Vou direto para o porto.",
                    "Ignoro, pode ser uma armadilha."
     
    ],
  },
  {
    enunciado:  "O anoitecer chega e você ouve passos arrastados vindo de um prédio próximo. Como reage?",
     
    alternativas: [ "Me escondo e me preparo para lutar.",
                    "Corro o mais rápido possível."
     
    ],
  },
  {
    enunciado:  "Você chega ao limite da cidade. A estrada está coberta por uma névoa densa, e ao lado há um túnel de metrô escuro. Por onde foge?",
     
    alternativas: [  "Pela estrada na névoa.",
                     "Pelos túneis do metrô."
   
    ] 
  },
];

let atual = 0;
let perguntaAtual;

function mostraPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    mostraAlternativas();
}
 function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativa = document.createElement("button");
        botaoAlternativa.textContent = alternativa.texto;
        botaoAlternativa.addEventListener("click", function(){
            atual++,
            mostraPergunta();
        })
        caixaAlternativas.appendChild(botaoAlternativa);
    }
}