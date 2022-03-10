import express from "express";

import { ConnectController } from "./controller";

const router = express.Router();

router.post("/", ConnectController.createMenu);
router.post("/order", ConnectController.createOrder);
router.get("/", ConnectController.sortProduct);



export default router;
