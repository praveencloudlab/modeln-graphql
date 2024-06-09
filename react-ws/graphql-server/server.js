const { ApolloServer } = require('apollo-server');
const typeDefs = require('./graphql/typeDefs');
const resolvers = require('./graphql/resolvers');
const db = require('./models');

const server = new ApolloServer({ typeDefs, resolvers });

db.sequelize.sync().then(() => {
  server.listen().then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
  });
});
