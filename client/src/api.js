const API = {
  students: "http://localhost:5000/v1/student/",
  student: "http://localhost:5000/v1/student/:studentId",
  colleges: "http://localhost:5000/v1/college/",
  college: "http://localhost:5000/v1/college/:collegeId",
  collegeStudent: "http://localhost:5000/v1/student/college/:collegeId",
  collegeByState: "http://localhost:5000/v1/college/state/:stateId",
  collegeByLocation: "http://localhost:5000/v1/college/location/:locationId",
  collegeChart: "http://localhost:5000/v1/college/chart/pie",
  collegeCourseChart: "http://localhost:5000/v1/college/chart/pie/course",
  login: "http://localhost:5000/v1/login",
  registration: "http://localhost:5000/v1/login/registration",
  auth: "http://localhost:5000/v1/login/auth",
  categories: "http://localhost:5000/v1/categories",
  states: "http://localhost:5000/v1/states",
  categoryDashboard: "http://localhost:5000/v1/categories/dashboard",
  services: "http://localhost:5000/v1/services",
};
// const API = {
//   students: "v1/student/",
//   student: "v1/student/:studentId",
//   colleges: "v1/college/",
//   college: "v1/college/:collegeId",
//   collegeStudent: "v1/student/college/:collegeId",
//   collegeByState: "v1/college/state/:stateId",
//   collegeByLocation: "v1/college/location/:locationId",
//   collegeChart: "v1/college/chart/pie",
//   collegeCourseChart: "v1/college/chart/pie/course",
//   login: "v1/login",
//   registration: "v1/login/registration",
//   auth: "v1/login/auth",
// categories: "v1/categories",
// states: "v1/states",
// categoryDashboard: "v1/categories/dashboard",
// services:"v1/services"
//

// };
export default API;
