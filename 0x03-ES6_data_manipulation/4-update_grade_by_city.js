const updateStudentGradeByCity = (studentList, city, newGrades) => {
  const idGradMap = new Map();
  newGrades.forEach((student) => {
    idGradMap.set(student.studentId, student.grade);
  });

  const studentsByCity = studentList.filter((student) => (student.location === city));
  return studentsByCity.map((student) => {
    const grade = idGradMap.get(student.id) || 'N/A';
    return { ...student, grade };
  });
};

export default updateStudentGradeByCity;
