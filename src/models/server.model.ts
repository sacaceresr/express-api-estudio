import express, { Application } from "express";
import labels from "../labels";
import db_connection from "../database/config";
import loginRoutes from "../routes/login.routes";
import userRoutes from "../routes/user.routes";
import cors from "cors";


class Server {
    private app: Application
    private port: string

    //Paths
    private login_path: string
    private user_path: string

    constructor(){
        this.app = express()
        this.port = process.env.PORT || "3000"

        this.login_path = '/api/login'
        this.user_path = '/api/users'

        this.connectDB()
        this.middlewares()
        this.routes()
    }

    listen() {
        this.app.listen(this.port, () => console.log(labels.LISTEN_SERVER + this.port))
    }

    async connectDB(){
        await db_connection()
    }

    routes(){
        this.app.use(this.login_path, loginRoutes)
        this.app.use(this.user_path, userRoutes)
    }

    middlewares(){
        this.app.use(cors())
        this.app.use(express.json())
    }
}

export default Server;