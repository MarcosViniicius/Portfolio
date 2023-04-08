// Função que alterna o idioma da página
function changeLanguage() {
  // Obtém o valor selecionado na lista suspensa de idiomas
  var selectedLanguage = document.getElementById("language-select").value;

  // Obtém o elemento que contém o conteúdo em português
  var ptContent = document.getElementsByClassName("pt");

  // Obtém o elemento que contém o conteúdo em inglês
  var enContent = document.getElementsByClassName("en");

  // Verifica qual idioma foi selecionado e exibe o conteúdo correspondente
  if (selectedLanguage === "pt") {
    // Exibe o conteúdo em português e oculta o conteúdo em inglês
    for (var i = 0; i < ptContent.length; i++) {
      ptContent[i].style.display = "inline-block";
    }
    for (var i = 0; i < enContent.length; i++) {
      enContent[i].style.display = "none";
    }
  } else {
    // Exibe o conteúdo em inglês e oculta o conteúdo em português
    for (var i = 0; i < ptContent.length; i++) {
      ptContent[i].style.display = "none";
    }
    for (var i = 0; i < enContent.length; i++) {
      enContent[i].style.display = "inline-block";
    }
  }
}
