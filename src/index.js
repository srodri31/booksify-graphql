const { ApolloServer } = require('@apollo/server')
const { startStandaloneServer } = require('@apollo/server/standalone')
const libraryService = require('./service/libraryService')

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = `#graphql
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  type Library {
    id: ID!
    name: String
    address: String
    city: String
    schedule: String
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. 
  type Query {
    getLibraries: [Library]
  }
`;


// Resolvers define how to fetch the types defined in your schema.
// This resolver retrieves books from the "books" array above.
const resolvers = {
  Query: {
    getLibraries: () => libraryService.getAllLibraries()
  },
};

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// Passing an ApolloServer instance to the `startStandaloneServer` function:
//  1. creates an Express app
//  2. installs your ApolloServer instance as middleware
//  3. prepares your app to handle incoming requests
startStandaloneServer(server, {
  listen: { port: 4000 },
}).then(({url}) => console.log(`🚀  Server ready at: ${url}`))