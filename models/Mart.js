const mongoose = require('mongoose');
const data = require('./data');
const Data = require('./data');

const MartSchema = new mongoose.Schema({
    _id: {
        type: String
    },
    data: [data.schema],
    total_harga: {
        type: String
    }
}, {
    versionKey: false
})

module.exports = mongoose.models.Mart || mongoose.model('Mart', MartSchema);