import express from "express";

import { addPosition, getPosition } from "./controller";

const router = express.Router();

router.post("/",addPosition );
router.get("/", getPosition);
// router.get("/author", getBookAll);

export default router;