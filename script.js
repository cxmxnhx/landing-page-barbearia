document.addEventListener("DOMContentLoaded", () => {
  function spanify(element) {
    const texto = element.textContent;
    element.textContent = "";
    texto.split("").forEach(letra => {
      const span = document.createElement("span");
      span.textContent = letra === " " ? "\u00A0" : letra; 
      element.appendChild(span);
    });
  }
  
  // Aplica para o subtítulo
  const subtitulo = document.querySelector(".subtitulo-servicos");
  if (subtitulo) spanify(subtitulo);

  // Aplica para o h1 e p dentro do .hero
  const heroH1 = document.querySelector(".hero h1");
  const heroP = document.querySelector(".hero p");
  if (heroH1) spanify(heroH1);
  if (heroP) spanify(heroP);

  // Aplica para o h2 dentro da seção #sobre
  const sobreH2 = document.querySelector("#sobre h2");
  if (sobreH2) spanify(sobreH2);

  // Aplica para todos os p dentro da seção #sobre
  const sobrePs = document.querySelectorAll("#sobre p");
  sobrePs.forEach(p => spanify(p));

  AOS.init({
    once: false,
    mirror: true,
  });
});
