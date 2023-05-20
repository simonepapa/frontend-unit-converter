// If number has decimal places, then round it to three decimal, else delete all decimal places
/**
 * Returns x with 3 decimal places if x is a float number, else returns x with no decimal places.
 *
 * @param {number} x The number to check.
 * @return {number} x The number with the correct decimal places.
 */
export function checkIfDecimal(x : number): number {
  if (x % 1 !== 0) {
    x = parseFloat(x.toFixed(3))
  } else {
    x = parseFloat(x.toFixed(0))
  }
  return x
}