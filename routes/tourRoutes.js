const express = require("express");
const {
  getTours,
  createTours,
  getToursById,
  updateToursById,
} = require("../controllers/tourControllers");
const router = express.Router();

router.route("/").get(getTours).post(createTours);

router.route("/trending").get();

router.route("/cheapset").get();

router.route("/:id").patch(updateToursById).get(getToursById);

module.exports = router;
