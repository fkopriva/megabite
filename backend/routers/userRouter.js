import express from "express";
import expressAsyncHandler from "express-async-handler";
import User from "../models/userModel.js";
import data from "../data.js";
import bcrypt from "bcryptjs";
import { generateToken } from "../utils.js";

const userRouter = express.Router();

userRouter.get(
  "/data",
  expressAsyncHandler(async (req, res) => {
    //await User.remove({});
    const createdUser = await User.insertMany(data.users);
    res.send({ createdUser });
  })
);

userRouter.post(
  "/signin",
  expressAsyncHandler(async (req, res) => {
    const user = await User.findOne({ email: req.body.email });
    if (user) {
      console.log("Našel jsem ho!");
      if (bcrypt.compareSync(req.body.password, user.password)) {
        console.log("Heslo je špatné.");
        res.send({
          _id: user._id,
          name: user.name,
          email: user.email,
          isAdmin: user.isAdmin,
          token: generateToken(user),
        });
        return;
      }
    }
    res.status(401).send({ message: "Invalid email or password" });
  })
);

export default userRouter;