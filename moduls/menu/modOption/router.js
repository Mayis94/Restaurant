import express from "express";

import { ModOptionController } from "./controller";

const router = express.Router();

router.post("/", ModOptionController.createModOption);
router.get("/", ModOptionController.findModOption);
router.put("/:id", ModOptionController.updateModOption);
router.delete("/:id", ModOptionController.deleteModOption);

export default router;
