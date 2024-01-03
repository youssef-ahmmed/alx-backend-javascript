export default function createIteratorObject(report) {
  const iterableReport = [];

  for (const value of Object.values(report.allEmployees)) {
    iterableReport.push(...value);
  }

  return iterableReport;
}
