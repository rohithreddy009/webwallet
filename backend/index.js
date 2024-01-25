const express = require('express');
const app = express();
const userRouter = require('./routes/index');
const cors = require('cors');

app.use(cors());
app.use(express.json())


// Other middlewares and routes...

// Use apiRouter for all routes starting with /api/v1
app.use('/api/v1', userRouter);

app.listen(3000)
