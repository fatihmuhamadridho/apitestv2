const mongoose = require('mongoose');

// Data Schema
const DataSchema = new mongoose.Schema({
    _id: {
        type: String
    },
    tanggal_beli: {
        type: String
    },
    nama_product: {
        type: String
    },
    harga_product: {
        type: String
    },
    jumlah_product: {
        type: String
    },
    total_harga_product: {
        type: String
    }
}, {
    versionKey: false
})

module.exports = mongoose.models.Data || mongoose.model('Data', DataSchema);