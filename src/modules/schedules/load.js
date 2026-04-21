import { scheduleFetchByDay } from "../../services/schedule-fetch-by-day.js";
import { hoursLoad } from "../form/hours-load";

const selectedDate = document.getElementById("date");

export async function scheduleDay() {
  const date = selectedDate.value;

  const dailySchedules = await scheduleFetchByDay({ date });
  console.log(dailySchedules);

  hoursLoad({ date });
}
