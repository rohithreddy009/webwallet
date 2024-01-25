const express = require('express')
const userRouter = require('./user')

const router = express.Router();

app.use('/user', userRouter)

module.exports = router
