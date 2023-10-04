export default function cleanSet(set, startString) {
  if (startString.length === 0 || typeof startString !== 'string' || typeof set !== 'object') return '';
  const dashString = [...set].filter((elem) => elem.indexOf(startString) === 0).map((elem) => elem.replace(startString, ''));
  return dashString.join('-');
}
