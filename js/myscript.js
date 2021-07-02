document.getElementById("form").addEventListener("submit",formsubmitted);
const femaleNames = ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];
const maleNames = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
const weekDay = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
function calculateDayofWeek (day,month,year){
  const CC = year.slice(0,2);
  const YY = year.slice(2,4);
  return Math.round ((((CC/4) -2*CC-1) + ((5*YY/4)) + ((26*(month+1)/10)) + day)%7);
}