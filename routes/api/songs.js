const express = require('express');

const router = express.Router();

// Song Model
const Song = require('../../models/Songs');

/**
 * @GET 'api/items
 * @DESC Get Songs
 */
router.get('/',function fetchAll(req,res) {
    Song.find()
        .then(songs => res.json(songs))
    
})


/**
 * @POST 'api/items
 * @DESC Create new Song
 */
router.post('/',function createSong(req,res) {
    const {title, artist} = req.body;
    const newSong = new Song({title, artist});

   newSong.save()
    .then(song => res.json(song))
    
})

/**
 * @DELETE 'api/items
 * @DESC Delete Song
 */
router.delete('/:id',function deleteSong(req,res) {
    Song.findById(req.params.id)
        .then(song => song.remove() .then(() => res.json({removed: true})))
        .catch( err = res.status(404).json({removed: false}));
    
})

/**
 * @PAthc 'api/items
 * @DESC Update Song
 */
router.put('/:id',function updateSong(req,res) {
    const {title, artist} = req.body;
    const {id} = req.params;

    Song.update({_id:id}, {title,artist})
        .then(() => res.json({updated: true}))
        .catch( err = res.status(404).json({updated: false}));



    // Song.findById(req.params.id)
    //     .then(song => song.update({title}, {artist}) 
    
})


module.exports = router;