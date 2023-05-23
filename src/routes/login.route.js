const app = require('express');

const route = app.Router();

const { userController } = require('../controller');
const verifyLogin = require('../middleware/login/login.schema');

route.post('/', verifyLogin, userController.login);

module.exports = route;