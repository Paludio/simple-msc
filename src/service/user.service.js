const { userModel } = require('../model');

const login = async (userData) => {
  const { message, status } = await userModel.login(userData);

  if (!status) {
    return { message, status};
  }

  const token = 'tokenCorreto';

  return {
    token
  };
}

const newUser = async (userData) => {
  const { message, status } = await userModel.newUser(userData);

  if (!status) {
    return { message, status };
  }

  return { message, status };
}


module.exports = {
  login,
  newUser
}