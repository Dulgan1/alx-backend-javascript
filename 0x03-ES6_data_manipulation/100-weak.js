export const weakMap = new WeakMap();
export function queryAPI(endpoint) {
  if (weakMap.size >= 5) throw new Error('Endpoint load is high');
  weakMap.set(endpoint);
}
