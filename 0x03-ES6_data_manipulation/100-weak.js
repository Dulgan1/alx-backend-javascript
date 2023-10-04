export const weakMap = new WeakMap();
export function queryAPI(endpoint) {
  if (weakMap.get(endpoint) >= 5) throw new Error('Endpoint load is high');
  weakMap.set(endpoint, new Number(weakMap.get(endpoint))+1);
}
