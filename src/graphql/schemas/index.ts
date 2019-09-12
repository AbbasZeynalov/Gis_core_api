import users from "./user";
import modules from "./module";

const { mergeSchemas } = require('graphql-tools');

const MergeSchema = mergeSchemas({
    schemas: [
        users,
        modules
    ],
});

export default MergeSchema;
