import express, { Router } from "express";
import catController from "../controllers/cat-controller";

const router = express.Router();

router.get("/cat", catController.getMyCatCard);

export = router;
