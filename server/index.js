const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
require('dotenv').config();
const app = express();
const cors = require('cors')
const expressGraphQL = require('express-graphql')
const graphQlSchema = require('./graphql_schema')

app.use(bodyParser.json());

// Using Cors as an express middleware to make GraphQl work properly
app.use(cors())

// Setting up expressGraphQl as an express middleware to enable GraphiQl
app.use('/graphql', expressGraphQL({
    graphQlSchema,
    graphiql: true
}))

// For session setup
app.use(session({
    secret: process.env.SESSION_SECRET,
    saveUninitialized: false,
    resave: false
}))

const PORT =  4000;
app.listen(PORT, () => console.log(`Server Is Listening on port ${PORT} 👏`));