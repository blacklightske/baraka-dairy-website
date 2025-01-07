function formatNumberForMpesa(number) {
  const formattedNumber = number.replace(/\D/g, "");

  if (formattedNumber.startsWith("0")) {
    return "254" + formattedNumber.substring(1);
  }

  if (formattedNumber.startsWith("254")) {
    return formattedNumber;
  }

  return "254" + formattedNumber;
}

console.log(formatNumberForMpesa("+254799146814"));
