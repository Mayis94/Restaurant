import express from "express";

import { ModGroupController } from "./controller";

const router = express.Router();

router.post("/", ModGroupController.createModGroup);
router.get("/", ModGroupController.findModGroup);
router.put("/:id", ModGroupController.updateModGroup);
router.delete("/:id", ModGroupController.deleteModGroup);

export default router;
