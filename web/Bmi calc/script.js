function validateForm() {
  let input_nama = documents.forms["myForm"]["name"].value;
  
   if (input_nama == "") {
     alert ("nama harus diisi")
     return false;
   }
}

function changeColor() {
  let title = document.getElementById("web_title");

  if (title.style.color == "maroon") {
    title.style.color = "magenta";
  } else {
    title.style.color = "maroon";r
  }
} 

var angka = 0;

function count() {
  angka++;
  document.getElementById("angka").textContent = angka;
}

function reset() {
  angka = 0;
  document.getElementById("angka").innerHTML = angka;
}

function calculateBMI() {
  let height = document.getElementById("height").value;
  let weight = document.getElementById("weight").value;

  let heightInMeters = height / 100;
  let bmi = weight / (heightInMeters * heightInMeters)

  let text = "Your Bmi is " + bmi.toFixed(2)
  if (bmi < 18.5) {
    text += " Category : Underweight"
  } else if (bmi < 25) {
    text += " Category : Normal weight"
  } else if (bmi < 30) {
    text += " Category : Overweight"
  } else if (bmi < 35) {
    text += " Category : Obesity class 1"
  } else if (bmi < 40) {
    text += " Category : Obesity class 2"
  } else {
    text += " Category : Obesity class 3 or Morbidly Obese"
  }
    
  document.getElementById("result").innerHTML = text
}