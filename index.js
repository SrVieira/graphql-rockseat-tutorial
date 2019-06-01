const app = require('express')();
const expressGraphql = require('express-graphql');
const { buildSchema } = require("graphql");

// schema (data structure and requests)
const schema = buildSchema(`
    
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

// providers (object in memory - populated by users)
const providers = {
    users: []
};


// resolvers (get responses of requests)
let id = 0;

const resolvers = {
  user({ id }) {
    return providers.users.find(item => item.id === Number(id));
  },
  users() {
    return providers.users;
  },
  createUser({ name, github, age }) {
    const user = {
      id: id++,
      name,
      github,
      age
    };

    providers.users.push(user);

    return user;
  }
};

// middleware graphql to work with express
app.use(
    "/graphql",
    expressGraphql({
        schema,
        rootValue: resolvers,
        graphiql: true
    })
);

app.listen(3000);