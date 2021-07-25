import { Router } from "express";
import getAllBreedController from "../controllers/get-all-breeds.controller";
import getBreedController from "../controllers/get-breed.controller";

const BreedsRoute = Router();

BreedsRoute.get("/", getAllBreedController);
BreedsRoute.get("/:id", getBreedController);

export default BreedsRoute;
