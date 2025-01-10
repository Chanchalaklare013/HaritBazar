import express  from 'express';
import categoryRouter from './routes/category.routes.js';
import userRouter from './routes/user.routes.js';
import cors from 'cors';
// import dotenv from 'dotenv';
import { connection } from './config/dbConfig.js';
import bodyParser from 'body-parser';

// dotenv.config();

const app = express();
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/category', categoryRouter);
app.use('/user', userRouter);
app.listen(4000, () => {
    console.log("server started....");
});