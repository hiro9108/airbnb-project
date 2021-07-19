export function getToday() {
  let today = new Date();
  today.setDate(today.getDate());
  return today.toISOString().substr(0, 10);
}

export function getTmr() {
  let tmr_d = new Date();
  tmr_d.setDate(tmr_d.getDate() + 1);
  return tmr_d.toISOString().substr(0, 10);
}
