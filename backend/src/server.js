const express = require("express");
const env = require("dotenv");
const app = express();
// const bodyParser = require("body-parser");
const mongoose = require("mongoose");

//routes
const customerRoutes = require("./routes/customer");
const authRoutes = require("./routes/authRoute");
// const employeeRoute = require("./routes/userRoute");

//environment variable
env.config();

app.use(express.json());

//Routes
app.use("/api/customers", customerRoutes);
app.use("/api/auth", authRoutes);
// app.use("/api/user", employeeRoute);

//connection to db
mongoose
  .connect(process.env.DATABASE)
  .then(() => {
    console.log("Connected to the DataBase");
    //listen for request
    app.listen(process.env.PORT, () => {
      console.log("listening on port", process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });

app.get("/api/test", () => {
  console.log("Test is successful ");
});
