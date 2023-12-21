const express = require('express');
const port = 3000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));



const ideasRouter = require('./routes/ideas');
app.use('/api/ideas', ideasRouter);


app.listen(port, () => console.log(`Server listening on port ${port}`));