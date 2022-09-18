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

exports.updateTourServiceById = async (tourId, tourData) => {
  const updateTour = await Tour.updateOne(
    { _id: tourId },
    { $set: tourData },
    {
      runValidators: true,
    }
  );
  return updateTour;
};

exports.getTourTrendingService = async () => {
  const trendingService = await Tour.find({ views: { $gt: 1 } })
    .sort({ views: -1 })
    .limit(3);
  return trendingService;
};

exports.getTourCheapsetService = async () => {
  const cheapsetService = await Tour.find({ price: { $lte: 2000 } }).limit(3);
  return cheapsetService;
};
