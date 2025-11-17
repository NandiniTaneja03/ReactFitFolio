// typeDefs.js
const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    email: String!
  }

  type AuthPayload {
    token: String!
    user: User!
  }

  type Mutation {
    signUp(name: String!, email: String!, password: String!): AuthPayload
    signIn(email: String!, password: String!): AuthPayload
  }

  type Query {
    users: [User]
  }
`;

module.exports = typeDefs;
