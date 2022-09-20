const dbConnect = require("./mongodb");

const updateData = async () => {
  const db = await dbConnect();
  const result = await db.updateMany(
    { name: "max 0" },
    { $set: { name: "max changed" } }
  );

  console.log(result);
};

module.exports = updateData;
