// require("dotenv").config();

// const connect = () => {
//   const mongoose = require("mongoose");
//   mongoose.set("strictQuery", false);
//   mongoose.connect(process.env.MONGO_URL + process.env.MONGO_COLLECTION, {
//     useNewUrlParser: true,
//   });
// };

// module.exports = { connect };
require("dotenv").config();
const uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.t6fbeqt.mongodb.net/medd?retryWrites=true&w=majority`;
const connect = () => {
    const mongoose = require("mongoose");
    mongoose
    .connect(uri)
    .then(() => console.log("mongo connected"))
    .catch((error) => {
      console.error("MongoDB connection error:", error);
    });
};
module.exports = {
    connect
     
};
