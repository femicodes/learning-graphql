const { GraphQLServer } = require('graphql-yoga');
const { prisma } = require('./generated/prisma-client/index')

const resolvers = {
  Query: {
    info: () => `This is the API of the hacker news clone`,
    feed: (root, args, context, info) => {
      return context.prisma.links()
    }
  },
  Mutation: {
    post: (root, args, context) => {
      return context.prisma.createLink({
        url: args.url,
        description: args.description,
      })
    }
  }
};

const server = new GraphQLServer({
  typeDefs: 'src/schema.graphql',
  resolvers,
  context: { prisma },
});

server.start(() => console.log(`Server is running on localhost:4000`));
