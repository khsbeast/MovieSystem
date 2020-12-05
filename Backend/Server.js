const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose')

require('dotenv').config();

const app = express();
const port = process.env.port || 5000;

const uri = process.env.ATLAS_URI;
mongoose.connect(uri,{useNewUrlParser: true , useCreateIndex : true});
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("Mongoose connection established");
} )

const homeRouter = require('./routes/home');
const bookRouter = require('./routes/bookticket')
app.use('/',homeRouter);
app.use('/bookticket',bookRouter);

app.use(cors());
app.use(express.json());

app.listen(port,() => {
    console.log(`Server has started : ${port}`)
});

