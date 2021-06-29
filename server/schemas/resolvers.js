const { Book, User } = require('../models');

const resolvers = {
  Query: {
    book: async () => {
      return Book.find({});
    },
    user: async (parent, { _id }) => {
      const params = _id ? { _id } : {};
      return user.find(params);
    },
  },
  Mutation: {
    createUser: async (parent, args) => {
      const user = await User.create(args);
      return user;
    },
    
  },
};

module.exports = resolvers;
