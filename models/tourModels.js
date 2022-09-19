const mongoose = require("mongoose");


// Tour Model Schema

const tourSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      unique: [true, "The {VALUE} already taken"],
      minLength: 3,
      maxLength: 100,
    },
    description: {
      type: String,
      required: true,
    },
    address: {
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
  { timestamps: true }
);

const Tour = mongoose.model("Tour", tourSchema);

module.exports = Tour;
