export default function hasValuesFromArray(set, array) {
  return array.map((elem) => set.has(elem)).reduce((exists, y) => y, false);
}
