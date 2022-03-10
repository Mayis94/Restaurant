import express from "express";

import {addAdmin, getAdmin } from "./controller";

const router = express.Router();

router.post("/",addAdmin );
router.get("/", getAdmin);
// router.get("/author", getBookAll);

export default router;