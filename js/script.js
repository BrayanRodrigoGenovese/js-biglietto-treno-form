function ticketPriceCalculator(
  age,
  km,
  price = 0.21,
  seniorDiscount = 0.6,
  juniorDiscount = 0.8
) {
  const discount = age >= 65 ? seniorDiscount : age < 18 ? juniorDiscount : 1;
  return price * km * discount;
}
