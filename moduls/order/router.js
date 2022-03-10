import express from "express";

import { OrderController } from "./controller";

const router = express.Router();

router.post("/", OrderController.createOrder);
router.get("/", OrderController.findOrders);
router.put("/:id", OrderController.updateOrder);
router.delete("/:id", OrderController.deleteOrder);

export default router;
