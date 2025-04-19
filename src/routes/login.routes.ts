import { Router } from "express";
import login from "../controllers/login.controller";
import { check } from "express-validator";
import labels from "../labels";
import asyncHandler from "../middlewares/asyncHandler";

const router = Router()

router.post("/login", 
    check("username", labels.EMPTY_FIELD).notEmpty(),
    check("password", labels.EMPTY_FIELD).notEmpty(),
    check("role", labels.EMPTY_FIELD).notEmpty(),
    check("status", labels.EMPTY_FIELD).notEmpty(),
    asyncHandler(login))

export default router