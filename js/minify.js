document
  .getElementById("form-minificar")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    const texto = document.getElementById("texto").value;
    const minificado = document.getElementById("minificado");
    const msg = document.getElementById("msg");

    // Exibe a mensagem de sucesso imediatamente após o clique no botão
    msg.textContent = "Minificando o CSS... Aguarde!";
    msg.classList.remove("error"); // Certifica-se de que não há erro
    msg.classList.add("success");
    msg.style.display = "block"; // Exibe a mensagem

    // Lógica de Minificação
    const minCSS = texto
      // Remove comentários
      .replace(/\/\*[^]*?\*\//g, "")
      // Remove espaços ao redor de delimitadores
      .replace(/\s*([{}:;,])\s*/g, "$1")
      // Remove ponto-e-vírgula antes de fechar chaves
      .replace(/;}/g, "}")
      // Remove espaços em excesso entre palavras
      .replace(/\s{2,}/g, " ")
      // Remove linhas vazias
      .replace(/^\s*[\r\n]/gm, "");

    // Atualiza a saída
    minificado.value = minCSS.trim();

    // Exibe a mensagem de sucesso após a minificação
    setTimeout(() => {
      msg.textContent = "CSS minificado com sucesso!";
      msg.style.backgroundColor = "var(--success-color)"; // Alterando a cor de fundo para verde
    }, 500); // Delay para garantir que a minificação seja feita antes da atualização da mensagem
  });


document.getElementById("copiar").addEventListener("click", function (e) {
  e.preventDefault(); // Impede o redirecionamento da página

  const minificado = document.getElementById("minificado");
  navigator.clipboard.writeText(minificado.value).then(() => {
    // Exibe a mensagem de sucesso
    const copiedMessage = document.getElementById("copiado-msg");
    copiedMessage.style.display = "block"; // Torna a mensagem visível
    setTimeout(() => {
      copiedMessage.style.display = "none"; // Oculta a mensagem após 3 segundos
    }, 3000); // 3 segundos de exibição
  });
});
