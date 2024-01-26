const cors = require("cors");

const corsOptions = {
  origin: "https://medcorenew.netlify.app",
};

module.exports = cors(corsOptions);
