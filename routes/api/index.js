const router = require('express').Router();
const path = require('path');

const songRoutes = require('./songs');

router.use('/songs', songRoutes);

// router.use(function(req, res) {
//     res.sendFile(path.join(__dirname, "../client/build/index.html"))
// })

module.exports = router;