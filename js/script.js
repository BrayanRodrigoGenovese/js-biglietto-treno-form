/**
 * Calculates the ticket price based on age and distance, applying a discount if necessary
 * @param {number} age - The age of the passenger.
 * @param {number} km - The distance in kilometers.
 * @param {number} [price=0.21] - The base price per kilometer
 * @param {number} [seniorPrice=0.6] - For passengers above 65.
 * @param {number} [juniorPrice=0.8] - For passengers under 18.
 * @returns {number} The calculated price.
 */
function ticketPriceCalculator(
  age,
  km,
  price = 0.21,
  seniorPrice = 0.6,
  juniorPrice = 0.8
) {
  const discount = age >= 65 ? seniorPrice : age < 18 ? juniorPrice : 1;
  return price * km * discount;
}

const ticketForm = document.getElementById("ticket-form");
const ageInput = document.getElementById("age-input");
const kilometersInput = document.getElementById("kilometers-input");
const resultDisplay = document.getElementById("result");

ticketForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const age = parseInt(ageInput.value);
  const km = parseInt(kilometersInput.value);

  const totalPrice = ticketPriceCalculator(age, km);
  resultDisplay.innerText = totalPrice.toFixed(2);
});
