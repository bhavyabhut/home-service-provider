import config from './config';

const { API_END_POINT, VERSION } = config;

const routes = {
  students: 'student/',
  student: 'student/:studentId',
  colleges: 'college/',
  college: 'college/:collegeId',
  collegeStudent: 'student/college/:collegeId',
  collegeByState: 'college/state/:stateId',
  collegeByLocation: 'college/location/:locationId',
  collegeChart: 'college/chart/pie',
  collegeCourseChart: 'college/chart/pie/course',
  login: 'login',
  registration: 'login/registration',
  auth: 'login/auth',
  categories: 'categories',
  states: 'states',
  categoryDashboard: 'categories/dashboard',
  services: 'services',
  getServiceById: 'services/:serviceId',
  servicesChart: 'services/chart',
  sendOtp: 'login/otp',
  verifyOtp: 'login/verifyOtp',
  changePassword: 'login/changePassword',
  addCategory: 'categories/addCategory',
  categoryImage: 'categoryImages/:id',
  addService: 'services/addService',
  getAllCity: 'city',
};

const API = {};
Object.keys(routes).forEach((key) => {
  API[key] = `${API_END_POINT}${VERSION}/${routes[key]}`;
});

export default API;
