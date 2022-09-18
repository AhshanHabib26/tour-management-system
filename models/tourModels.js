const mongoose = require("mongoose");

const tourSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      unique: [true, "The {VALUE} Already Taken"],
      minLength: 3,
      maxLength: 100,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    views: {
      type: Number,
      default: 0,
    },
  },
  { timestamp: true }
);

const Tour = mongoose.model("Tour", tourSchema);

module.exports = Tour;
