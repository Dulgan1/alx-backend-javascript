export default function divideFunction(numerator, denominator) {
  if (!denominator) {
    return Error('cannot divide by 0');
  } else {
    return numerator / denominator;
  }
}
