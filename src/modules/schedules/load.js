import { scheduleFetchByDay } from "../../services/schedule-fetch-by-day.js";
import { hoursLoad } from "../form/hours-load";
import { scheduleShow } from "../schedules/show.js";

const selectedDate = document.getElementById("date");

export async function scheduleDay() {
  const date = selectedDate.value;

  const dailySchedules = await scheduleFetchByDay({ date });

  // Exibe os agendamentos
  scheduleShow({ dailySchedules });

  hoursLoad({ date, dailySchedules });
}
