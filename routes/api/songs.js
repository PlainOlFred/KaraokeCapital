const express = require('express');
const router = express.Router();

const connection = require("../../db/connection")

/**
 * @GET 'api/songs
 * @DESC Get Songs
 */
router.get('/',function fetchAll(req,res) {
    
    connection.query("SELECT * FROM songs", function(err, response) {
        if (err) throw err;
        res.json(response);
    })
    
})



module.exports = router;