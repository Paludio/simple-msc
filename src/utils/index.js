const fs = require('fs/promises');
const path = require('path');

const readData = async () => {
  const data = path.join(__dirname, '..', '/db/data.json');
  const result = await fs.readFile(data, 'utf-8');
  const { users } = JSON.parse(result);

  return users;
}


const writeData = async (newUsers) => {
  const url = path.join(__dirname, '..', '/db/data.json');

  await fs.writeFile(url, JSON.stringify({users: newUsers}));

  const result = await readData();

  return result;
};

module.exports = {
  readData,
  writeData,
}