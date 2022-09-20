const dbConnect = require("./mongodb");

const deleteData = async () => {
  const db = await dbConnect();
  const result = await db.deleteOne({ name: "max changed" });

  if (result.acknowledged) {
    console.log("data inserted");
  } else {
    console.log("error");
  }
};

module.exports = deleteData;
