const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
    nama: {
        type: String,
        required: true
    },
    nim: {
        type: String,
        required: true
    },
    jurusan: {
        type: String,
        required: true
    },
    fakultas: {
        type: String,
        required: true
    },
    alamat: {
        type: String,
        required: true
    },
    universitas: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Users', UserSchema);
