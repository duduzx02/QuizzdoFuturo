let ask = document.querySelector(".ask-1")
let acertos = 0;
let perguntaAtual = 1;
let ultimaPergunta = 5;


function chegarRespota(event) {
  if (event.target.tagName !== "BUTTON") {
    return
  }

  const classDoBotao = event.target.className;

  if (classDoBotao === "correta") {
    acertos++;
  }

  const divperguntaAtual = document.querySelector(".ask-" + perguntaAtual);
  divperguntaAtual.classList.add("off");

  perguntaAtual++;

  if (perguntaAtual > ultimaPergunta) {
    const pergunta = document.querySelector(".resultado")
    pergunta.classList.remove("off");

    const acertadas = document.querySelector(".acertadas")
    acertadas.innerText = acertos
    return
  }


  const proxDivPerguntaAtual = document.querySelector(".ask-" + perguntaAtual);
  proxDivPerguntaAtual.classList.remove("off")

  let textoPerguntaAtual = document.querySelector(".pergunta-atual");
  textoPerguntaAtual.innerText = perguntaAtual

  
};

function voltarParaoFuturo()  {
  acertos = 0;
  perguntaAtual = 1;


  let textoPerguntaAtual = document.querySelector(".pergunta-atual");
  textoPerguntaAtual.innerText = perguntaAtual

  const pergunta = document.querySelector(".resultado")
  pergunta.classList.add("off");

  const proxDivPerguntaAtual = document.querySelector(".ask-" + perguntaAtual);
  proxDivPerguntaAtual.classList.remove("off")

}