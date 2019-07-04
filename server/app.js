const express = require('express');
const schema = require('./schema/schema');
const graphqlHTTP = require('express-graphql');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');

app.use(cors());
mongoose.connect('mongodb://localhost/jslibrary',{useNewUrlParser: true});
mongoose.connection.once('open',()=>{
    console.log('Connection has been made');
});
app.use('/graphql',graphqlHTTP({
    schema,
    graphiql : true
}));
app.listen(4000,() => {
    console.log('Listening to request on port 4000');
});