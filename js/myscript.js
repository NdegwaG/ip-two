document.getElementById("form").addEventListener("submit",formSubmitted)
const femaleNames = ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"]
const maleNames = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"]
const weekDay = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
function calculateDayOfWeek (day,month,year){
  const CC = year.slice(0,2)
  const YY = year.slice(2,4)
  return Math.round((((CC/4) -2*CC-1) + ((5*YY/4)) + ((26*(month+1)/10)) + day)%7)  
}

function formSubmitted(e){
  e.preventDefault()
  const day = document.getElementById("day").value
  const month = document.getElementById("month").value
  const year = document.getElementById("year").value
  
  const gender =document.querySelector('input[name="gender"]:checked').value
  const dayOfWeek = calculateDayOfWeek(day,month,year)
  
  if (gender === "M"){
    alert("Your Akan name is " + maleNames[dayOfWeek] + ". You were born on a " + weekDay[dayOfWeek])
  }
  else{alert("Your Akan name is " + femaleNames[dayOfWeek] + ". You were born on a " + weekDay[dayOfWeek])
}
}