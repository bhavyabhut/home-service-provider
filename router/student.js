const student = require('express').Router();

const {
  getStudentById,
  getStudentsByCollegeId,
  getAllStudents,
} = require('../controller/student');

student.route('/').get(getAllStudents);
student.route('/college/:collegeId').get(getStudentsByCollegeId);
student.route('/:studentId').get(getStudentById);

module.exports = student;
