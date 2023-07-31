/* Desenvolva aqui a rotina */
// Função para calcular os valores
function calcularValores() {
  // Obter os valores dos campos
  const valorBase = parseFloat(document.getElementById("valor_base").value);
  const valorTransporte = parseFloat(
    document.getElementById("valor_transporte").value
  );
  const valorAlimentacao = parseFloat(
    document.getElementById("valor_alimentacao").value
  );
  const valorAutomovel = parseFloat(
    document.getElementById("valor_automovel").value
  );
  const faltas = parseFloat(document.getElementById("faltas").value);

  // Calcular a Receita Total (R$)
  const receitaTotal = valorBase + valorTransporte + valorAlimentacao;
  document.getElementById("valor_receita").value = receitaTotal;

  // Calcular os Descontos Total (R$)
  const descontosTotal = valorAutomovel + faltas;
  document.getElementById("valor_descontos").value = descontosTotal;

  // Calcular o Total (R$)
  const total = receitaTotal - descontosTotal;
  document.getElementById("valor_total").value = total;
}

// Evento para calcular sempre que houver mudança nos inputs
const inputs = document.querySelectorAll('input[type="number"]');
inputs.forEach((input) => {
  input.addEventListener("input", calcularValores);
});

// Evento de clique no botão de calcular (opcional, mantido por conveniência)
document
  .getElementById("btn_calcular")
  .addEventListener("click", calcularValores);
