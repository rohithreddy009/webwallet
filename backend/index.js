const express = require('express');
const app = express();
const userRouter = require('./backend/routes/index');

// Other middlewares and routes...

// Use apiRouter for all routes starting with /api/v1
app.use('/api/v1', userRouter);

// Start the server...
