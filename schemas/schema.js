const { buildSchema } = require("graphql");

module.exports = buildSchema(`
    
    type User {
        id: ID
        name: String
        github: String
        age: Int
    }

    type Query {
        user(id: ID!): User
        users: [User]
    }

    type Mutation {
        createUser(name: String!, github: String!, age: Int!): User
    }

`);
