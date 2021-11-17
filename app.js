//   // //   The Geometrizer
// // // Create 2 functions that calculate properties of a circle, using the definitions here.
// // // Create a function called calcCircumfrence:
// // // Pass the radius to the function.
// // // Calculate the circumference based on the radius, and output "The circumference is NN".
// // // Create a function called calcArea:
// // // Pass the radius to the function.
// // // Calculate the area based on the radius, and output "The area is NN".

function cCir (radius) {
    var cirC = Math.PI * 2 * radius;
    console.log("The circumference is" + cirC);
  }
  
  cCir (6)
  // Area
  function calA (radius) {
    var cirA = Math.PI * radius * radius;
    console.log("The Area Is " + cirA);
  
  }
  
  calA (7)

  // Write a function named calculateDogAge that:
// takes 1 argument: your puppy's age.
// calculates your dog's age based on the conversion rate of 1 human year to 7 dog years.
// outputs the result to the screen like so: "Your doggie is NN years old in dog years!"
// Call the function three times with different sets of values.
// Bonus: Add an additional argument to the function that takes the conversion rate of human to dog years.
// function calculateDogAge
// extra credit about getElementsByClassName, why on the line below do we use [0] at the end of the line?
let humanYearInput = document.getElementsByClassName('human-year-input')[0]
let dogButton = document.querySelector('.convert-button')
let inputButton = document.querySelector('.input-test-button')

function calculatedogsYears() {
	// 1 human year is 7 dog years
	let humanYears = humanYearInput.value
	console.log('the user entered', humanYears)
  
	let dogAge = humanYears * 7
  dogAge = Math.round(dogAge)
  /* string interpolation */
  console.log(`The dog is ${dogAge} `)
  document.getElementById('dog-age').innerHTML = `The dog is ${dogAge}.`
}

dogButton.addEventListener('click', () => calculatedogsYears())



// Temprature Converter

function toCelsius(f) {
  return (5/9) * (f-32);

}
document.getElementById("demo-0").innerHTML= toCelsius(77);
document.getElementById("demo-1").innerHTML= toCelsius(35);
document.getElementById("demo-2").innerHTML= toCelsius(20);

function calculateDeg(num) {
  var degree= document.getElementById("deg").value;
  var tempCalc=(5/9) * (degree-32);
  console.log("Your degree is " + tempCalc + " in farenheight!!!")
// target in Html and applies variable deg farengeight
  document.getElementById("celDeg").innerHTML= Math.round(tempCalc);
}
