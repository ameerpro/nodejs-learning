const express = require("express");
const multer = require("multer");
require("./config");
const Product = require("./product");

const app = express();
app.use(express.json());

app.post("/create", async (req, resp) => {
  let data = new Product(req.body);
  let result = await data.save();
  resp.send(result);
});

app.get("/products", async (req, resp) => {
  let result = await Product.find();
  resp.send(result);
});

app.delete("/delete/:_id", async (req, resp) => {
  let result = await Product.deleteOne(req.params);
  resp.send(result);
});

app.put("/update/:_id", async (req, resp) => {
  let result = await Product.updateOne(req.params, { $set: req.body });
  resp.send(result);
});

app.get("/search/:key", async (req, resp) => {
  let result = await Product.find({
    $or: [
      { name: { $regex: req.params.key } },
      { category: { $regex: req.params.key } },
      { brand: { $regex: req.params.key } },
    ],
  });
  resp.send(result);
});

const uploadFile = multer({
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "uploads");
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + "-" + Date.now() + ".pdf");
    },
  }),
}).single("file");

app.post("/upload", uploadFile, (req, resp) => {
  resp.send("File uploaded");
});

app.listen(5500);
