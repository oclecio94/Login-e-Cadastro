const formEntrar = document.querySelector("#entrar");
const formCadastrar = document.querySelector("#cadastrar");
const corBotao = document.querySelector(".corBotao");

document.querySelector("#botaoEntrar").addEventListener("click", () => {
  formEntrar.style.left = "25px";
  formCadastrar.style.left = "450px";
  corBotao.style.left = "0px";
});

document.querySelector("#botaoCadastrar").addEventListener("click", () => {
  formEntrar.style.left = "-450px";
  formCadastrar.style.left = "25px";
  corBotao.style.left = "110px";
});
