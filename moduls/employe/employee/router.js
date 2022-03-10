import express from "express";

import {addEmployee, getEmployee } from "./controller";

const router = express.Router();

router.post("/",addEmployee );
router.get("/", getEmployee);
// router.get("/author", getBookAll);

export default router;