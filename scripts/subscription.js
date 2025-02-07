
function calculateBMI() {
  let unit= document.getElementById("unit").value;
  let weight = parseFloat(document.getElementById("weight").value);
  let height = parseFloat(document.getElementById("height").value);
            let bmi;

   if (unit === "imperial") {
    weight *= 0.453592; // Convert lbs to kg
    height *= 2.54; // Convert inches to cm
  }
    height /= 100; // Convert cm to meters
    bmi = weight / (height * height);

    let status;
    if (bmi < 18.5) status = "Underweight";
     else if (bmi < 24.9) status = "Normal";
     else if (bmi < 29.9) status = "Overweight";
     else status = "Obese";

 document.getElementById("result").innerText = `Your BMI: ${bmi.toFixed(2)} - ${status}`;
        }
    
function func2(){
    document.getElementById("pricing-monthly").classList.remove("hidden")
    document.getElementById("pricing-yearly").classList.add("hidden")
}
function func1(){
    document.getElementById("pricing-monthly").classList.add("hidden")
    document.getElementById("pricing-yearly").classList.remove("hidden")
}
function func3(){
    document.getElementById("pricing-monthly").classList.remove("hidden")
    document.getElementById("pricing-yearly").classList.remove("hidden")
}
