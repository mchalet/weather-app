// Takes a kelvin temperature argument and returns the converted fahrenheit value.
export function kelvinToFahrenheit(kelvin) {
  const celsius = kelvin - 273;
  let fahrenheit = `${Math.floor(celsius * (9 / 5) + 32)} °F`;
  return fahrenheit;
}
