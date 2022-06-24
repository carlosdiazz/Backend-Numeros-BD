const mongoose = require('mongoose');

const configuracionSchema = mongoose.Schema({
    loteria: {
        type: String,
        required: true
    },
    sorteo: {
        type: Array,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    image_poster: {
        type: String,
        required: true
    }
})
module.exports = mongoose.model('configuracionLoteria',configuracionSchema)