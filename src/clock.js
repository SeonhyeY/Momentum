const dateContainer = document.querySelector('.date');
const clockContainer = document.querySelector('.clock');

function getDate() {
  const dateInfo = new Date();
  const day = dateInfo.getDay();
  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const date = dateInfo.getDate();
  const month = dateInfo.getMonth();
  const monthNames = [
    'Dec',
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
  ];
  const fullYear = dateInfo.getFullYear();

  const fullDate = `${monthNames[month]}/${date}, ${dayNames[day]}, ${fullYear}`;
  dateContainer.innerText = fullDate;
}

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');

  clockContainer.innerHTML = `${hours}:${minutes}`;
}

getDate();
getClock();
setInterval(getClock, 1000);
