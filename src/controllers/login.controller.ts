import { Request, response, Response } from 'express';
import LoginModel from '../models/login.model';
import labels from '../labels';

const login = async (req: Request, res: Response) => {
    try{

        const { username, password } = req.body;

        const user = await LoginModel.findOne({ username });

        if(!user) {
            return res.status(400).json({ 
                msg: labels.MSG_400,
                response: labels.FAILED_LOGIN
            });
        }

        if(!user._status){
            return res.status(400).json({ 
                msg: labels.MSG_400,
                response: labels.STATUS_USER
            });
        }

    } catch (error) {
        console.error(error);
    }
}