const Student = require("../schemas/Student");
const { serverError, resourceError } = require("../helper/errorHandler");
const { success } = require("../helper/successHandler");
const { NO_RESOURCE } = require("../consts");

exports.getAllStudents = async (req, res) => {
  try {
    const students = await Student.find().limit(1000);
    success(res, students);
  } catch (error) {
    serverError(res, error);
  }
};

exports.getStudentById = async (req, res) => {
  const { studentId } = req.params;
  console.log(studentId);
  if (!studentId) resourceError(res, "Please enter student");
  try {
    const student = await Student.findById(studentId);
    if (student) success(res, student);
    else resourceError(res, NO_RESOURCE);
  } catch (error) {
    serverError(res, error);
  }
};

exports.getStudentsByCollegeId = async (req, res) => {
  const { collegeId } = req.params;
  if (!collegeId) resourceError(res, "Please enter college");
  try {
    const students = await Student.find({ collegeId });
    if (students) success(res, students);
    else resourceError(res, NO_RESOURCE);
  } catch (error) {
    serverError(res, error);
  }
};
