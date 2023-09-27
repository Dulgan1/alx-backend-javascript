export default function iterateThroughObject(reportWithIterator) {
  let string = "";
  const iter = reportWithIterator[Symbol.iterator]();
  for (const item in reportWithIterator) {
    if (!iter.next.done) {
      string += item +' | ';
    } else {
      string += item;
    }
  }
  return string;
}
