// @ts-ignore
const { makeExecutableSchema } = require('graphql-tools');

const moduleSchema = makeExecutableSchema({
    typeDefs: `
        type Query {
            modules(offset: Int, limit: Int): Modules
        }
        type Modules {
            items: [Module],
            totalCount: Int
        }
        type Module {
            id: ID!,
            name: String!
            uuid: String!,
            git_deploy_token_username: String!,
            git_deploy_token_password: String!,
            url: String!,
            total: Int!,
            version: [ModuleVersion]
        }
        type ModuleVersion {
            version: String!
        }
    `
});

export default moduleSchema;
