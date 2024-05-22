const baralho = [];

while (true) {
  const menu = prompt(
    "Baralho:\n" +
      baralho +
      "\nEscolha uma ação:\n1 - Adicionar uma carta\n2 - Puxar uma carta\n3 - Sair"
  );

  if (menu == 1) {
    novaCarta = prompt("Qual carta será adicionada?");
    baralho.push(novaCarta);
    alert(novaCarta + " foi adicionado");
  } else if (menu == 2) {
    const cartaRemovida = baralho.pop();
    alert("A carta " + cartaRemovida + " foi removida");
  } else if (menu == 3) {
    alert("Encerrando...");
    break;
  }
}
