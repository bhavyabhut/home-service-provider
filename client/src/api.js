import config from './config';

const API = {
  students: `${config.API_END_POINT}${config.VERSION}/student/`,
  student: `${config.API_END_POINT}${config.VERSION}/student/:studentId`,
  colleges: `${config.API_END_POINT}${config.VERSION}/college/`,
  college: `${config.API_END_POINT}${config.VERSION}/college/:collegeId`,
  collegeStudent: `${config.API_END_POINT}${config.VERSION}/student/college/:collegeId`,
  collegeByState: `${config.API_END_POINT}${config.VERSION}/college/state/:stateId`,
  collegeByLocation: `${config.API_END_POINT}${config.VERSION}/college/location/:locationId`,
  collegeChart: `${config.API_END_POINT}${config.VERSION}/college/chart/pie`,
  collegeCourseChart: `${config.API_END_POINT}${config.VERSION}/college/chart/pie/course`,
  login: `${config.API_END_POINT}${config.VERSION}/login`,
  registration: `${config.API_END_POINT}${config.VERSION}/login/registration`,
  auth: `${config.API_END_POINT}${config.VERSION}/login/auth`,
  categories: `${config.API_END_POINT}${config.VERSION}/categories`,
  states: `${config.API_END_POINT}${config.VERSION}/states`,
  categoryDashboard: `${config.API_END_POINT}${config.VERSION}/categories/dashboard`,
  services: `${config.API_END_POINT}${config.VERSION}/services`,
  getServiceById: `${config.API_END_POINT}${config.VERSION}/services/:serviceId`,
  servicesChart: `${config.API_END_POINT}${config.VERSION}/services/chart`,
  sendOtp: `${config.API_END_POINT}${config.VERSION}/login/otp`,
  verifyOtp: `${config.API_END_POINT}${config.VERSION}/login/verifyOtp`,
  changePassword: `${config.API_END_POINT}${config.VERSION}/login/changePassword`,
  addCategory: `${config.API_END_POINT}${config.VERSION}/categories/addCategory`,
  categoryImage: `${config.API_END_POINT}${config.VERSION}/categoryImages/:id`,
  addService: `${config.API_END_POINT}${config.VERSION}/services/addService`,
  getAllCity: `${config.API_END_POINT}${config.VERSION}/city`,
};

export default API;
