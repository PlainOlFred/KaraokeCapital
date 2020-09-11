const express = require('express');
const mongoose = require("mongoose");

const routes = require('./routes')

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
} 




////Routes////
app.use(routes);

// Database Connection
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


app.listen(PORT, function serverConnected() {
    console.log(`Karaoke Capital App listening on PORT ${PORT}`)
})
