const express = require("express");
const app = express();
const route = express.Router();
const dbConnect = require("./mongodb");
const insertRoute = require("./insert");
const updateRoute = require("./update");
const deleteRoute = require("./delete");

const getData = async () => {
  let data = await dbConnect();
  data = await data.find({ price: 250 }).toArray();
  console.log(data);
};

getData();

// insertRoute();

updateRoute();

deleteRoute();

const requestFilters = require("./profile/profile_middleware");
const updateData = require("./update");

route.use(requestFilters);

// app.use(requestFilters);
app.get("/", (req, res) => {
  res.send("Welcome to Home Page");
});

route.get("/users", (req, res) => {
  res.send("Welcome to Users Page");
});

app.get("/about", (req, res) => {
  res.send("Welcome to About Page");
});

route.get("/contact", (req, res) => {
  res.send("Welcome to Contact Page");
});

app.use("/", route);

app.listen(4000);
