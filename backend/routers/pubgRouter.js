import express from "express";
import expressAsyncHandler from "express-async-handler";
import Pubg from "../models/pubgModel.js";
import { isAuth, isAdmin } from "../utils.js";
import data from "../data.js";

const pubgRouter = express.Router();

pubgRouter.get(
  "/",
  expressAsyncHandler(async (req, res) => {
    const pubgMaps = await Pubg.find({});
    res.send(pubgMaps);
  })
);

pubgRouter.get(
  "/data",
  expressAsyncHandler(async (req, res) => {
    // await Pubg.remove({});
    const createdMaps = await Pubg.insertMany(data.pubgMaps);
    res.send({ createdMaps });
  })
);

pubgRouter.get(
  "/:id",
  expressAsyncHandler(async (req, res) => {
    const pubgMap = await Pubg.findById(req.params.id);
    if (pubgMap) {
      res.send(pubgMap);
    } else {
      res.status(404).send({ messsage: "Map not found!" });
    }
  })
);

pubgRouter.post(
  "/",
  isAuth,
  isAdmin,
  expressAsyncHandler(async (req, res) => {
    const pubgMap = new Pubg({
      name: "nazev mapy",
      image: "obrazek mapy",
      description: "popis mapy",
    });
    const createdMap = await pubgMap.save();
    res.send({ message: "Map was created", pubgMap: createdMap });
  })
);

export default pubgRouter;
