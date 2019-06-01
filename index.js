const app = require('express')();
const expressGraphql = require('express-graphql');

const resolvers = require('./resolvers');
const schema = require('./schemas/schema');

const port = process.env.port || 3000;

// middleware graphql to work with express
app.use(
    "/graphql",
    expressGraphql({
        schema,
        rootValue: resolvers,
        graphiql: true
    })
);

app.listen(port, () => 
    console.log(`Server running on port ${port}!`));