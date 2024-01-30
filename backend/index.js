// backend/index.js
const express = require('express');
const cors = require("cors");
const rootRouter = require("./routes/index");
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

// root router should handle the requests that starts with /api/v1
app.use("/api/v1", rootRouter);

app.listen(3000);