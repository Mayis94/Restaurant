import express from "express";

import { ProductController } from "./controller";

const router = express.Router();

router.post("/", ProductController.createProduct);
router.post("/many", ProductController.manyProduct);
router.get("/", ProductController.findProduct);
router.put("/:id", ProductController.updateProduct);
router.delete("/:id", ProductController.deleteProduct);

export default router;
