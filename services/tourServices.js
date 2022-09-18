const Tour = require("../models/tourModels");

exports.getTourService = async (tourQureies) => {
  const getResult = await Tour.find({})
    .select(tourQureies.byFields)
    .sort(tourQureies.bySort);

  return getResult;
};

exports.createTourService = async (data) => {
  const createResult = await Tour.create(data);
  return createResult;
};
