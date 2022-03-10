import express from "express";

import { CategoryController } from "./controller";

const router = express.Router();

router.post("/", CategoryController.create);
router.get("/", CategoryController.find);
router.get("/all", CategoryController.getAllMenu);
router.put("/:id", CategoryController.updateCategory);
router.delete("/:id", CategoryController.deleteCategory);

export default router;
