// resolvers.js
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const users = require('./users');

const SECRET = "MY_SECRET_KEY"; // change for production

const resolvers = {
  Query: {
    users: () => users,
  },
  Mutation: {
    signUp: async (_, { name, email, password }) => {
      // Check if user exists
      const existing = users.find(u => u.email === email);
      if (existing) throw new Error('User already exists');

      const hashed = await bcrypt.hash(password, 10);
      const user = { id: users.length + 1, name, email, password: hashed };
      users.push(user);

      const token = jwt.sign({ userId: user.id }, SECRET, { expiresIn: '1h' });
      return { token, user: { id: user.id, name: user.name, email: user.email } };
    },

    signIn: async (_, { email, password }) => {
      const user = users.find(u => u.email === email);
      if (!user) throw new Error('User not found');

      const valid = await bcrypt.compare(password, user.password);
      if (!valid) throw new Error('Incorrect password');

      const token = jwt.sign({ userId: user.id }, SECRET, { expiresIn: '1h' });
      return { token, user: { id: user.id, name: user.name, email: user.email } };
    },
  }
};

module.exports = resolvers;
