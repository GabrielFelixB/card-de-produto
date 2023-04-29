const imagem = document.getElementById("productImg");

const btn = document.getElementById("btn-gif");

btn.addEventListener("click", () => {
  const imagemSrc = imagem.getAttribute("src");

  if (imagemSrc === "/assets/img/produto.png") {
    imagem.setAttribute("src", "/assets/gif.gif");
    btn.setAttribute("src", "/assets/img/x.svg");
  } else {
    imagem.setAttribute("src", "/assets/img/produto.png");
    btn.setAttribute("src", "/assets/img/Vector.svg");
  }
});
