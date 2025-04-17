import { sign } from 'jsonwebtoken';
import labels from '../labels';

const getJwt = (uid: string) => {
    try {
        
        return new Promise((resolve, reject) => {
            const payload = { uid };
            sign(payload, process.env.SECRET_KEY || '', {
                expiresIn: '1h',
                algorithm: 'HS256'
            }, (error, token) => {
                if (error) {
                    console.error(error);
                    reject(labels.ERROR_TOKEN);
                } else {
                    resolve(token);
                }
            })
        })
    } catch (error) {
        console.error(error);
        throw new Error(labels.ERROR);
    }
}

export default getJwt