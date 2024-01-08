function getStudentIdsSum(studentList) {
  return studentList.reduce((accumulator, student) => (accumulator + student.id), 0);
}

export default getStudentIdsSum;
