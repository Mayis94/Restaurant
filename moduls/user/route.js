import express from "express";

import {  UserController } from "./controller";

const router = express.Router();

router.post("/", UserController.createUser);
router.get("/", UserController.findUser);
router.put("/:id", UserController.updateUser);
router.delete("/:id", UserController.deleteUser);

export default router;