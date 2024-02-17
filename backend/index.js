
const express = require('express');
const cors = require("cors");
const rootRouter = require("./routes/index");

const app = express();

app.use(cors({ origin: 'https://web2wallet-archived.rohithreddy.site' }));

app.use(express.json());

app.use("/api/v1", rootRouter);

app.listen(3000, () => console.log("server is running on port 3000"));

