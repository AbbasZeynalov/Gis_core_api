// @ts-ignore
const { makeExecutableSchema } = require('graphql-tools');

const moduleSchema = makeExecutableSchema({
    typeDefs: `
        type Query {
            module: [Module]
        }
        type Module {
            id: ID!,
            name: String!
            url: String!, 
        }
    `
});

export default moduleSchema;
