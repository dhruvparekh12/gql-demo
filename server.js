import { ApolloServer, gql } from "apollo-server";
import { readFile } from "fs/promises";
import { resolvers } from './resolvers.js'

const PORT = 9000;

const typeDefs = await readFile("./schema.graphql", "utf8");

const server = new ApolloServer({typeDefs, resolvers});
const { url } = await server.listen({port: 9000})
console.log("Server running at", url)


// const apolloServer = new ApolloServer({ typeDefs, resolvers });
// await apolloServer.start()
// apolloServer.applyMiddleware({app, path: '/graphql'})

// app.listen({ port: PORT }, () => {
//   console.log(`Server running on port ${PORT}`);
//   console.log(`GRAPHQL running on http://localhost:${PORT}/graphql`);
// });
