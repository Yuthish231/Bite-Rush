import { Router } from "express";
import { sample_users } from "../data.js";
import jwt from 'jsonwebtoken';

const router = Router();

router.post('/login', (req, res) => {
    const { email, password } = req.body;
    const user = sample_users.find(
        user => user.email === email && user.password === password
    );
    if (user) {
        res.send(generateTokenResponse(user));
        return;
    }
    res.status(400).send('Username or password is invalid');
});

const generateTokenResponse = user => {
    const token = jwt.sign({
        id: user.id,
        name: user.name,
        email: user.email
    },
    'your-secure-secret-key',
    {
        expiresIn: '1d'
    });
    return {
        id: user.id,
        email: user.email,
        name: user.name,
        token,
    };
};

export default router;
