const {
  getTourService,
  createTourService,
  getTourServiceById,
  updateTourServiceById,
} = require("../services/tourServices");

exports.getTours = async (req, res, next) => {
  try {
    const tourQureies = {};

    if (req.query.fields) {
      const byFields = req.query.fields.split(",").join(" ");
      tourQureies.byFields = byFields;
    }

    if (req.query.sort) {
      const bySort = req.query.sort.split(",").join(" ");
      tourQureies.bySort = bySort;
    }

    const tours = await getTourService(tourQureies);
    res.status(200).json({
      status: "Success",
      data: tours,
    });
  } catch (error) {
    res.status(400).json({
      status: "Failed",
      error: error.message,
    });
  }
};

exports.createTours = async (req, res, next) => {
  try {
    const data = req.body;
    const toursCreate = await createTourService(data);
    res.status(201).json({
      status: "Success",
      message: "Tour Successfully Created",
      data: toursCreate,
    });
  } catch (error) {
    res.status(400).json({
      status: "Failed",
      message: "Tour Doesn't Created",
      error: error.message,
    });
  }
};

exports.getToursById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const toursId = await getTourServiceById(id);
    res.status(201).json({
      status: "Success",
      data: toursId,
    });
  } catch (error) {
    res.status(400).json({
      status: "Failed",
      message: "Tour Doesn't Found",
    });
  }
};

exports.updateToursById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = req.body;
    const updateId = await updateTourServiceById(id, data);
    res.status(200).json({
      status: "Success",
      message: "Data  successfully updated",
    });
  } catch (error) {
    res.status(400).json({
      status: "Failed",
      message: "Data doesn't updated",
      error: error.message
    });
  }
};
