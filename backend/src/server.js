const express = require("express");
const env = require("dotenv");
const app = express();
const cors= require ("cors")
// const bodyParser = require("body-parser");
const mongoose = require("mongoose");

//routes
const customerRoutes = require("./routes/customer");
const authRoutes = require("./routes/authRoute");
// const employeeRoute = require("./routes/userRoute");

app.use(cors())

//environment variable
env.config();

app.use(express.json());

//Routes
app.use("/api/customers", customerRoutes);
app.use("/api/auth", authRoutes);
// app.use("/api/user", employeeRoute);

//routrs (PH)
const suplierRoutes =require("./routes/supplier");
app.use("/api/v1", suplierRoutes); //(PH)

const itemPurchaseRoutes = require("./routes/itemPurchasingRoute")
app.use("/api/itemPur" ,itemPurchaseRoutes )

const paymentForPurchase = require("./routes/supplier")
app.use("/api/v1/purchase", paymentForPurchase);

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
