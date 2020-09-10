const express = require('express');
const mongoose = require("mongoose");


const db = require('./config/keys').mongoURI;

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

if(process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
}




////Routes////
app.use('/api/songs/', require('./routes/api/songs'));

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


