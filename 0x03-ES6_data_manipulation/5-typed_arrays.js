export default function createInt8TypedArray(length, position, value) {
  if (position > length - 1) throw new Error('Position outside range');
  const buffer = ArrayBuffer(length);
  const Int8Array = Int8Array(buffer);
  Int8Array[position] = value;
  return DataView(buffer);
}
