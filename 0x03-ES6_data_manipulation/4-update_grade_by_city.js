export default function updateStudentGradeByCity(array, city, newGrades) {
  if (Array.isArray(array)) {
    return array.filter((elem) => elem.location === city).map((elem) => {
      const elemGrade = newGrades.filter((x) => x.studentId === elem.id);
      const rElem = elem;
      if (elemGrade.length !== 1) {
        rElem.grade = 'N/A';
      } else {
        rElem.grade = elemGrade[0].grade;
      }
      return rElem;
    });
  }
}
