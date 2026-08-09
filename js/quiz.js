const perguntas = [
  {
    pergunta: "Onde foi o nosso primeiro encontro?",
    alternativas: ["No cinema", "No parque", "Na sorveteria"],
    correta: 1 // Índice da resposta correta (começa em 0)
  },
  {
    pergunta: "Qual é a minha comida favorita?",
    alternativas: ["Pizza", "Hambúrguer", "Comida japonesa"],
    correta: 0
  },
  {
    pergunta: "Joguinho favorito?",
    alternativas: ["Vava", "Gta", "Pokemon"],
    correta: 0
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
  
  if (indexSelecionado === atual.correta) {
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