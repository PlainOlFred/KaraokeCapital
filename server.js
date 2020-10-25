const express = require('express');
const path = require('path');


const routes = require('./routes')

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
} 

app.get('/', function(req, res) {
   res.sendFile(path.join(__dirname, "./client/build/index.html"))
})


////Routes////
app.use(routes);

// Database Connection



app.listen(PORT, function serverConnected() {
    console.log(`Karaoke Capital App listening on PORT ${PORT}`)
})
