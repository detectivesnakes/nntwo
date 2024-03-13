/*
EXPRESS     : FRAMEWORK
MONGOOSE    : DATABASE
MORGAN      : LOGS REQUESTS
CORS        : FE/BE HANDSHAKES
DOTENV      : STORE INFO SAFELY
NODEMON     : QUICK RELOAD
*/

// imports
const express = require('express');
const mongodb = require('mongoose');
const morgan = require('morgan');
const cors = require('cors');
require('dotenv').config();

// app
const app = express();

mongodb
    .connect(process.env.MONGO_URI, {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
}).then(() => console.log('Mongo Connected')).catch(e => console.log("MongoDB Error", e));

/*
mongodb.connect(process.env.MONGO_URI, function (err, db) {
    if (err) throw err;
    var db1 = db.db("nourishdata");
    var testrecipe = {
        name: 'cookies',
        milk: 'yes'
    };

    db1.collection("recipedata").insertOne(testrecipe, function(err, res) {
        if (err) throw err;
        console.log('good run boys good run');
        db1.close;
    });
});
*/

// code
app.use(morgan('dev'));
app.use(cors({ origin: true, credentials: true }));

// routes
const testRoutes = require('./routes/test');
app.use('/', testRoutes);

// ports
const port = process.env.PORT || 8080; // backend port

// listener
const server = app.listen(port, () =>
    console.log('Server running on port ${port}')
);