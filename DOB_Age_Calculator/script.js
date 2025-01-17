function formatDate(date) {
  return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
}


function calculateAge() {
  const dob = new Date(document.getElementById("dob").value);
  const tob = document.getElementById("tob").value.split(":");

  if (!dob || !tob.length) {
    alert("Please enter both Date and Time of Birth.");
    return;
  }

  dob.setHours(parseInt(tob[0]), parseInt(tob[1]));

  const now = new Date();
  const diffInMs = now - dob;

  const minutes = Math.floor(diffInMs / 1000 / 60);
  const hours = Math.floor(diffInMs / 1000 / 60 / 60);
  const days = Math.floor(diffInMs / 1000 / 60 / 60 / 24);
  const months = Math.floor(days / 30.44); 
  const years = Math.floor(months / 12);

  document.getElementById("minutes").innerText = `Minutes: ${minutes}`;
  document.getElementById("hours").innerText = `Hours: ${hours}`;
  document.getElementById("days").innerText = `Days: ${days}`;
  document.getElementById("months").innerText = `Months: ${months}`;
  document.getElementById("years").innerText = `Years: ${years}`;
}

function updateTime() {
  const now = new Date();
  const timeString = now.toLocaleTimeString();
  document.getElementById("live-time").innerText = `Live Time: ${timeString}`;
  document.getElementById(
    "todays-date"
  ).innerText = `Today's Date: ${formatDate(now)}`;
}


document.getElementById("calculate").addEventListener("click", calculateAge);
setInterval(updateTime, 1000);
updateTime();
