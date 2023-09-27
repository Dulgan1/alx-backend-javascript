export default function iterateThroughObject(reportWithIterator) {
  let str = "";
  const iter = reportWithIterator[Symbol.iterator]();
  for (const item in reportWithIterator) {
    if (!iter.next.done) {
      str += item +' | ';
    } else {
      str += item;
    }
  }
  return str;
}
