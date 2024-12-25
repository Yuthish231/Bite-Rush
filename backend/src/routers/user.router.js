import { Router } from "express";
import jwt from 'jsonwebtoken';
import handler from 'express-async-handler';
import { UserModel } from "../Models/user.model.js";
import { BAD_REQUEST } from "../constants/httpStatus.js";
const loginRouter = Router();
loginRouter.post('/login', 
    handler(async (req, res) => {
    const { username, password } = req.body;
    console.log(username,password)
    const user = await UserModel.findOne({username});
    console.log(user)
    console.log(password,user.password)
    if (user && password===user.password) {
        res.send(generateTokenResponse(user));
        return;
    }
    res.status(BAD_REQUEST).send('Username or password is invalid');
}));
const generateTokenResponse=user=>{
    const token = jwt.sign({
        id:user.id,
        username:user.name,
        email:user.email
    },
    process.env.SECRET_KEY,
    {
        expiresIn: '1d'
    });
    return {
        email: user.email,
        username: user.name,
    };
};
export default loginRouter;