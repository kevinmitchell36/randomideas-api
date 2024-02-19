const path = require('path');
const express = require('express');
const cors = require('cors');
require('dotenv').config();
const port = process.env.PORT || 8000;
const connectDB = require('./config/db');

connectDB();

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));


// cors middleware
app.use(
  cors({
    origin: ['http://localhost:4000'],
    credentials: true
  })
)



const ideasRouter = require('./routes/ideas');
app.use('/api/ideas', ideasRouter);


app.listen(port);