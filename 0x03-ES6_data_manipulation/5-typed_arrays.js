export default function createInt8TypedArray(length, position, value) {
  if (position > length - 1) throw new Error('Position outside range');
  const buffer = ArrayBuffer(length);
  const view = Int8Array(buffer);
  view.set(value, position);
  return DataView(buffer);
}
