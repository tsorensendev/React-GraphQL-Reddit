const graphql = require('graphql');
const { GraphQLString } = graphql;
const UserType = require('../../types/user_type');
const AuthService = require('../../../utils/auth');

const signup = {
  type: UserType,
  args: {
    email: { type: GraphQLString },
    password: { type: GraphQLString },
  },
  resolve(parentValue, { email, password }, req){
    return AuthService.signup({ email, password, req });
  },
};

module.exports = signup;
