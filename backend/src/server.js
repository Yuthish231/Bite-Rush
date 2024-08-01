import express from 'express';
import bodyParser from 'body-parser';
import userRouter from './routers/user.router.js';
import cors from 'cors';

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', userRouter);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
