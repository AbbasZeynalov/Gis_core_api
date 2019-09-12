const { makeExecutableSchema } = require('graphql-tools');

module.exports = makeExecutableSchema({
    typeDefs: `
        type Query {
            me: Me
        }
        type Mutation {    
            login (username: String!, password: String!): Me!
        }
        type Me {
            id: ID!,
            username: String!
            firstname: String!, 
            lastname: String!, 
            patronymic: String!, 
            email: String!, 
            access_token: String!,
        }
    `
});
