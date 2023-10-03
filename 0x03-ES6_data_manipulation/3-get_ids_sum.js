export default function getStudentIdsSum(array) {
  if (Array.isArray(array)) {
    return array.reduce((sum, elem) => sum + elem, 0);
  }
  return [];
}
