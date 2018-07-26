const UserType = require('../../types/user_type');

const logout = {
  type: UserType,
  resolve(parentValue, args, req) {
    const { user } = req;
    req.logout();
    return user;
  },
};

module.exports = logout;
