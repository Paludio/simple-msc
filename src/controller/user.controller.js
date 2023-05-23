const { userService } = require('../service')

const login = async (req, res) => {
  const { token, message } = await userService.login(req.body);

  if (token) return res.status(200).json({ token });
  
  return res.status(400).json({ message: message});
}

const newUser = async (req, res) => {
  const { status, message } = await userService.newUser(req.body);

  if (status) return res.status(201).json({ message: status });

  return res.status(400).json({ message: message });
}


module.exports = {
  login,
  newUser
}