const express = require('express');
const { loginRoute, registerRoute } = require('./routes');

const app = express();

app.use(express.json());

app.use('/login', loginRoute);
app.use('/register', registerRoute)

module.exports = app;