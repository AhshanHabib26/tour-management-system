const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const colors = require("colors");
const port = process.env.PORT || 5000;
const app = express();
require("dotenv").config();
const toursRoute = require("./routes/tourRoutes");


// Middleware
app.use(express.json());
app.use(cors());



// Database Connection
mongoose
  .connect(process.env.DATABASE)
  .then(() => {
    console.log("Database Successfully Connect".magenta.bold);
  })
  .catch(() => {
    console.log("Database Connection Error".red.bold);
  });



// Application Routes
app.use("/api/v1/tours", toursRoute);



// Server Connection
app.listen(port, () => {
  console.log(`Server is Running ${port}`.yellow.bold);
});
