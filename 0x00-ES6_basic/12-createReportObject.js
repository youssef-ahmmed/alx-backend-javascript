export default function createReportObject(employeesList) {
  const allEmployees = {
    ...employeesList,
  };

  return {
    allEmployees,
    getNumberOfDepartments(allEmployees) {
      return Object.keys(allEmployees).length;
    },
  };
}
