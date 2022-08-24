import { ApolloServer, gql } from "apollo-server";

const typeDefs = gql`
  # schema is optional as 'Query' is default name for 'query' object
  schema {
      query: Query
  }

  type Query {
    greeting: String
  }
`;

const resolvers = {
  Query: {
    greeting: () => {
      return "Hello world!";
    },
  },
};

const server = new ApolloServer({typeDefs, resolvers});
const { url } = await server.listen({port: 9000})
console.log("Server running at", url)
