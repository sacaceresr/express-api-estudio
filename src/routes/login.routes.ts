import { Router } from "express";
import login from "../controllers/login.controller";
import { check } from "express-validator";
import labels from "../labels";
import asyncHandler from "../middlewares/asyncHandler";
import { validateFieldsRequest } from "../middlewares/validateFields";

const router = Router()

router.post("/login", 
    [
        asyncHandler(validateFieldsRequest)
    ],
    asyncHandler(login))

export default router