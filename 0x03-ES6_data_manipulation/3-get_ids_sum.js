export default function getStudentIdsSum(array) {
  if (Array.isArray(array)) {
    return array.reduce((sum, elem) => sum + elem.id, 0);
  }
  return [];
}
