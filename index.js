let num = 20;

document.getElementById("inputNum").innerHTML = `
<p class="inputNumDisplay">${num}</p>
`;

// Unit Conversion Formulas
// Length (Meters/Feet)
let meter = num;
let feet = num;
const lengthInMeters = feet * 0.3;
const lengthInFeet = meter * 3.28;

// Volume (Liters/Gallons)
let liters = num;
let gallons = num;
const volumeInLiters = gallons * 3.785;
const volumeInGallons = liters * 0.26;

// Mass (Kilograms/Pounds)
let kilograms = num;
let pounds = num;
const massInKilograms = pounds * 0.45;
const massInPounds = kilograms * 2.2;

document.getElementById("conversionResults").innerHTML = `
<h2>Length (Meter/Feet)</h2>
<p>${lengthInMeters} meters = ${lengthInFeet} feet | ${lengthInFeet} feet = ${lengthInMeters} meters</p>
<h2>Volume (Liters/Gallons)</h2>
<p>${volumeInLiters} liters = ${volumeInGallons} gallons | ${volumeInGallons} gallons = ${volumeInLiters} liters</p>
<h2>Mass (Kilograms/Pounds)</h2>
<p>${massInKilograms} kilograms = ${massInPounds} pounds | ${massInPounds} pounds = ${massInKilograms} kilograms</p>
`;

// Round to 3 decimal points like: 37.245