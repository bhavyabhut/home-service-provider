const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema(
  {
    firstName: String,
    lastName: String,
    collegeId: String,
    skills: String,
    address: String,
    city: String,
    country: String,
    state: String,
    phone1: String,
    phone2: String,
    email: String,
    web: String,
    year_of_batch: String,
    zip: String,
  },
  { collection: 'students' },
);

const Students = mongoose.model('students', StudentSchema);

module.exports = Students;
