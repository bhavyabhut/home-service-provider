const States = require('../schemas/State');
const { resourceError, serverError } = require('../helper/errorHandler');
const { success } = require('../helper/successHandler');

exports.getstates = async (req, res) => {
  try {
    const states = await States.find();
    success(res, states);
  } catch (error) {
    serverError(res, error);
  }
};
