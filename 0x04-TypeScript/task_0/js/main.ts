interface Student = {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
};

const student1: Student = {
  firstName: 'John',
  lastName: 'Doe',
  age: 20,
  location: 'Somewhere',
};

const student2: Student = {
  firstName: 'Musa',
  lastName: 'Iscoming',
  age: 21,
  location: 'Nowhere',
};

const studentsList: Array<Student> = [student1, student2];
