let num = 20;

document.getElementById("inputNum").innerHTML = `
<p class="inputNumDisplay">${num}</p>
`;

// Unit Conversion Formulas
// Length (Meters/Feet)
let meter = num;
let feet = num;
const lengthInMeters = feet * 0.3048;
const lengthInFeet = meter * 3.28084;

// Volume (Liters/Gallons)
let liters = num;
let gallons = num;
const volumeInLiters = gallons * 3.7854;
const volumeInGallons = liters * 0.2641729;

// Mass (Kilograms/Pounds)
let kilograms = num;
let pounds = num;
const massInKilograms = pounds * 0.4535924;
const massInPounds = kilograms * 2.204623;

document.getElementById("conversionResults").innerHTML = `
<h2>Length (Meter/Feet)</h2>
<p class="results">${num} meters = ${lengthInFeet.toFixed(3)} feet | ${num} feet = ${lengthInMeters.toFixed(3)} meters</p>
<h2>Volume (Liters/Gallons)</h2>
<p class="results">${num} liters = ${volumeInGallons.toFixed(3)} gallons | ${num} gallons = ${volumeInLiters.toFixed(3)} liters</p>
<h2>Mass (Kilograms/Pounds)</h2>
<p class="results">${num} kilograms = ${massInPounds.toFixed(3)} pounds | ${num} pounds = ${massInKilograms.toFixed(3)} kilograms</p>
`;

// Round to 3 decimal points like: 37.245