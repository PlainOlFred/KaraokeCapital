const express = require('express');
const db = require('./db/database');
const path = require('path');



const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

if(process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
    app.get('*', function(req, res) {
        res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
    })
}



app.use('/api/songs/', require('./routes/api/songs'));



const PORT = process.env.PORT || 5000;
db();

app.listen(PORT, function serverConnected() {
    console.log(`Karaoke Capital App listening on PORT ${PORT}`)
})


