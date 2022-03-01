const mongoose = require('mongoose');

const MartSchema = new mongoose.Schema({
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
})

module.exports = mongoose.models.Mart || mongoose.model('Mart', MartSchema);