import { NextFunction, Request, Response } from "express";
import labels from "../labels";
import { validationResult } from "express-validator";


const validateFieldsRequest = (req: Request, res: Response, next: NextFunction) => {
    try {
        
        const errors = validationResult(req)

        if(!errors.isEmpty()) {
            return res.status(400).json({
                msg: labels.EMPTY_FIELD,
                errors
            })
        }

        next()
    } catch (error) {
        console.error(error)
        res.status(500).json({
            msg: labels.MSG_500,
            error: labels.ERROR
        })       
    }
}

export { validateFieldsRequest }