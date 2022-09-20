const dbConnect = require("./mongodb");

const insert = async () => {
  const db = await dbConnect();
  const result = await db.insertOne({
    name: "max 0",
    brand: "micromax",
    price: 300,
    inStock: true,
  });

  if (result.acknowledged) {
    console.log("data inserted");
  } else {
    console.log("error");
  }
};

module.exports = insert;
