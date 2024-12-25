import dotenv from 'dotenv';
import express from 'express';
import bodyParser from 'body-parser';
import loginRouter from './routers/user.router.js';
import cors from 'cors';
import dbConnect from './config/db.js';
import registerRouter from './routers/register.router.js'

dotenv.config();
dbConnect();

//Load the app

const app = express();
const PORT = process.env.PORT;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Routes

app.use('/api', loginRouter);
app.use('/api',registerRouter)

//Listen Port

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
