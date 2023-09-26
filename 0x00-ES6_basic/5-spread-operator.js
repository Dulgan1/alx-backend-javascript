export default function concatArrays(...args) {
  let newArr = new Array();
  for (const arg of agrs) {
    const iter = arg[Symbol.iterable]();
    newArr.push(iter.next())
  }
  return newArr;
}
