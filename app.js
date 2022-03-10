require("dotenv").config();
import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";

import AdminRouter from "./moduls/employe/admin/router";
import EmployeeRouter from "./moduls/employe/employee/router";
import PositionRouter from "./moduls/employe/position/router";

import CategoryRouter from "./moduls/menu/category/router";
import ProductRouter from "./moduls/menu/product/router";
import ModGroupRouter from "./moduls/menu/modGroup/router";
import ModOptionRouter from "./moduls/menu/modOption/router";

import OrdersRouter from "./moduls/order/router";
import ConnectRouter from "./moduls/menu/connect/router";
import UserRouter from "./moduls/user/route"
const app = express();

const PORT = process.env.PORT || 4000;

//middlewares
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
mongoose.connect(process.env.DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", (error) => console.log(error));
db.once("open", () => console.log("Connected to the db"));

app.use("/admin", AdminRouter);
app.use("/employee", EmployeeRouter);
app.use("/position", PositionRouter);

app.use("/category/", CategoryRouter);
app.use("/product/", ProductRouter);
app.use("/modGroup/", ModGroupRouter);
app.use("/modOption/", ModOptionRouter);

app.use("/orders", OrdersRouter);
app.use("/connect", ConnectRouter);
app.use("/user", UserRouter);

app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}`);
});
