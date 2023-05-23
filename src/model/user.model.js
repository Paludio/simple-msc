const { readData, writeData } = require('../utils');

const login = async (userData) => {
  const users = await readData();

  const user = users.find((user) => user.email === userData.email);

  if (!user || user.password !== userData.password) {
    return { message: 'Email or password is incorrect', status: false };
  }

  return { message: 'Login success', status: true }
}

const newUser = async (userData) => {
  const arrayUsers = await readData();
  const user = arrayUsers.find((user) => user.email === userData.email);

  if (user) {
    return { message: 'User already exists', status: false };
  }

  arrayUsers.push(userData);

  const users = await writeData(arrayUsers);

  return { message: 'Create user success', status: users[users.length - 1] }
}

module.exports = {
  login,
  newUser,
}
