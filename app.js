var express = require('express');
var app = express();

var Agenda = require('agenda');
var Agendash = require('agendash');
var agenda = new Agenda({db: {address: 'mongodb://localhost:27017/agenda'}});

app.listen(3000);
app.use('/dash', Agendash(agenda));