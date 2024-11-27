const mongoose = require("mongoose");

mongoURI = "mongodb://localhost/photobook";

mongoose
  .connect(mongoURI, {
   
  })
  .then(() => {
    console.log("MongoDB connected successfully");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });


