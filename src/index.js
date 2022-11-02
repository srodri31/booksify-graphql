const { ApolloServer } = require('@apollo/server')
const { startStandaloneServer } = require('@apollo/server/standalone');
const { db } = require('./config/db');
const libraryService = require('./service/libraryService')

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = `#graphql
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.
  enum BookStatus {
    AVAILABLE
    PRESTADO
  }

  input LibraryInput {
    name: String
    address: String
    city: String
    schedule: String
  }

  type Book {
    id: ID!
    status: BookStatus!
    title: String
    publishedOn: String
    editorial: String
    description: String
  }

  type Library {
    id: ID!
    name: String
    address: String
    city: String
    schedule: String
    books: [Book]
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. 
  type Query {
    getLibraries: [Library]
    getLibrary(id: ID!): Library
    # getBooks: [Book]
  }

  type Mutation {
    createLibrary(input: LibraryInput!): Library
  }
`;


// Resolvers define how to fetch the types defined in your schema.
// This resolver retrieves books from the "books" array above.
const resolvers = {
  Query: {
    getLibraries: () => libraryService.getAllLibraries(),
    getLibrary: (parent, args) => {
      console.log(args)
      return db.select().from('library').where("id", args.id).then((data) => {
        console.log(data)
        return data[0]
      })
    }
    // getBooks: () => ([{
    //   id: 1,
    //   title: "Test"
    // }])
  },
  Mutation: {
    createLibrary: (parent, { input }) => (
      db('library').insert(input)
      .returning('*').then(data => {
        console.log(data)
        return data[0]
      })
    )
  },
  Library: {
    // name: (parent) => parent.name, apollo lo hace por defecto
    books: (parent) => db.select().from('book').where("library_id", parent.id).then(books => (
      books.map(book => ({
        ...book,
        status: "CUSTOM"
      }))
    ))
  }
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
  listen: { port: 4001 },
}).then(({url}) => console.log(`🚀  Server ready at: ${url}`))