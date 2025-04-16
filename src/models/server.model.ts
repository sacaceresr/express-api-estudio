import express, { Application } from "express";
import labels from "../labels";
import db_connection from "../database/config";


class Server {
    private app: Application
    private port: string

    constructor(){
        this.app = express()
        this.port = process.env.PORT || "3000"

        this.connectDB()
    }

    listen() {
        this.app.listen(this.port, () => console.log(labels.LISTEN_SERVER + this.port))
    }

    async connectDB(){
        await db_connection()
    }
}

export default Server;