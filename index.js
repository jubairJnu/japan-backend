const express = require("express");
const app = express();
const cors = require("cors");
const config = require("./src/app/config");
const { default: mongoose } = require("mongoose");
const globalErrorHandler = require("./src/app/middleware/globalErrorHandler");
const router = require("./src/app/routes");
const port = config.port;

app.use(cors({ origin: "http://localhost:5173", credentials: true }));

app.use("/api/v1", router);

app.get("/", (req, res) => {
  res.send("server is runnign");
});

async function main() {
  try {
    await mongoose.connect(config.database_url);

    console.log("Connected to MongoDB with Mongoose");

    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`);
    });
  } catch (err) {
    console.log(err);
  }
}

main();

app.use(globalErrorHandler);