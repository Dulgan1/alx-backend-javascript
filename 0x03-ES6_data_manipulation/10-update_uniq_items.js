export default function updateUniqueItems(map) {
  if (!(map instanceof Map)) throw new Error('Cannot process');
  map.forEach((x, y) => {
    if (x === 1) map.set(y, 100);
  });
  return map
}
