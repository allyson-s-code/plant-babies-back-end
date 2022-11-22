const { MongoClient } = require("mongodb");
const Db = process.env.ATLAS_URI;
const client = new MongoClient(Db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

var _db;

module.exports = {
  connectToServer: function (callback) {
    client.connect((err) => {
      if (err) {
        console.error(err);
        return false;
      }
      // connection to mongo is successful, listen for requests
      app.listen(Db, () => {
        console.log("listening for requests");
      });

      if (db) {
        _db = db.db("plant-babies-data");
        console.log("Successfully connected to MongoDB.");
      }
    });
  },

  getDb: function () {
    return _db;
  },
};
