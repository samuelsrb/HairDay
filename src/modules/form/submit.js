import dayjs from "dayjs";

const form = document.querySelector("form");
const clientName = document.getElementById("client");
const selectedDate = document.getElementById("date");

// TODAY

const inputToday = dayjs(new Date()).format("YYYY-MM-DD");

// Carrega a data atual
selectedDate.value = inputToday;

// Data minima

selectedDate.min = inputToday;

form.onsubmit = (e) => {
  e.preventDefault();

  try {
    // Recuperando o nome do cliente
    const name = clientName.value.trim();

    if (!name) {
      return alert("Informe o nome do cliente!");
    }

    // Recuperar o horario selecionado
    const hourSelected = document.querySelector(".hour-selected");

    if (!hourSelected) {
      return alert("Selecione a hora");
    }

    // Recuperar somente a hora
    const [hour] = hourSelected.innerText.split(":");

    // Insere a hora na data
    const when = dayjs(selectedDate.value).add(hour, "hour");

    // Gera ID
    const id = new Date().getTime();
  } catch (error) {
    alert("Não foi possível realizar o agendamento");
  }
};
