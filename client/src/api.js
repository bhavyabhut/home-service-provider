const API = {
  students: "/v1/student/",
  student: "/v1/student/:studentId",
  colleges: "/v1/college/",
  college: "/v1/college/:collegeId",
  collegeStudent: "/v1/student/college/:collegeId",
  collegeByState: "/v1/college/state/:stateId",
  collegeByLocation: "/v1/college/location/:locationId",
  collegeChart: "/v1/college/chart/pie",
  collegeCourseChart: "/v1/college/chart/pie/course",
};
export default API;
