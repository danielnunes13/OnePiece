const botoes = document.querySelectorAll(".botao");
const personagens = document.querySelectorAll(".personagem");
botoes.forEach((botao, index) => {
  botao.addEventListener("click", () => {
    desselecionarBotao();
    desselecionarPersonagem();

    botao.classList.add("selecionado");
    personagens[index].classList.add("selecionado");
  });
});

function desselecionarPersonagem() {
  const personagemSelecionado = document.querySelector(
    ".personagem.selecionado"
  );
  personagemSelecionado.classList.remove("selecionado");
}

function desselecionarBotao() {
  const botaoselecionado = document.querySelector(".botao.selecionado");
  botaoselecionado.classList.remove("selecionado");
}
