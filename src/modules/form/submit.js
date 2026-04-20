import dayjs from "dayjs";

const form = document.querySelector("form");
const selectedDate = document.getElementById("date");

// TODAY

const inputToday = dayjs(new Date()).format("YYYY-MM-DD");

// Carrega a data atual
selectedDate.value = inputToday;

// Data minima

selectedDate.min = inputToday;

form.onsubmit = (e) => {
  e.preventDefault();
  console.log("enviado");
};
