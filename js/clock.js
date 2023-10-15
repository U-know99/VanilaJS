const clock = document.querySelector("h1#clock");

function formatNumber(number) {
  return String(number).padStart(2, "0");
}

function getClock() {
  const date = new Date();
  const year = date.getFullYear();
  const month = formatNumber(date.getMonth() + 1);
  const day = formatNumber(date.getDate());
  const dayOfWeek = getDayOfWeek(date.getDay());
  const hours = formatNumber(date.getHours());
  const minutes = formatNumber(date.getMinutes());
  const seconds = formatNumber(date.getSeconds());

  clock.innerText = `${year}.${month}.${day} (${dayOfWeek}) ${hours}:${minutes}:${seconds}`;
}

function getDayOfWeek(day) {
  const days = ["일", "월", "화", "수", "목", "금", "토"];
  return days[day];
}

getClock();
setInterval(getClock, 1000);
