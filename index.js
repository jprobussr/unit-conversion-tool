let convertBtn = document.getElementById('convert-btn');
let inputEl = document.getElementById('input-el');
const lengthEl = document.getElementById('length-el');
const volumeEl = document.getElementById('volume-el');
const massEl = document.getElementById('mass-el');

convertBtn.addEventListener('click', () => {
  const inputValue = inputEl.value;
  const value = parseFloat(inputValue);

  const meterToFeet = (value * 3.281).toFixed(3);
  const feetToMeter = (value / 3.281).toFixed(3);

  lengthEl.textContent = `${value} meters = ${meterToFeet} feet | ${value} feet = ${feetToMeter} meters`;

  const litersToGallons = (value * 0.264).toFixed(3);
  const gallonsToliters = (value / 0.264).toFixed(3);

  volumeEl.textContent = `${value} liters = ${litersToGallons} gallons | ${value} gallons = ${gallonsToliters} liters`;

  const kilogramsToPounds = (value * 2.204).toFixed(3);
  const poundsToKilograms = (value / 2.204).toFixed(3);

  massEl.textContent = `${value} kilos = ${kilogramsToPounds} pounds | ${value} pounds = ${poundsToKilograms} kilos`;
});
