const express = require("express");
const env = require("dotenv");
const app = express();
var cors = require("cors");
// const bodyParser = require("body-parser");
const mongoose = require("mongoose");

//routes
const customerRoutes = require("./routes/customer");
const authRoutes = require("./routes/authRoute");
const productHRoute = require("./routes/productHroute");
const cartRoute = require("./routes/cartRoute");
const stripeRoute = require("./routes/stripe");
const orderRoute = require("./routes/orderRoute");
const employeeRoute = require("./routes/userRoute");
const attendanceRoute = require("./routes/attendanceRoute");

app.use(cors());
//environment variable
env.config();

app.use(express.json());

//Routes
app.use("/api/customers", customerRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/producth", productHRoute);
app.use("/api/cart", cartRoute);
app.use("/api/checkout", stripeRoute);
app.use("/api/order", orderRoute);
app.use("/api/user", employeeRoute);
app.use("/api/attendance", attendanceRoute);


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
