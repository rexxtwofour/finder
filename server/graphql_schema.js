const graphql = require('graphql')
const massive = require('massive')
const axios = require('axios')

// Declaring GraphQl variables to use in schema
const { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLSchema, GraphQLList, GraphQLNonNull } = graphql;

// Initial GraphQl database instance
let dbInstance = {};

// Connecting massive to our database and saving to a variable to use in GraphQl
massive(process.env.CONNECTION_STRING).then(db => {
    dbInstance = db;
});

const Applicants = new GraphQLObjectType({
    name: 'applicants',
    fields: () => ({
        id: {type: GraphQLString},
        name: {type: GraphQLString},
        locationId: {type: GraphQLInt},
        // Fill out rest of fields based on SQL schema
    })
})

const Employers = new GraphQLObjectType({
    name: 'employers',
    fields: () => ({
        id: {type: GraphQLString},
        name: {type: GraphQLString},
        locationId: {type: GraphQLInt},
        // Fill out rest of fields based on SQL schema
    })
})

const Messages = new GraphQLObjectType({
    name: 'messages',
    fields: () => ({
        id: {type: GraphQLString},
        userId: {type: GraphQLInt},
        body: {type: GraphQLString},
        // Fill out rest of fields based on SQL schema
    })
})


// GraphQl queries
const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        applicants: {
            type: new GraphQLList(Applicants),
            resolve() {
                return // Get applicants from SQL database (SQL statement). Example: dbInstance.get_applicants
            }
        },
        employers: {
            type: new GraphQLList(Employers),
            resolve() {
                return // Get employers from SQL database (SQL statement). Example: dbInstance.get_employers
            }
        },
        messages: {
            type: new GraphQLList(Messages),
            resolve() {
                return // Get messages from SQL database (SQL statement). Example: dbInstance.get_messages
            }
        }
    }
})

// GraphQl mutations
const Mutations = new GraphQLObjectType({
    name: 'Mutations',
    fields: {
        addApplicant: {
            type: Applicants,
            args: {
                name: {type: GraphQLString},
                locationId: {type: GraphQLInt}
            },
            resolve(parentValue, args) {
                return // SQL statement or axios call? I think either will work here depending on how we want to set it up.
            }
        },
        addEmployer: {
            type: Employers,
            args: {
                name: {type: GraphQLString},
                locationId: {type: GraphQLInt}
            },
            resolve(parentValue, args) {
                return // SQL statement or axios call? I think either will work here depending on how we want to set it up.
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutations
})
