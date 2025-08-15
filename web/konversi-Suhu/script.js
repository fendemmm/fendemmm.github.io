function konversi_suhu() {
  let suhu = document.getElementById("suhu").value;
  let dari = document.getElementById("dari").value;
  let ke = document.getElementById("ke").value;
  
  let result;
  if (dari == "celcius") {
    if (ke == "fahrenheit") {
      result = (suhu * 9 / 5) + 32;
    } else if (ke == "kelvin") {
      result = (parseFloat(suhu) + 273.15);
    } else {
      result = suhu
    }
    
  } else if (dari == "fahrenheit") {
    if (ke == "celcius") {
      result = (suhu - 32) * 5 / 9
    } else if (ke == "kelvin") {
      result = (suhu - 32) * 5 / 9 + 273.15
    } else {
      result = suhu
    }
    
  } else if (dari == "kelvin") {
    if (ke == "celcius") {
      result = suhu - 273;
    } else if (ke == "fahrenheit") {
      result = (suhu - 273) * 9/5 + 32;
    } else {
      result = suhu;
    }
  }
  
  document.getElementById("hasil").innerHTML = result.toFixed(2) 
}