export default function createReportObject(employeesList) {
  return {
    allEmployees: employeesList,
    // eslint-disable-next-line no-shadow
    getNumberOfDepartments() {
      return Object.keys(this.allEmployees).length;
    },
  };
}
