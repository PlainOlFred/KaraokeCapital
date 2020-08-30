const express = require('express');
const db = require('./config/database');


const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));



app.use('/api/songs/', require('./routes/api/songs'));

const PORT = process.env.PORT || 5000;
db();

app.listen(PORT, function serverConnected() {
    console.log(`Karaoke Capital App listening on PORT ${PORT}`)
})


