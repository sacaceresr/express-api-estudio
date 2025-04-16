import { getModelForClass, prop } from "@typegoose/typegoose"

class Login {

    @prop({required: true, trim: true, unique: true, type: () => String})
    private username: string

    @prop({required: true, trim: true, type: () => String, minlength: 7, maxlength: 15})
    private password: string

    @prop({required: true, type: () => String})
    private role: string

    @prop({required: true, type: () => Boolean})
    private status: boolean

    constructor(username: string, password: string, role: string, status: boolean) {
        this.username = username
        this.password = password
        this.role = role
        this.status = status
    }

    get _username(): string {
        return this.username
    }

    get _password(): string {
        return this.password
    }

    get _role(): string {
        return this.role
    }

    get _status(): boolean {
        return this.status
    }
}

const LoginModel = getModelForClass(Login);
export default LoginModel