/**
 * Calculates the ticket price based on age and distance, applying a discount if necessary
 * @param {number} age - The age of the passenger.
 * @param {number} km - The distance in kilometers.
 * @param {number} price - The base price per kilometer
 * @param {number} seniorPrice - For passengers above 65.
 * @param {number} juniorPrice - For passengers under 18.
 * @returns
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
