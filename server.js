require('dotenv').config()
const express = require('express')
const { graphqlExpress, graphiqlExpress } =  require('graphql-server-express')
const bodyParser = require('body-parser')
const cors = require('cors')

var schema = require('./graphql')
let db = require('./database_connection/index')

const app = express().use('*', cors())

const wrapper = async (req, res, next) => {
    let database = await db
    return {
        schema,
        context: { database, req },
        // tracing: true,
        // cacheControl: true
    }
}

app.use('/graphql', bodyParser.json(), graphqlExpress(wrapper))

app.use('/graphiql', graphiqlExpress({
    endpointURL: '/graphql'
}))

app.listen(3000, () => console.log(
    `GraphQL Server running on http://localhost:8080/graphql`
))