const express = require("express");
const {
  getTours,
  createTours,
  getToursById,
  updateToursById,
  getToursTrending,
  getToursCheapsetData,
} = require("../controllers/tourControllers");
const router = express.Router();

router.route("/").get(getTours).post(createTours);

router.route("/trending").get(getToursTrending);

router.route("/cheapset").get(getToursCheapsetData);

router.route("/:id").patch(updateToursById).get(getToursById);

module.exports = router;
