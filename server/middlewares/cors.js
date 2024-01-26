const cors = require("cors");

const corsOptions = {
  origin: "https://medcore.onrender.com",
};

module.exports = cors(corsOptions);
