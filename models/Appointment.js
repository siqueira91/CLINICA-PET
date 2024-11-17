const mongoose = require('mongoose');

const AppointmentSchema = new mongoose.Schema({
    nome: String,
    pet: String,
    data: Date,
    horario: String
});

module.exports = mongoose.model('Appointment', AppointmentSchema);
