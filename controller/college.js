const College = require("../schemas/College");
const { resourceError, serverError } = require("../helper/errorHandler");
const { success } = require("../helper/successHandler");
const {
  errorMessage: { NO_RESOURCE },
  course,
} = require("../consts");

exports.getColleges = async (req, res) => {
  try {
    const colleges = await College.find();
    success(res, colleges);
  } catch (error) {
    serverError(res, error);
  }
};

exports.getCollegeById = async (req, res) => {
  const { collegeId } = req.params;
  console.log(collegeId);
  if (!collegeId) resourceError(res, "Please enter college");
  try {
    const college = await College.findById(collegeId);
    if (college) success(res, college);
    else resourceError(res, NO_RESOURCE);
  } catch (error) {
    serverError(res, error);
  }
};

exports.getCollegesByState = async (req, res) => {
  const { stateId } = req.params;
  if (!stateId) resourceError(res, "Please enter state");
  try {
    const regex = new RegExp(stateId, "i");
    const colleges = await College.find({ state: { $regex: regex } });
    if (colleges) success(res, colleges);
    else resourceError(res, NO_RESOURCE);
  } catch (error) {
    serverError(res, error);
  }
};

exports.getCollegesByLocation = async (req, res) => {
  const { locationId } = req.params;
  if (!locationId) resourceError(res, "Please enter city or location");
  try {
    const regex = new RegExp(locationId, "i");
    const colleges = await College.find({ city: { $regex: regex } });
    if (colleges) success(res, colleges);
    else resourceError(res, NO_RESOURCE);
  } catch (error) {
    serverError(res, error);
  }
};

exports.getCollegesChart = async (req, res) => {
  try {
    const colleges = await College.find();
    let counts = {};
    let data = [];
    const state = colleges.map((dat) => dat.state);
    state.forEach((el) => (counts[el] = 1 + (counts[el] || 0)));
    const keys = Object.keys(counts);
    const values = Object.values(counts);
    data = keys.map((k, i) => ({ name: k, value: values[i] }));
    success(res, data);
  } catch (error) {
    serverError(res, error);
  }
};

exports.getCollegesCourseChart = async (req, res) => {
  try {
    let data = [];
    let counts = {};
    const colleges = await College.find();
    Object.keys(course).forEach((key) =>
      colleges.forEach((college) => {
        if (college.courses.includes(course[key]))
          counts[course[key]] = 1 + (counts[course[key]] || 0);
      })
    );
    const dataKey = Object.keys(counts);
    const dataValue = Object.values(counts);
    data = dataKey.map((k, i) => ({ name: k, value: dataValue[i] }));
    success(res, data);
  } catch (error) {
    serverError(res, error);
  }
};
