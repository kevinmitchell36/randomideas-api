const express = require('express');
const port = 3000;
const app = express();
const ideasRouter = require('./routes/ideas');


app.use('/api/ideas', ideasRouter);


app.listen(port, () => console.log(`Server listening on port ${port}`));