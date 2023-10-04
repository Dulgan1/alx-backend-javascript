export const weakMap = new WeakMap();
let sum = 0;
export default function queryAPI(endpoint) {
  if (weakMap.length >= 5) throw new Error('Endpoint load is high');
  weakMap.set(endpoint, sum+1);
  sum++;
}
