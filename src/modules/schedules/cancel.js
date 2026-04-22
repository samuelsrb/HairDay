import { scheduleDay } from "./load.js";
import { scheduleCancel } from "../../services/schedule-cancel.js";

const periods = document.querySelectorAll(".period");

// Gera evento de clique para cada lista

periods.forEach((period) => {
  // Captura o evento de clique na lista
  period.addEventListener("click", async (event) => {
    if (event.target.classList.contains("cancel-icon")) {
      const item = event.target.closest("li");
      // Pega o id do agendamento para remover
      const { id } = item.dataset;

      // Confirma que o id foi selecionado
      if (id) {
        // Confirma se o usuario deseja remover
        const isConfirm = confirm(
          "Tem certeza que deseja cancelar o agendamento?",
          console.log(id),
        );

        // Remove o agendamento
        if (isConfirm) {
          await scheduleCancel({ id });
          // Recarrega os agendamentos
          scheduleDay();
        }
      }
    }
  });
});
