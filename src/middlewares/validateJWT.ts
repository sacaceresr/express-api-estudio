import { Response, Request, NextFunction, response } from "express";
import labels from "../labels";
import jwt from "jsonwebtoken";
import LoginModel from "../models/login.model";

const valitadeJWT = async (req : Request, res: Response, next: NextFunction) => {
    try {
        
        const token = req.header(labels.AUTHORIZATION)?.split(" ")[1];

        if (!token) {
            return res.status(401).json({
                msg: labels.TOKEN_FAILED
            });
        }

        const {uid} = <any> jwt.verify(token, process.env.SECRET_KEY || "");
        const user = await LoginModel.findById(uid)

        if (!user) {
            return res.status(401).json({
                msg: labels.TOKEN_FAILED
            });
        }

        if (!user._status) {
            return res.status(401).json({
                msg: labels.STATUS_USER
            });
        }

        next();
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            msg: labels.MSG_500,
            response: labels.ERROR
        });
    }
}

export default valitadeJWT;