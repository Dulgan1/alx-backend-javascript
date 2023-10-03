export default function getStudentsByLocation(array, city) {
  if (Array.isArray(array)) {
    return array.filter((elem) => elem.location === city);
  }
  return [];
}
