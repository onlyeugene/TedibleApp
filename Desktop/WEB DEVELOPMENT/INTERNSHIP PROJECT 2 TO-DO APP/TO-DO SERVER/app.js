const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const app = express();

const port = 3000;

const taskRouter = require("./routes/taskRouter");
const authRouter = require("./routes/authRouter");
const notFound = require("./middlewares/notFound");
const errorHandler = require("./middlewares/error");
const morgan = require("morgan");

app.use((req, res, next) => {
  console.log("A request just came in");
  next();
});

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use("/api/auth", authRouter);
app.use("/api/task", taskRouter);
app.use(errorHandler);
app.use(notFound);

const start = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_URI);
    console.log("DB connected!");
    app.listen(port, () => {
      console.log(`Server is listening on http://localhost:${port}`);
    });
  } catch (error) {
    console.log(`Could not connect due to ${error.message}`);
  }
};
start();
