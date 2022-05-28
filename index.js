const express = require("express");
const categoryRouter = require("./router/category");
const latestRouter = require("./router/latest");

const app = express();
const cors = require("cors");
app.use(cors());
app.use("/api", categoryRouter);
app.use("/view", latestRouter);

// Creating Port to run server
var server = app.listen(process.env.PORT || 8081);
