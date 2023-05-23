const app = require('express');

const route = app.Router();

const { userController } = require('../controller');

route.post('/', userController.newUser);

module.exports = route;