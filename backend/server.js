import express from "express";
import mongoose from "mongoose";
import pubgRouter from "../backend/routers/pubgRouter.js";
import userRouter from "./routers/userRouter.js";
import data from "../backend/data.js";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect("mongodb://localhost/megabite", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

// app.get("/api/pubgMaps", (req, res) => {
//   res.send(data.pubgMaps);
// });

// app.get("/api/users", (req, res) => {
//   res.send(data.users);
// });

app.use("/api/users", userRouter);
app.use("/api/pubgMaps", pubgRouter);

app.get("/", (req, res) => {
  res.send("Server is ready");
});

const port = 5000;

app.listen(port, () => {
  console.log(`Serve at http://localhost:${port}`);
});
