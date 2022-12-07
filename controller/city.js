const Cities = require('../schemas/City');
const { resourceError, serverError } = require('../helper/errorHandler');
const { success } = require('../helper/successHandler');

exports.getAllCity = async (req, res) => {
  try {
    const city = await Cities.find();
    success(res, city);
  } catch (e) {
    serverError(res, error);
  }
};
