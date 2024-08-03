import { Router } from "express";
import { sample_users } from "../data.js";
import jwt from 'jsonwebtoken';
import handler from 'express-async-handler';
import { UserModel } from "../Models/user.model.js";
import bcrypt from "bcryptjs";
import { BAD_REQUEST } from "../constants/httpStatus.js";

const router = Router();

router.post('/login', 
    handler(async (req, res) => {
    const { email, password } = req.body;
    const user = await UserModel.findOne({email});
    if (user && (await bcrypt.compare(password,user.password))) {
        res.send(generateTokenResponse(user));
        return;
    }
    res.status(BAD_REQUEST).send('Username or password is invalid');
}));

const generateTokenResponse = user => {
    const token = jwt.sign({
        id: user.id,
        name: user.name,
        email: user.email
    },
    process.env.SECRET_KEY,
    {
        expiresIn: '1d'
    });
    return {
        email: user.email,
        name: user.name,
    };
};

export default router;
