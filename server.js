const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/clinicpet', { useNewUrlParser: true, useUnifiedTopology: true });

const Appointment = require('./models/Appointment');
const Contact = require('./models/Contact');

// Rota para agendar uma consulta
app.post('/appointments', (req, res) => {
    const newAppointment = new Appointment(req.body);
    newAppointment.save()
        .then(() => res.status(201).send('Agendamento realizado com sucesso'))
        .catch(err => res.status(400).send(err.message));
});

// Rota para contato
app.post('/contacts', (req, res) => {
    const newContact = new Contact(req.body);
    newContact.save()
        .then(() => res.status(201).send('Contato enviado com sucesso'))
        .catch(err => res.status(400).send(err.message));
});

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});
