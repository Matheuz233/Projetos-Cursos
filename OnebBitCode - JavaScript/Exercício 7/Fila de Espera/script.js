const pacientes = ["Matheus", "João", "Lucas"];

while (true) {
  const menu = prompt(
    "Pacientes:\n" +
      pacientes +
      "\nEscolha uma ação:\n1 - Novo paciente\n2 - Consultar paciente\n3 - Sair"
  );

  if (menu == 1) {
    novoPaciente = prompt("Qual nome do paciente para adicionar?");
    pacientes.push(novoPaciente);
    alert(novoPaciente + " foi adicionado");
  } else if (menu == 2) {
    alert("O " + pacientes[0] + " foi atendido");
    pacientes.shift();
  } else if (menu == 3) {
    alert("Encerrando...");
    break;
  }
}
