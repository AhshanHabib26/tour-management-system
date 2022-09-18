const Tour = require("../models/tourModels");

exports.getTourService = async () => {
  const getResult = await Tour.find({});
  return getResult;
};

exports.createTourService = async (data) => {
  const createResult = await Tour.create(data);
  return createResult;
};
