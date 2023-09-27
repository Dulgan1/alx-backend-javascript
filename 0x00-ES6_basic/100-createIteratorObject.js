export default function createIteratorObject(report) {
  const depts = report.allEmployees;
  const names = [];
  for (const nameList in Object.keys(depts)) {
    names.push(...nameList);
  }
  return names;
}
