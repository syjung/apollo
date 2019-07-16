var ApolloServer = require('apollo-server-express').ApolloServer;

const TYPEDEFS = require('./types.js');
const RESOLVERS = require('./resolvers.js');

const SERVER = new ApolloServer({
    typeDefs: TYPEDEFS,
    resolvers: RESOLVERS,
    playground: {
        endpoint: 'http://localhost:8001/graphql',
        settings: { 'editor.theme': 'light' }
    }
});
module.exports = SERVER;
