const { gql } = require('apollo-server-express');

const typeDefs = gql`
type Book {
   authors
   description
   bookId
   image
   link
   title
  }

  type User {
    username
    email
    password
    savedBooks: []
    
  }

  type Query {
    book: [Book]
    user(_id: String): [User]
  }

//   type Mutation {
//     createUser(tech1: String!, tech2: String!): Matchup
//     createVote(_id: String!, techNum: Int!): Matchup
//   }
`;

module.exports = typeDefs;