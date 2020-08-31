const mongoose = require('mongoose');
const db = require('./keys'). mongoURI;



function connectDatabase() {

    mongoose.connect(process.env.MONGODB_URI || db,  
    { useNewUrlParser: true, useUnifiedTopology: true})
        .then(() => {
            console.log('MongoDB Connected!')
        })
        .catch((err) => {
            console.log(err)
        })
}


module.exports = connectDatabase;