// Dependencies
// ===============================================
const express = require('express');
const expressGraphQL = require('express-graphql');
const schema = require('./schema/schema');
const cors = require('cors');

// Express Setup
// ===============================================
const app = express();
const PORT = process.env.PORT || 3001

// GraphQL Setup
// ===============================================
app.use(cors());
app.use(
  '/graphql',
  expressGraphQL({
    schema,
    graphiql: true,
  }),
);

// Server Listener
// ===============================================
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`)
});
