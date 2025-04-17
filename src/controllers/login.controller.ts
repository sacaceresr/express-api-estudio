import { Request, Response } from 'express';
import LoginModel from '../models/login.model';
import labels from '../labels';
import bcrypt from 'bcryptjs';

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

        const validPassword = bcrypt.compareSync(password, user._password);

        if(!validPassword) {
            return res.status(400).json({ 
                msg: labels.MSG_400,
                response: labels.FAILED_LOGIN
            });
        }

    } catch (error) {
        console.error(error);
        return res.status(500).json({ 
            msg: labels.MSG_500,
            response: labels.ERROR
        });
    }
}