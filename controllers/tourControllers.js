const {
  getTourService,
  createTourService,
} = require("../services/tourServices");

exports.getTours = async (req, res, next) => {
  try {
    const tours = await getTourService();
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