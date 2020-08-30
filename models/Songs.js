const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const SongSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    artist: {
        type: String,
        required: true
    },
    inFavorite: {
        type: Boolean,
        required: true,
        default: false,
    },
    inUpNext: {
        type: Boolean,
        required: true,
        default: false,
    },
    inHistory: {
        type: Boolean,
        required: true,
        default: false,
    },
    date: {
        type: Date,
        default: Date.now
    }
});



module.exports = Song = mongoose.model('song',SongSchema);