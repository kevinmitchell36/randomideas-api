const express = require('express');
const app = express();
require('dotenv').config();
const port = process.env.PORT || 8000;
const connectDB = require('./config/db');

connectDB();

app.use(express.json());
app.use(express.urlencoded({extended: false}));





const ideasRouter = require('./routes/ideas');
app.use('/api/ideas', ideasRouter);


app.listen(port);