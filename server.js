const express = require("express");
const formatUptime = require("./src/utils/Formatters/upTimeformat");
const router = require("./src/routes");
const connectReader = require("./src/config/db");

const app = express();

require("dotenv").config();
const port = process.env.READER_PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


connectReader()


const startTime = new Date();

app.get("/health-check", (req, res) => {
  const currentTime = new Date();
  const uptimeInSeconds = (currentTime - startTime) / 1000;

  res.status(200).json({
    upTime: formatUptime(uptimeInSeconds),
  });
});


app.get("/", (req, res) => {
  res.send("reader module is running");
});

app.use("/reader", router);

app.listen(port, () => {
  console.log(`reader module is running on ${port}`);
});
