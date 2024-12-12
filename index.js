const express = require("express");
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const config = require("./src/app/config");
const { default: mongoose } = require("mongoose");
const globalErrorHandler = require("./src/app/middleware/globalErrorHandler");
const router = require("./src/app/routes");
const port = config.port;

app.use(
  cors({
    origin: ["http://localhost:3000", "https://japan-client.vercel.app"],
    credentials: true,
  })
);
app.use(cookieParser());
app.use(express.json());
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
