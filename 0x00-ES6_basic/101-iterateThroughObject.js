export default function iterateThroughObject(reportWithIterator) {
  const string = "";
  const iter = reportWithIterator[Symbol.iterator]();
  for (const item in reportWithIterator) {
    if (iter.next.done !== true) {
      string += item +' | ';
    } else {
      string += item;
    }
  }
  return string;
}
