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

exports.getTourServiceById = async (tourId) => {
  const findTourById = await Tour.findByIdAndUpdate(
    { _id: tourId },
    { $inc: { views: 1 } }
  );
  return findTourById;
};
