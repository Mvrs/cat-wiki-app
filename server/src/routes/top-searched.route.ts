import { Router } from "express";
import topSearchedController from "../controllers/top-searched.controller";

const TopSearchedRoute = Router();

TopSearchedRoute.get("/", topSearchedController);

export default TopSearchedRoute;
