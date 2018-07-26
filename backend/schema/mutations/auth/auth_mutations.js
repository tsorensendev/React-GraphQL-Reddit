const signup = require('./signup');
const login = require('./login');
const logout = require('./logout');

const auth = {
  signup,
  login,
  logout,
};

module.exports = auth;
