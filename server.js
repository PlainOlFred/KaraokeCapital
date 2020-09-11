const express = require('express');
const mongoose = require("mongoose");
const path = require('path');


const routes = require('./routes')

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
} 

app.get('/', function(req, res) {
   res.sendFile(path.join(__dirname, "../client/build/index.html"))
})




////Routes////
app.use(routes);

// Database Connection
  mongoose
    .connect(process.env.MONGODB_URI || 'mongodb://localhost/karaoke-capital', {
      useCreateIndex: true,
      useNewUrlParser: true
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
