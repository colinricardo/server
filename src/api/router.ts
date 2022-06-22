import express from "express";
import controllers from "./controllers";

const router = express.Router();

router.post("/user", controllers.createUser);

router.get("/user", controllers.getUser);

export default router;
