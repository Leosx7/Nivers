const perguntas = [
  {
    pergunta: "Que dia nos conhecemos?( essa é fácil)",
    alternativas: ["9 de dezembro", "10 de dezembro", "24 de agosto"],
    correta: [0] // Aceita 9 de dezembro
  },
  {
    pergunta: "Qual nosso jogo favorito?",
    alternativas: ["Mine", "FF"],
    correta: [1]
  },
  {
    pergunta: "Qual nosso anime favorito?",
    alternativas: ["Fuufu", "aot", "Horimiya", "One piece"],
    correta: [0, 2] // Aceita "Fuufu" (0) E "Horimiya" (2)
  },
  {
    pergunta: "O que mais gostamos de fazer juntos?",
    alternativas: ["Ir call(fofocar)", "Jogar", "Assistir"],
    correta: [0]
  },
  {
    pergunta: "E o ultimo, o que eu mais gosto em você?",
    alternativas: ["Sua sinceridade", "Sua Personalidade", "Sua beleza", "Sua inteligência"],
    correta: [0, 1, 2, 3] // Aceita qualquer uma das 4 opções
  }
];

let perguntaAtual = 0;

const elementoPergunta = document.getElementById("pergunta");
const elementoAlternativas = document.getElementById("alternativas");
const elementoResultado = document.getElementById("resultado");

function carregarPergunta() {
  elementoResultado.textContent = "";
  const atual = perguntas[perguntaAtual];
  elementoPergunta.textContent = atual.pergunta;
  
  elementoAlternativas.innerHTML = "";
  
  atual.alternativas.forEach((alternativa, index) => {
    const botao = document.createElement("button");
    botao.textContent = alternativa;
    botao.onclick = () => verificarResposta(index);
    elementoAlternativas.appendChild(botao);
  });
}

function verificarResposta(indexSelecionado) {
  const atual = perguntas[perguntaAtual];
  
  // O .includes() verifica se o botão clicado está dentro do array de respostas corretas
  if (atual.correta.includes(indexSelecionado)) {
    elementoResultado.textContent = "Acertou! Te amo ❤️";
    elementoResultado.style.color = "green";
    perguntaAtual++;
    
    setTimeout(() => {
      if (perguntaAtual < perguntas.length) {
        carregarPergunta();
      } else {
        elementoPergunta.textContent = "Você completou o quiz! Parabéns meu amor! 🎉";
        elementoAlternativas.innerHTML = "";
        elementoResultado.textContent = "";
      }
    }, 1500);
    
  } else {
    elementoResultado.textContent = "Errou! Tenta de novo amor rs. 😜";
    elementoResultado.style.color = "red";
  }
}

// Inicia o quiz carregando a primeira pergunta
carregarPergunta();