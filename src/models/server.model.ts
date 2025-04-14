import express, { Application } from "express";
import labels from "../labels";


class Server {
    private app: Application
    private port: string

    constructor(){
        this.app = express()
        this.port = process.env.PORT || "3000"
    }

    listen() {
        this.app.listen(this.port, () => console.log(labels.LISTEN_SERVER + this.port))
    }
}

export default Server;