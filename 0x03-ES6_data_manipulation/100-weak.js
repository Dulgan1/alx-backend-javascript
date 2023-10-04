export const weakMap = new WeakMap();
export default function queryAPI(endpoint) {
  if (weakMap.length >= 5) throw new Error('Endpoint load is high');
  weakMap.set(endpoint, [endpoint.name]);
}
