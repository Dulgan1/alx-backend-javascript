export default function createIteratorObject(report) {
  const depts = report.allEmployees;
  const names = [];
  for (const name in Object.keys(depts)) {
    names.push(...name);
  }
  return names;
}
