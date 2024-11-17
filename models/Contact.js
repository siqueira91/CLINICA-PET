const mongoose = require('mongoose');

const ContactSchema = new mongoose.Schema({
    nome: String,
    email: String,
    mensagem: String
});

module.exports = mongoose.model('Contact', ContactSchema);
