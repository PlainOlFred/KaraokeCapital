const mongoose = require("mongoose");
// const db = require('../config/keys'). mongoURI;

function connectDatabase() {
  mongoose
    .connect(process.env.MONGODB_URI || 'mongodb://localhost/karaoke-capital', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    })
    .then(() => {
      console.log("MongoDB Connected!");
    })
    .catch((err) => {
      console.log(err);
    });
}

module.exports = connectDatabase;
